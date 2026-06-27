import React, { useState } from 'react';
import UploadFile from '../../assets/icons/UploadFile';
import {
  Wrapper,
  Label,
  InputContainer,
  StyledInput,
  IconSlot,
  HelperText,
  ErrorText,
  CenterImage,
} from './styles';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  isFileUpload?: boolean;
  label?: string;
  helperText?: string;
  error?: string;
  size?: InputSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  fixedWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      isFileUpload,
      label,
      helperText,
      error,
      size = 'md',
      leftIcon,
      rightIcon,
      fixedWidth = false,
      fullWidth = true,
      id,
      disabled,
      ...rest
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const inputId = id ?? `ds-input-${Math.random().toString(36).slice(2, 9)}`;
    const hasError = Boolean(error);

    return (
      <Wrapper $fullWidth={fullWidth} $fixedWidth={fixedWidth}>
        {label && (
          <Label htmlFor={inputId} $hasError={hasError} $disabled={!!disabled}>
            {label}
          </Label>
        )}
        <InputContainer
          $size={size}
          $hasError={hasError}
          $focused={focused}
          $disabled={!!disabled}
          $hasLeftIcon={!!leftIcon}
          $hasRightIcon={!!rightIcon}
        >
          {leftIcon && <IconSlot $side="left">{leftIcon}</IconSlot>}
          <CenterImage>
            {isFileUpload && (<UploadFile/>)}
          </CenterImage>
          <StyledInput
            ref={ref}
            id={inputId}
            disabled={disabled}
            $hasLeftIcon={!!leftIcon}
            $hasRightIcon={!!rightIcon}
            onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
            onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
            {...rest}
          />
          {rightIcon && <IconSlot $side="right">{rightIcon}</IconSlot>}
        </InputContainer>
        {hasError && <ErrorText role="alert">{error}</ErrorText>}
        {!hasError && helperText && <HelperText>{helperText}</HelperText>}
      </Wrapper>
    );
  }
);

Input.displayName = 'DSInput';
