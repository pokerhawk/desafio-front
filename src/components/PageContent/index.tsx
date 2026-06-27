import React from 'react';
import { Wrapper } from './styles';

export interface PageContentProps {
  children: React.ReactNode;
  maxWidth?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export const PageContent: React.FC<PageContentProps> = ({
  children,
  maxWidth,
  padding = 'md',
}) => (
  <Wrapper $padding={padding} style={maxWidth ? { maxWidth } : undefined}>
    {children}
  </Wrapper>
);
