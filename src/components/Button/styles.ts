import styled, { css, keyframes } from 'styled-components';
import { ButtonVariant } from '.';

const loadingSpinner = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

type ButtonProps = {
  variant: ButtonVariant;
};

const buttonModifiers = {
  normal: () => css`
    padding: 12px 24px;
    border: none;
    border-radius: ${({ theme }) => theme.ds.radius.lg};
    width: 100%;
    background: ${({ theme }) => theme.ds.gradient.buttonPrimary};
    box-shadow: ${({ theme }) => theme.ds.shadow.xs};
    text-transform: uppercase;
    font-style: normal;
    font-weight: ${({ theme }) => theme.ds.font.weight.semibold};
    letter-spacing: ${({ theme }) => theme.ds.font.letterSpacing.wide};
    font-size: ${({ theme }) => theme.ds.font.size.sm};
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    color: ${({ theme }) => theme.ds.color.text.inverse};
    transition: background 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.ds.gradient.buttonHover};
      box-shadow: ${({ theme }) => theme.ds.shadow.sm};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    svg {
      animation: ${loadingSpinner} 1s linear infinite;
    }
  `,
  new: () => css`
    cursor: pointer;
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.md};
    font-weight: ${({ theme }) => theme.ds.font.weight.semibold};
    color: ${({ theme }) => theme.ds.color.text.inverse};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 18px;
    gap: 8px;
    width: 100%;
    background: ${({ theme }) => theme.ds.gradient.buttonPrimary};
    border: none;
    box-shadow: ${({ theme }) => theme.ds.shadow.xs};
    border-radius: ${({ theme }) => theme.ds.radius.lg};
    transition: background 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.ds.gradient.buttonHover};
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  ${({ variant }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${!!variant && buttonModifiers[variant]}
  `}
`;
