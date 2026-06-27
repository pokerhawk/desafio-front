import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown } from 'lucide-react';
import {
  Wrapper,
  HiddenSelectWrapper,
  Label,
  SelectContainer,
  Trigger,
  TriggerText,
  Arrow,
  DropdownPortal,
  Option,
  HelperText,
  ErrorText,
} from './styles';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: SelectOption[];
  label?: string;
  error?: string;
  helperText?: string;
  size?: SelectSize;
  fullWidth?: boolean;
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      label,
      error,
      helperText,
      size = 'md',
      fullWidth = true,
      placeholder,
      id,
      disabled,
      value,
      onChange,
      name,
      onBlur,
      'aria-label': ariaLabel,
      title: titleProp,
      ...rest
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState(value ?? '');
    const [dropdownRect, setDropdownRect] = useState<{ top: number; left: number; width: number } | null>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const selectId = id ?? `ds-select-${Math.random().toString(36).slice(2, 9)}`;
    const hasError = Boolean(error);

    const currentValue = value !== undefined && value !== null ? value : internalValue;
    const selectedOption = options.find((opt) => opt.value === currentValue);
    const displayValue = selectedOption?.label ?? '';

    useEffect(() => {
      if (value !== undefined && value !== null) {
        setInternalValue(value);
      }
    }, [value]);

    useEffect(() => {
      if (!isOpen) {
        setDropdownRect(null);
        return;
      }
      const updatePosition = () => {
        if (triggerRef.current) {
          const rect = triggerRef.current.getBoundingClientRect();
          setDropdownRect({ top: rect.bottom, left: rect.left, width: rect.width });
        }
      };
      updatePosition();
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
      return () => {
        window.removeEventListener('scroll', updatePosition, true);
        window.removeEventListener('resize', updatePosition);
      };
    }, [isOpen]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        const isInsideWrapper = wrapperRef.current?.contains(target);
        const isInsideDropdown = dropdownRef.current?.contains(target);
        if (!isInsideWrapper && !isInsideDropdown) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (opt: SelectOption) => {
      if (disabled) return;
      setIsOpen(false);
      setInternalValue(opt.value);
      const syntheticEvent = {
        target: { value: opt.value, name: name ?? '' },
      } as React.ChangeEvent<HTMLSelectElement>;
      onChange?.(syntheticEvent);
      onBlur?.(syntheticEvent as any);
      // Dispatch change on the hidden select for react-hook-form
      if (typeof ref === 'object' && ref?.current) {
        ref.current.value = opt.value;
        ref.current.dispatchEvent(new Event('change', { bubbles: true }));
        ref.current.dispatchEvent(new Event('input', { bubbles: true }));
      }
    };

    const handleTriggerClick = () => {
      if (!disabled) setIsOpen((prev) => !prev);
    };

    const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleTriggerClick();
      }
      if (e.key === 'Escape') setIsOpen(false);
    };

    return (
      <Wrapper ref={wrapperRef} $fullWidth={fullWidth}>
        <HiddenSelectWrapper aria-hidden>
          <select
            ref={ref}
            id={selectId}
            name={name}
            value={currentValue}
            onChange={() => {}}
            onBlur={onBlur}
            disabled={disabled}
            tabIndex={-1}
            title={titleProp || label || 'Seleção'}
            aria-label={ariaLabel || label || 'Seleção'}
            {...rest}
          >
            {placeholder && (
              <option value="">
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </HiddenSelectWrapper>

        {label && (
          <Label htmlFor={selectId} $hasError={hasError} $disabled={!!disabled}>
            {label}
          </Label>
        )}
        <SelectContainer
          ref={triggerRef}
          $size={size}
          $hasError={hasError}
          $focused={isOpen}
          $disabled={!!disabled}
        >
          <Trigger
            type="button"
            onClick={handleTriggerClick}
            onKeyDown={handleTriggerKeyDown}
            disabled={disabled}
            $size={size}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-label={label}
          >
            <TriggerText $hasValue={!!displayValue} $hasPlaceholder={!!placeholder && !displayValue}>
              {displayValue || placeholder || ''}
            </TriggerText>
            <Arrow $isOpen={isOpen}>
              <ChevronDown size={16} aria-hidden />
            </Arrow>
          </Trigger>
        </SelectContainer>

        {isOpen &&
          dropdownRect &&
          createPortal(
            <DropdownPortal
              ref={dropdownRef}
              $top={dropdownRect.top}
              $left={dropdownRect.left}
              $width={dropdownRect.width}
              role="listbox"
            >
              {placeholder && (
                <Option
                  role="option"
                  $isSelected={currentValue === ''}
                  onClick={() => handleSelect({ value: '', label: placeholder })}
                >
                  {placeholder}
                </Option>
              )}
              {options.map((opt) => (
                <Option
                  key={opt.value}
                  role="option"
                  $isSelected={opt.value === currentValue}
                  onClick={() => handleSelect(opt)}
                >
                  {opt.label}
                </Option>
              ))}
            </DropdownPortal>,
            document.body
          )}

        {hasError && <ErrorText role="alert">{error}</ErrorText>}
        {!hasError && helperText && <HelperText>{helperText}</HelperText>}
      </Wrapper>
    );
  }
);

Select.displayName = 'DSSelect';
