import styled, { css } from 'styled-components';

type ButtonPaginationProps = {
  current?: boolean;
};

export const WrapperPagination = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.ds.spacing[2]};
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.sm};
`;

export const ArrowLeftPagination = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.ds.radius.full};
  border: 1px solid ${({ theme }) => theme.ds.color.border.default};
  background: ${({ theme }) => theme.ds.color.surface.card};
  color: ${({ theme }) => theme.ds.color.text.primary};
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.ds.color.border.brand};
    background: ${({ theme }) => theme.ds.color.surface.muted};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ArrowRightPagination = styled(ArrowLeftPagination)``;

export const WrapperPaginationNumbers = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.ds.spacing[1]};
`;

export const PaginationDots = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.sm};
  color: ${({ theme }) => theme.ds.color.text.tertiary};
  user-select: none;
`;

export const ButtonPagination = styled.button<ButtonPaginationProps>`
  all: unset;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  border-radius: ${({ theme }) => theme.ds.radius.md};
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-weight: ${({ theme }) => theme.ds.font.weight.semibold};
  font-size: ${({ theme }) => theme.ds.font.size.sm};
  line-height: 20px;
  transition: background 0.2s ease, color 0.2s ease;

  ${({ current, theme }) =>
    current
      ? css`
          background: ${theme.ds.primitive.green[500]};
          color: ${theme.ds.color.text.inverse};
        `
      : css`
          background: ${theme.ds.color.surface.muted};
          color: ${theme.ds.color.text.secondary};
        `}

  &:hover:not(:disabled) {
    ${({ current, theme }) =>
      current
        ? css`
            filter: brightness(1.05);
          `
        : css`
            background: ${theme.ds.color.border.subtle};
            color: ${theme.ds.color.text.primary};
          `}
  }
`;
