import styled, { css } from 'styled-components';
import type { SelectSize } from '.';

const sizeMap = {
  sm: { height: '32px', fontSize: 'sm' as const, px: '10px' },
  md: { height: '40px', fontSize: 'base' as const, px: '12px' },
  lg: { height: '48px', fontSize: 'md' as const, px: '14px' },
};

export const HiddenSelectWrapper = styled.div`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: none;

  & select {
    border: none;
    margin: 0;
    padding: 0;
  }
`;

export const Wrapper = styled.div<{ $fullWidth: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
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

export const SelectContainer = styled.div<{
  $size: SelectSize;
  $hasError: boolean;
  $focused: boolean;
  $disabled: boolean;
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
`;

export const Trigger = styled.button<{ $size: SelectSize }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme, $size }) => theme.ds.font.size[sizeMap[$size].fontSize]};
  font-weight: ${({ theme }) => theme.ds.font.weight.regular};
  line-height: ${({ theme }) => theme.ds.font.lineHeight.normal};
  color: ${({ theme }) => theme.ds.color.text.primary};
  padding: 0 ${({ theme }) => theme.ds.spacing[3]};
  padding-right: ${({ theme }) => theme.ds.spacing[6]};
  cursor: pointer;
  text-align: left;

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.ds.color.text.disabled};
  }
`;

export const TriggerText = styled.span<{ $hasValue?: boolean; $hasPlaceholder?: boolean }>`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme, $hasPlaceholder }) =>
    $hasPlaceholder ? theme.ds.color.text.tertiary : theme.ds.color.text.primary};
`;

export const Arrow = styled.span<{ $isOpen: boolean }>`
  position: absolute;
  right: ${({ theme }) => theme.ds.spacing[3]};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.ds.color.text.tertiary};
  transition: transform 0.2s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
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

export const Option = styled.div<{ $isSelected: boolean }>`
  padding: ${({ theme }) => theme.ds.spacing[2]} ${({ theme }) => theme.ds.spacing[3]};
  cursor: pointer;
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.base};
  font-weight: ${({ theme }) => theme.ds.font.weight.regular};
  line-height: ${({ theme }) => theme.ds.font.lineHeight.normal};
  transition: background-color 0.15s ease;
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.ds.primitive.teal[50] : 'transparent'};
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.ds.primitive.teal[600] : theme.ds.color.text.primary};

  &:hover {
    background-color: ${({ theme }) => theme.ds.color.surface.muted};
  }

  &:last-child {
    border-radius: 0 0 ${({ theme }) => theme.ds.radius.lg} ${({ theme }) => theme.ds.radius.lg};
  }
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
