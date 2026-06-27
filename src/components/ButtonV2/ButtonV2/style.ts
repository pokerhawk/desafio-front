import styled, { css } from 'styled-components';
import { ButtonProps } from '.';
import media from 'styled-media-query';

export const buttonModifiers = {
  socialButton: () => css`
    padding: 10px 16px;
    background: ${({ theme }) => theme.ds.gradient.buttonPrimary};
    color: ${({ theme }) => theme.ds.color.text.inverse};
    border: none;
    transition: background 0.2s ease;
    &:hover { background: ${({ theme }) => theme.ds.gradient.buttonHover}; }
  `,

  textButton: () => css`
    display: flex;
    border-radius: ${({ theme }) => theme.ds.radius.md};
    border: none;
    width: auto;
    height: auto;
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.base};
    font-weight: ${({ theme }) => theme.ds.font.weight.semibold};
    background-color: transparent;
    color: ${({ theme }) => theme.ds.primitive.green[500]};
    transition: background 0.15s ease, color 0.15s ease;

    &:hover {
      background: ${({ theme }) => theme.ds.primitive.green[500]};
      color: ${({ theme }) => theme.ds.color.text.inverse};
    }

    ${media.lessThan('small')`
      justify-content: center;
      align-items: center;
    `}
  `,

  titleButton: () => css`
    background: transparent;
    color: ${({ theme }) => theme.ds.primitive.green[400]};
    border: none;
    width: auto;
    height: auto;
    text-decoration: underline;
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.sm};
  `,

  reportButton: () => css`
    width: fit-content;
    height: 32px;
    padding: 0 10px;
    gap: 6px;
    border: 1px solid ${({ theme }) => theme.ds.color.border.brand};
    background: ${({ theme }) => theme.ds.primitive.green[500]};
    color: ${({ theme }) => theme.ds.color.text.inverse};
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.sm};
    transition: background 0.15s ease;
    &:hover { background: ${({ theme }) => theme.ds.primitive.green[400]}; }
  `,

  logoutButton: () => css`
    height: 36px;
    width: auto;
    min-width: 80px;
    padding: 0 12px;
    gap: 6px;
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.sm};
    font-weight: ${({ theme }) => theme.ds.font.weight.medium};
    color: ${({ theme }) => theme.ds.color.text.inverse};
    background: ${({ theme }) => theme.ds.primitive.red[500]};
    border: none;
    border-radius: ${({ theme }) => theme.ds.radius.lg};
    transition: background 0.15s ease;
    &:hover { background: ${({ theme }) => theme.ds.primitive.red[600]}; }
  `,

  returnButton: () => css`
    height: 36px;
    width: auto;
    min-width: 80px;
    padding: 0 12px;
    gap: 6px;
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.sm};
    font-weight: ${({ theme }) => theme.ds.font.weight.medium};
    color: ${({ theme }) => theme.ds.color.text.primary};
    background: ${({ theme }) => theme.ds.color.surface.muted};
    border: 1px solid ${({ theme }) => theme.ds.color.border.default};
    border-radius: ${({ theme }) => theme.ds.radius.lg};
    transition: all 0.15s ease;
    &:hover {
      background: ${({ theme }) => theme.ds.primitive.neutral[200]};
      border-color: ${({ theme }) => theme.ds.primitive.green[400]};
    }
  `,

  commomButton: () => css`
    background: transparent;
    border: 1px solid ${({ theme }) => theme.ds.color.border.default};
    border-radius: ${({ theme }) => theme.ds.radius.lg};
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
    width: auto;
    padding: 8px 14px;
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.sm};
    font-weight: ${({ theme }) => theme.ds.font.weight.medium};
    color: ${({ theme }) => theme.ds.color.text.primary};
    transition: all 0.15s ease;
    &:hover {
      background: ${({ theme }) => theme.ds.color.surface.muted};
      border-color: ${({ theme }) => theme.ds.color.border.strong};
    }
  `,

  exportExcelButton: () => css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
    padding: 6px 10px;
    width: auto;
    height: fit-content;
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.sm};
    color: ${({ theme }) => theme.ds.color.text.secondary};
    background: ${({ theme }) => theme.ds.color.surface.card};
    border-radius: ${({ theme }) => theme.ds.radius.lg};
    transition: all 0.15s ease;
    &:hover {
      background: ${({ theme }) => theme.ds.primitive.emerald[50]};
      border-color: ${({ theme }) => theme.ds.primitive.emerald[400]};
      color: ${({ theme }) => theme.ds.primitive.emerald[600]};
    }
  `
};

type ButtonTypesProps = 'socialButton' | 'textButton' | 'titleButton' | 'reportButton' | 'returnButton' | 'commomButton' | 'logoutButton' | 'exportExcelButton';

export type StyledButtonProps = {} & Pick<ButtonProps, ButtonTypesProps>

export const Button = styled.button<StyledButtonProps>`
  ${({ theme, socialButton, titleButton, textButton, reportButton, returnButton, logoutButton, commomButton, exportExcelButton }) => css`
    display: flex;
    flex-direction: row;
    border-radius: ${theme.ds.radius.md};
    padding: 8px 14px;
    width: 100%;
    height: 44px;
    gap: 8px;
    align-items: center;
    justify-content: center;
    font-family: ${theme.ds.font.family.poppins};
    font-size: ${theme.ds.font.size.base};
    font-style: normal;
    font-weight: ${theme.ds.font.weight.semibold};
    cursor: pointer;
    background: ${theme.ds.gradient.buttonPrimary};
    color: ${theme.ds.color.text.inverse};
    border: none;
    transition: background 0.2s ease, box-shadow 0.2s ease;

    ${!!textButton         && buttonModifiers.textButton()}
    ${!!socialButton       && buttonModifiers.socialButton()}
    ${!!titleButton        && buttonModifiers.titleButton()}
    ${!!reportButton       && buttonModifiers.reportButton()}
    ${!!returnButton       && buttonModifiers.returnButton()}
    ${!!logoutButton       && buttonModifiers.logoutButton()}
    ${!!commomButton       && buttonModifiers.commomButton()}
    ${!!exportExcelButton  && buttonModifiers.exportExcelButton()}

    ${media.lessThan("small")`
      margin: 4px 0;
    `}
  `}
`;
