import RegisterForm from '../../components/RegisterForm';
import * as S from './styles';
import LoginImage from "../../assets/images/plane.png";

const Register = () => {
    return (
        <S.RegisterContainer>
            <S.LeftColumn>
                <S.RegisterImage src={LoginImage} alt="Register" />
            </S.LeftColumn>

            <S.RightColumn>
                <S.Wrapper>
                    <S.WelcomeText>Boas vindas.</S.WelcomeText>
                    <S.SubtitleText>Preencha os campos abaixo para criar sua conta.</S.SubtitleText>
                    <RegisterForm />
                </S.Wrapper>
            </S.RightColumn>
        </S.RegisterContainer>
    );
}

export default Register;
