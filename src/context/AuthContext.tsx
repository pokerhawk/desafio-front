import { destroyCookie, parseCookies, setCookie } from "nookies";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { COOKIE_ACCESS_TOKEN, COOKIE_REFRESH_TOKEN, loginRequest } from "../services/auth";
import { jwtDecode } from "jwt-decode";
import { getUser } from "../services/passengers";

type LoginProps = {
    email: string;
    password: string;
}

type UserProps = {
    sub: string;
    email: string;
}

type AuthContextProps = {
    isAuthenticated: boolean;
    loading: boolean;
    login: (data: LoginProps) => Promise<void>;
    logOut: () => void;
    user: UserProps | null
}

export const AuthContext = createContext({} as AuthContextProps);

type AuthProviderProps = {
    children: ReactNode
}

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }: AuthProviderProps) {
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<UserProps | null>(null);
    const [loading, setLoading] = useState(false);

    // Lista de rotas públicas que não precisam de autenticação
    const publicRoutes = [
        '/login',
        '/register',
        '/404',
        '/'
    ];

    // Função para verificar se a rota atual é pública
    const isPublicRoute = (pathname: string): boolean => {
        // Verifica se é uma rota de checkout
        if (pathname.includes('/checkout/')) {
            return true;
        }
        
        // Verifica se está na lista de rotas públicas
        return publicRoutes.some(route => {
            if (route === '/') {
                return pathname === '/';
            }
            return pathname.startsWith(route);
        });
    };

    const defineUser = async () => {
        try {
            setLoading(true);
            const { [COOKIE_ACCESS_TOKEN]: token } = parseCookies();
            const currentPath = window.location.pathname;
            
            if (!token) {
                // Só redireciona para login se não estivermos em uma rota pública
                if (!isPublicRoute(currentPath)) {
                    logOut();
                }
                return;
            }
            
            const tokenDecoded = jwtDecode<UserProps>(token);
            
            const res = await getUser(tokenDecoded.sub);

            setUser({
                email: res.email,
                sub: res.id,
            });
            setIsAuthenticated(true);
        } catch (err) {
            // Só redireciona para login se não estivermos em uma rota pública
            if (!isPublicRoute(window.location.pathname)) {
                logOut();
            }
        } finally {
            setLoading(false);
        }
    }

    const login = async ({ email, password }: LoginProps) => {
        setLoading(true);
        try {
            const { accountId, access_token, refresh_token } = await loginRequest({ email, password });

            if(access_token){
                setCookie(null, COOKIE_ACCESS_TOKEN, access_token);
                setCookie(null, COOKIE_REFRESH_TOKEN, refresh_token);
                setIsAuthenticated(true); 
                setUser({ sub: accountId, email });

                navigate(`/dashboard`);
            }
            throw Error;
        } catch (err: any) {
            throw err;
        } finally {
            setLoading(false);
        }
    }

    const logOut = () => {
        setIsAuthenticated(false);
        destroyCookie(null, COOKIE_ACCESS_TOKEN)
        destroyCookie(null, COOKIE_REFRESH_TOKEN, { path: '/' });
        navigate('/login');
    }

    useEffect(() => {
        defineUser();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                login,
                logOut,
                user,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
