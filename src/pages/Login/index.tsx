import MailIcon from "../../assets/icons/MailIcon";
import ButtonV2 from "../../components/Button/ButtonV2";
import { Input } from "../../components/Input";
import * as S from './styles';
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import AlertIcon from "../../assets/icons/AlertIcon";
import { useState } from "react";
import EyeIcon from "../../assets/icons/EyeIcon";
import EyeOffIcon from "../../assets/icons/EyeOffIcon";
import Toastify from "../../components/Toastify/Toastify";
import { notify } from "../../utils/Toast/notify";
import LoginImage from "../../assets/images/plane.png";

type Login = {
    email: string;
    password: string;
}

const loginSchema = yup.object({
    email: yup.string().email('Email inválido!').required('Email necessário para login!'),
    password: yup.string().required('Senha necessária para login!'),
});

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({email: '',password: ''});
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const { login } = useAuth();
    const loginForm = useForm<Login>({
        resolver: yupResolver(loginSchema)
    });

    const handleLogin = loginForm.handleSubmit(async ({ email, password }) => {
        try {
            await login({ email, password });
        } catch (err: any) {
            notify('error', `Dados inválidos, tente novamente!`)
        }
    })

    return (
        <S.LoginContainer>
            <Toastify position='top-right' theme='light' displayTime={1500}/>
            
            <S.LeftColumn>
                <S.LoginImage src={LoginImage} alt="Login" />
            </S.LeftColumn>

            <S.RightColumn>
                <S.Wrapper>
                    <S.WelcomeText>Boas vindas.</S.WelcomeText>
                    <S.SubtitleText>Preencha os campos abaixo para acessar sua conta.</S.SubtitleText>
                    <S.Form onSubmit={handleLogin}>
                        <S.InputFormWrapper>
                            <Input
                                label="Email"
                                type="text"
                                placeholder="Digite seu email"
                                rightIcon={loginForm.formState.errors.email ? <AlertIcon /> : <MailIcon/>}
                                error={loginForm.formState.errors.email?.message}
                                {...loginForm.register('email')}
                            />
                            <Input
                                label="Senha"
                                type={isPasswordVisible ? 'text' : 'password'}
                                rightIcon={
                                    isPasswordVisible ? (
                                        <S.PasswordToggle
                                            role="button"
                                            tabIndex={0}
                                            aria-label="Ocultar senha"
                                            onClick={() => setIsPasswordVisible(false)}
                                            onKeyDown={(e) =>
                                                e.key === 'Enter' && setIsPasswordVisible(false)
                                            }
                                        >
                                            <EyeOffIcon />
                                        </S.PasswordToggle>
                                ) : (
                                    <S.PasswordToggle
                                        role="button"
                                        tabIndex={0}
                                        aria-label="Mostrar senha"
                                        onClick={() => setIsPasswordVisible(true)}
                                        onKeyDown={(e) =>
                                            e.key === 'Enter' && setIsPasswordVisible(true)
                                        }
                                    >
                                        <EyeIcon />
                                    </S.PasswordToggle>
                                )
                                }
                                placeholder="Digite sua senha"
                                error={loginForm.formState.errors.password?.message}
                                {...loginForm.register('password')}
                                onChange={(e)=>{setLoginInfo({email:loginInfo.email, password: e.target.value})}}
                            />
                            <ButtonV2 socialButton type="submit">Login</ButtonV2>
                            <S.Register to="/register">
                                Cadastrar
                            </S.Register>
                        </S.InputFormWrapper>
                    </S.Form>
                </S.Wrapper>
            </S.RightColumn>
        </S.LoginContainer>
    );
}

export default Login;
