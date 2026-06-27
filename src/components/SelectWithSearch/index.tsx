import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import * as S from './styles';

type Option = {
  value: string;
  label: string;
}

export type SelectWithSearchProps = {
  label?: string;
  placeholder?: string;
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
  onSearch?: (searchTerm: string) => void;
  inputStyle?: boolean;
  /** Quando true, altura 36px e estilo alinhado ao DateRangePicker compacto (ex: header) */
  compact?: boolean;
}

const SelectWithSearch = ({
  label,
  placeholder = 'Digite para buscar...',
  options,
  value,
  onChange,
  disabled = false,
  error,
  onSearch,
  inputStyle = false,
  compact = false,
}: SelectWithSearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownRect, setDropdownRect] = useState<{ top: number; left: number; width: number } | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    if (onSearch) {
      onSearch(searchTerm);
    } else {
      // Caso não haja função de busca externa, filtra localmente
      const filtered = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  }, [searchTerm]);

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
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: Option) => {
    onChange(option.value);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleInputClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setSearchTerm('');
    }
  };

  const displayOptions = onSearch ? options : filteredOptions;

  const showLabel = label && !compact;

  return (
    <S.Wrapper ref={wrapperRef} disabled={disabled} error={!!error} inputStyle={inputStyle} $compact={compact}>
      {inputStyle ? (error ? <S.Error>{label}</S.Error> : (showLabel && <S.Label inputStyle={inputStyle}>{label}</S.Label>)) : (showLabel && <S.Label>{label}</S.Label>)}
      
      <S.InputWrapper ref={triggerRef} inputStyle={inputStyle} $compact={compact}>
        <S.Input
          type="text"
          placeholder={placeholder}
          value={isOpen ? searchTerm : (selectedOption?.label ?? '')}
          onChange={handleInputChange}
          onClick={handleInputClick}
          disabled={disabled}
          readOnly={!isOpen}
          inputStyle={inputStyle}
          $compact={compact}
        />
        <S.Arrow isOpen={isOpen} $compact={compact}>▼</S.Arrow>
      </S.InputWrapper>

      {isOpen &&
        dropdownRect &&
        createPortal(
          <S.DropdownPortal
            ref={dropdownRef}
            $top={dropdownRect.top}
            $left={dropdownRect.left}
            $width={dropdownRect.width}
          >
            {displayOptions.length > 0 ? (
              displayOptions.map((option) => (
                <S.Option
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  isSelected={option.value === value}
                >
                  {option.label}
                </S.Option>
              ))
            ) : (
              <S.NoResults>Nenhum resultado encontrado</S.NoResults>
            )}
          </S.DropdownPortal>,
          document.body
        )}

      {inputStyle ? (error && <S.Error inputStyle={inputStyle}>{error}</S.Error>) : (error && <S.Error>{error}</S.Error>)}
    </S.Wrapper>
  );
};

export default SelectWithSearch;
