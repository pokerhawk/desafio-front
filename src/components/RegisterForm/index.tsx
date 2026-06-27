import { Link, useNavigate } from "react-router-dom";
import ButtonV2 from "../Button/ButtonV2";
import { Input } from "../Input";
import * as S from '../../pages/Register/styles';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { useState } from 'react';
import AlertIcon from "../../assets/icons/AlertIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import EyeOffIcon from "../../assets/icons/EyeOffIcon";
import HelpIcon from "../../assets/icons/HelpIcon";
import MailIcon from "../../assets/icons/MailIcon";
import { registerRequest } from "../../services/auth";
import Toastify from '../../components/Toastify/Toastify';
import { notify } from "../../utils/Toast/notify";

type InputProps = {
    operator: string;
    email: string;
    password: string;
}

const registerSchema = yup.object({
    operator: yup.string().required('Operador necessário para cadastro!'),
    email: yup.string().email('Email inválido').required('Email é necessário para cadastro!'),
    password: yup.string().matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, "A senha deve conter ao menos 1 carater especial, 1 letra maiúscula, 1 letra minúscula e 1 número").required('Senha é necessário para cadastro!'),
})

const RegisterForm = () => {
    const navigate = useNavigate();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<InputProps>({
        resolver: yupResolver(registerSchema)
    });

    const signUp = async ({ operator, email, password }: InputProps) => {
        try{
            const response = await registerRequest({ email, operator, password });
            if(response === 200){
                notify('success', 'Conta criada')
            } else {
                notify('error', 'Algo deu errado')
            }
            setTimeout(()=>{navigate('/login')}, 1500);
        } catch(err:any){
            notify('warning', err.response.data.message)
        }
    }

    return (
        <>
            <Toastify position='top-right' theme='light' displayTime={1500}/>
            <S.Form onSubmit={handleSubmit(signUp)}>
                <S.InputFormWrapper>
                    <Input
                        label="Operador"
                        type="text"
                        placeholder="Operador"
                        error={errors.operator?.message}
                        {...register('operator')}
                    />
                    <Input
                        label="Email"
                        type="text"
                        placeholder="e-mail"
                        leftIcon={<MailIcon />}
                        rightIcon={errors.email ? <AlertIcon /> : <HelpIcon />}
                        error={errors.email?.message}
                        {...register('email')}
                    />
                    <Input
                        label="Senha"
                        type={isPasswordVisible ? 'text' : 'password'}
                        placeholder="Senha"
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
                        error={errors.password?.message}
                        {...register('password')}
                    />
                    <ButtonV2 socialButton type="submit">Cadastrar</ButtonV2>
                    
                    
                    <S.SignInOptionWrapper>
                        <span>Já possui uma conta?</span>
                        <Link to='/login'>Login</Link>
                    </S.SignInOptionWrapper>
                </S.InputFormWrapper>
            </S.Form>
        </>
    );
}

export default RegisterForm;
