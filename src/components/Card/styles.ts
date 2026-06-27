import styled, { css } from 'styled-components';
import type { CardVariant } from '.';

type Padding = 'none' | 'sm' | 'md' | 'lg';

const paddingMap: Record<Padding, string> = {
  none: '0',
  sm:   '12px',
  md:   '20px',
  lg:   '28px',
};

const variantStyles: Record<CardVariant, ReturnType<typeof css>> = {
  default: css`
    background: ${({ theme }) => theme.ds.color.surface.card};
    border: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
    box-shadow: ${({ theme }) => theme.ds.shadow.sm};
  `,
  elevated: css`
    background: ${({ theme }) => theme.ds.color.surface.card};
    border: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
    box-shadow: ${({ theme }) => theme.ds.shadow.md};
  `,
  outlined: css`
    background: ${({ theme }) => theme.ds.color.surface.card};
    border: 1.5px solid ${({ theme }) => theme.ds.color.border.default};
    box-shadow: none;
  `,
  flat: css`
    background: ${({ theme }) => theme.ds.color.surface.muted};
    border: 1px solid transparent;
    box-shadow: none;
  `,
};

export const StyledCard = styled.div<{ $variant: CardVariant; $padding: Padding }>`
  border-radius: ${({ theme }) => theme.ds.radius.xl};
  padding: ${({ $padding }) => paddingMap[$padding]};
  transition: box-shadow 0.2s ease;
  ${({ $variant }) => variantStyles[$variant]}
`;

export const CardHeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.md};
  font-weight: ${({ theme }) => theme.ds.font.weight.semibold};
  color: ${({ theme }) => theme.ds.color.text.primary};
  margin: 0;
  line-height: ${({ theme }) => theme.ds.font.lineHeight.snug};
`;

export const CardSubtitle = styled.p`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.sm};
  color: ${({ theme }) => theme.ds.color.text.secondary};
  margin: 4px 0 0;
`;

export const CardBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardFooterWrapper = styled.div<{
  $align: 'left' | 'right' | 'center' | 'space-between';
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 16px;
  margin-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
  justify-content: ${({ $align }) =>
    $align === 'left'
      ? 'flex-start'
      : $align === 'right'
      ? 'flex-end'
      : $align === 'center'
      ? 'center'
      : 'space-between'};
`;
