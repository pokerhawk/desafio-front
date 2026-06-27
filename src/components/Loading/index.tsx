import * as S from './styles';
import Hello from '../../assets/images/hello.png'

export type LoadingVariant = 'inline' | 'fullPage' | 'overlay';

export interface LoadingProps {
  /** 'inline' = card com spinner (padrão). 'fullPage' = card ocupando altura total. 'overlay' = tela cheia com overlay. */
  variant?: LoadingVariant;
  /** Apenas para variant="overlay": quando false, não renderiza. */
  isLoading?: boolean;
  /** Apenas para variant="overlay": exibe logo acima do spinner. Padrão true. */
  showLogo?: boolean;
}

export const Loading = ({
  variant = 'inline',
  isLoading = true,
  showLogo = true,
}: LoadingProps) => {
  if (variant === 'overlay' && !isLoading) return null;

  if (variant === 'overlay') {
    return (
      <S.OverlayWrapper>
        <S.OverlayContent>
          {showLogo && <S.OverlayLogo src={Hello} alt="" />}
          <S.OverlaySpinner />
        </S.OverlayContent>
      </S.OverlayWrapper>
    );
  }

  return (
    <S.SpinnerWrapper $fullPage={variant === 'fullPage'}>
      <S.Spinner />
    </S.SpinnerWrapper>
  );
};
