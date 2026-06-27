import styled, { css } from 'styled-components';
import type { InputSize } from '.';

const sizeMap = {
  sm: { height: '32px', fontSize: 'sm' as const, px: '10px' },
  md: { height: '40px', fontSize: 'base' as const, px: '12px' },
  lg: { height: '48px', fontSize: 'md' as const, px: '14px' },
};

export const Wrapper = styled.div<{ $fullWidth: boolean, $fixedWidth: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  width: ${({ $fixedWidth }) => ($fixedWidth ? '50px' : 'auto')};
`;

export const Label = styled.label<{ $hasError: boolean; $disabled: boolean }>`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.sm};
  font-weight: ${({ theme }) => theme.ds.font.weight.medium};
  line-height: ${({ theme }) => theme.ds.font.lineHeight.normal};
  color: ${({ theme, $hasError, $disabled }) =>
    $disabled
      ? theme.ds.color.text.disabled
      : $hasError
      ? theme.ds.color.text.error
      : theme.ds.color.text.primary};
`;

export const InputContainer = styled.div<{
  $size: InputSize;
  $hasError: boolean;
  $focused: boolean;
  $disabled: boolean;
  $hasLeftIcon: boolean;
  $hasRightIcon: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.ds.radius.lg};
  background: ${({ theme, $disabled }) =>
    $disabled ? theme.ds.color.surface.muted : theme.ds.color.surface.card};
  border: 1.5px solid
    ${({ theme, $hasError, $focused }) =>
      $hasError
        ? theme.ds.color.border.error
        : $focused
        ? theme.ds.color.border.focus
        : theme.ds.color.border.default};
  height: ${({ $size }) => sizeMap[$size].height};
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  ${({ theme, $focused, $hasError }) =>
    $focused &&
    !$hasError &&
    css`
      color: blue;
      border: 2px solid #3b82f6;
      box-shadow: 0 0 0 3px ${theme.ds.primitive.teal[200]}55;
    `}
  ${({ theme, $hasError }) =>
    $hasError &&
    css`
      box-shadow: 0 0 0 3px ${theme.ds.primitive.red[100]};
    `}
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
  &:hover {
    border: 2px solid #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    border-radius: 6px;
  }
`;

export const StyledInput = styled.input<{
  $hasLeftIcon: boolean;
  $hasRightIcon: boolean;
}>`
  flex: 1;
  min-width: 0;
  height: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.base};
  font-weight: ${({ theme }) => theme.ds.font.weight.regular};
  color: ${({ theme }) => theme.ds.color.text.primary};
  padding-left: ${({ $hasLeftIcon }) => ($hasLeftIcon ? '36px' : '12px')};
  padding-right: ${({ $hasRightIcon }) => ($hasRightIcon ? '36px' : '12px')};
  line-height: ${({ theme }) => theme.ds.font.lineHeight.normal};

  &::placeholder {
    color: ${({ theme }) => theme.ds.color.text.tertiary};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.ds.color.text.disabled};
  }
  /* Remove number spinners */
  &[type='number'] {
    -moz-appearance: textfield;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const IconSlot = styled.span<{ $side: 'left' | 'right' }>`
  position: absolute;
  ${({ $side }) => ($side === 'left' ? 'left: 10px;' : 'right: 10px;')}
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.ds.color.text.tertiary};
  /* Esquerda: só indicativo. Direita: permite clique (ex.: mostrar/ocultar senha). */
  pointer-events: ${({ $side }) => ($side === 'right' ? 'auto' : 'none')};
`;

export const HelperText = styled.span`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.xs};
  color: ${({ theme }) => theme.ds.color.text.tertiary};
  line-height: ${({ theme }) => theme.ds.font.lineHeight.normal};
`;

export const ErrorText = styled.span`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.xs};
  font-weight: ${({ theme }) => theme.ds.font.weight.medium};
  color: ${({ theme }) => theme.ds.color.text.error};
  line-height: ${({ theme }) => theme.ds.font.lineHeight.normal};
`;

export const CenterImage = styled.div`
  display: flex;
  align-self: center;
`;
