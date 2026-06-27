import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { parseCookies } from 'nookies'
import { GlobalStyles } from '../styles/Global'
import { COOKIE_ACCESS_TOKEN } from '../services/auth'
import { useAuth } from '../context/AuthContext'
import { Loading } from '../components/Loading'
import { SidebarProvider } from '../context/SidebarContext'

type ProtectedRouteProps = {
    children?: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { [COOKIE_ACCESS_TOKEN]: token } = parseCookies();
    const { user, loading } = useAuth();

    if (!token) {
        return <Navigate to="/login" replace />
    }

    // Aguardar o carregamento do estado do usuário antes de verificar permissões
    if (loading || !user) {
        return <Loading variant="fullPage" />
    }

    return (
        <>
            {<GlobalStyles />}
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </>
    )
}

export default ProtectedRoute;
