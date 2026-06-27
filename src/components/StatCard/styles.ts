import styled, { css } from 'styled-components';
import type { StatCardVariant } from '.';

const variantIconColor: Record<StatCardVariant, ReturnType<typeof css>> = {
  default: css`
    background: ${({ theme }) => theme.ds.primitive.teal[50]};
    color: ${({ theme }) => theme.ds.primitive.teal[500]};
  `,
  primary: css`
    background: ${({ theme }) => theme.ds.primitive.teal[100]};
    color: ${({ theme }) => theme.ds.primitive.teal[600]};
  `,
  success: css`
    background: ${({ theme }) => theme.ds.color.feedback.success.bg};
    color: ${({ theme }) => theme.ds.color.feedback.success.icon};
  `,
  warning: css`
    background: ${({ theme }) => theme.ds.color.feedback.warning.bg};
    color: ${({ theme }) => theme.ds.color.feedback.warning.icon};
  `,
  error: css`
    background: ${({ theme }) => theme.ds.color.feedback.error.bg};
    color: ${({ theme }) => theme.ds.color.feedback.error.icon};
  `,
};

export const Wrapper = styled.div<{ $variant: StatCardVariant }>`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: ${({ theme }) => theme.ds.color.surface.card};
  border: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
  border-radius: ${({ theme }) => theme.ds.radius.xl};
  padding: 16px 20px;
  box-shadow: ${({ theme }) => theme.ds.shadow.sm};
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.ds.shadow.md};
    transform: translateY(-1px);
  }
`;

export const IconBox = styled.span<{ $variant: StatCardVariant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: ${({ theme }) => theme.ds.radius.xl};
  flex-shrink: 0;
  ${({ $variant }) => variantIconColor[$variant]}
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.sm};
  font-weight: ${({ theme }) => theme.ds.font.weight.medium};
  color: ${({ theme }) => theme.ds.color.text.secondary};
  margin: 0 0 4px;
`;

export const Value = styled.h3`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size['2xl']};
  font-weight: ${({ theme }) => theme.ds.font.weight.bold};
  color: ${({ theme }) => theme.ds.color.text.primary};
  margin: 0;
  line-height: ${({ theme }) => theme.ds.font.lineHeight.tight};
`;

export const TrendWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;

  .trend {
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.xs};
    font-weight: ${({ theme }) => theme.ds.font.weight.semibold};
    border-radius: ${({ theme }) => theme.ds.radius.sm};
    padding: 1px 6px;
  }

  .trend--up {
    background: ${({ theme }) => theme.ds.color.feedback.success.bg};
    color: ${({ theme }) => theme.ds.color.feedback.success.text};
  }
  .trend--down {
    background: ${({ theme }) => theme.ds.color.feedback.error.bg};
    color: ${({ theme }) => theme.ds.color.feedback.error.text};
  }
  .trend--neutral {
    background: ${({ theme }) => theme.ds.primitive.neutral[200]};
    color: ${({ theme }) => theme.ds.color.text.secondary};
  }
`;

export const ContentGroup = styled.div`
  flex: 1;
  min-width: 0;
`;

export const SubInfo = styled.span`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.xs};
  color: ${({ theme }) => theme.ds.color.text.tertiary};
`;
