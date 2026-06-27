import Heart from "../../components/Icons/Heart";
import NotFoundIcon from "../../components/Icons/NotFound";
import * as S from './styles'

const ErrorPage = () => {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <NotFoundIcon />
      </S.ImageWrapper>

      <S.Heading>Pagina não encontrada.</S.Heading>
      <S.Subtitle>
        Tente novamente ou entre em contato com o suporte.
      </S.Subtitle>

      <S.FooterText>
        FEITO COM <Heart />
      </S.FooterText>
    </S.Wrapper>
  )
};

export default ErrorPage;
