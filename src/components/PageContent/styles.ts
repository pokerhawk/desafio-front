import styled from 'styled-components';

const paddingMap = {
  sm: '16px 20px',
  md: '24px 32px',
  lg: '32px 40px',
};

export const Wrapper = styled.div<{ $padding: 'sm' | 'md' | 'lg' }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: ${({ $padding }) => paddingMap[$padding]};
  width: 100%;
`;
