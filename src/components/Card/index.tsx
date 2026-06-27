import React from 'react';
import { StyledCard, CardHeaderWrapper, CardTitle, CardSubtitle, CardBodyWrapper, CardFooterWrapper } from './styles';

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'flat';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

export interface CardHeaderProps {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  children?: React.ReactNode;
}

export interface CardBodyProps {
  children?: React.ReactNode;
}

export interface CardFooterProps {
  children?: React.ReactNode;
  align?: 'left' | 'right' | 'center' | 'space-between';
}

export const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>;
  Body: React.FC<CardBodyProps>;
  Footer: React.FC<CardFooterProps>;
} = ({ variant = 'default', padding = 'md', children, ...rest }) => (
  <StyledCard $variant={variant} $padding={padding} {...rest}>
    {children}
  </StyledCard>
);

const Header: React.FC<CardHeaderProps> = ({ title, subtitle, action, children }) => (
  <CardHeaderWrapper>
    {(title || subtitle) ? (
      <div>
        {title && <CardTitle>{title}</CardTitle>}
        {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
      </div>
    ) : children}
    {action && <div>{action}</div>}
  </CardHeaderWrapper>
);

const Body: React.FC<CardBodyProps> = ({ children }) => (
  <CardBodyWrapper>{children}</CardBodyWrapper>
);

const Footer: React.FC<CardFooterProps> = ({ children, align = 'right' }) => (
  <CardFooterWrapper $align={align}>{children}</CardFooterWrapper>
);

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
