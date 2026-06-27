import styled, { css } from 'styled-components';

type WrapperProps = {
  disabled?: boolean;
  error?: boolean;
  inputStyle?: boolean;
  $compact?: boolean;
}

type ArrowProps = {
  isOpen: boolean;
}

type OptionProps = {
  isSelected: boolean;
}

const wrapperModifiers = {
  error: () => css`
    ${InputWrapper} {
      border-color: ${({ theme }: any) => theme.ds.color.border.error};
      box-shadow: 0 0 0 3px ${({ theme }: any) => theme.ds.primitive.red[100]};
    }
  `,
  disabled: () => css`
    opacity: 0.6;
    pointer-events: none;
  `,
  inputStyle: () => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: ${({ theme }: any) => theme.ds.spacing[1]};
  `,
  compact: () => css`
    gap: 0;
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ error, disabled, inputStyle, $compact }) => css`
    position: relative;
    width: 100%;

    ${error && wrapperModifiers.error()}
    ${disabled && wrapperModifiers.disabled()}
    ${inputStyle && wrapperModifiers.inputStyle()}
    ${$compact && wrapperModifiers.compact()}
  `}
`;

export const Label = styled.label<{ inputStyle?: boolean }>`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.sm};
  font-weight: ${({ theme }) => theme.ds.font.weight.medium};
  line-height: ${({ theme }) => theme.ds.font.lineHeight.normal};
  color: ${({ theme }) => theme.ds.color.text.primary};
  margin-bottom: ${({ theme }) => theme.ds.spacing[1]};
  display: inline-block;

  ${({ inputStyle }) =>
    inputStyle &&
    css`
      margin-bottom: 0;
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
    `}
`;

export const InputWrapper = styled.div<{ inputStyle?: boolean; $compact?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: ${({ $compact }) => ($compact ? '36px' : '40px')};
  min-height: ${({ $compact }) => ($compact ? '36px' : '40px')};
  border-radius: ${({ theme }) => theme.ds.radius.lg};
  padding: 0 ${({ theme }) => theme.ds.spacing[3]};
  box-sizing: border-box;
  background: ${({ theme }) => theme.ds.color.surface.card};
  border: 1.5px solid ${({ theme }) => theme.ds.color.border.default};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.ds.color.border.focus};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.ds.primitive.teal[200]}55;
  }
`;

export const Input = styled.input<{ inputStyle?: boolean; $compact?: boolean }>`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.base};
  font-weight: ${({ theme }) => theme.ds.font.weight.regular};
  line-height: ${({ theme }) => theme.ds.font.lineHeight.normal};
  color: ${({ theme }) => theme.ds.color.text.tertiary};
  padding: 0 ${({ theme }) => theme.ds.spacing[6]} 0 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;

  &::placeholder {
    color: ${({ theme }) => theme.ds.color.text.tertiary};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.ds.color.text.disabled};
  }
`;

export const Arrow = styled.span<ArrowProps & { $compact?: boolean }>`
  position: absolute;
  right: ${({ theme }) => theme.ds.spacing[3]};
  color: ${({ theme }) => theme.ds.color.text.tertiary};
  font-size: 12px;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  pointer-events: none;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.ds.color.surface.card};
  border: 1.5px solid ${({ theme }) => theme.ds.color.border.default};
  border-top: none;
  border-radius: 0 0 ${({ theme }) => theme.ds.radius.lg} ${({ theme }) => theme.ds.radius.lg};
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const DropdownPortal = styled.div<{ $top: number; $left: number; $width: number }>`
  position: fixed;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  width: ${({ $width }) => $width}px;
  background: ${({ theme }) => theme.ds.color.surface.card};
  border: 1.5px solid ${({ theme }) => theme.ds.color.border.default};
  border-radius: ${({ theme }) => theme.ds.radius.lg};
  max-height: 200px;
  overflow-y: auto;
  z-index: 1100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const Option = styled.div<OptionProps>`
  padding: ${({ theme }) => theme.ds.spacing[2]} ${({ theme }) => theme.ds.spacing[3]};
  cursor: pointer;
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.base};
  transition: background-color 0.2s ease;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.ds.primitive.teal[50] : 'transparent'};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.ds.primitive.teal[600] : theme.ds.color.text.primary};

  &:hover {
    background-color: ${({ theme }) => theme.ds.color.surface.muted};
  }

  &:last-child {
    border-radius: 0 0 ${({ theme }) => theme.ds.radius.lg} ${({ theme }) => theme.ds.radius.lg};
  }
`;

export const NoResults = styled.div`
  padding: ${({ theme }) => theme.ds.spacing[2]} ${({ theme }) => theme.ds.spacing[3]};
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.sm};
  color: ${({ theme }) => theme.ds.color.text.tertiary};
  font-style: italic;
  text-align: center;
`;

export const Error = styled.p<{ inputStyle?: boolean }>`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.xs};
  font-weight: ${({ theme }) => theme.ds.font.weight.medium};
  line-height: ${({ theme }) => theme.ds.font.lineHeight.normal};
  color: ${({ theme }) => theme.ds.color.text.error};
  margin: 0;
  margin-top: ${({ theme }) => theme.ds.spacing[1]};
`; 