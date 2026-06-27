import React from 'react';
import { Wrapper, IconBox, Title, Value, SubInfo, TrendWrapper, ContentGroup } from './styles';

export type StatCardVariant = 'default' | 'primary' | 'success' | 'warning' | 'error';
export type TrendDirection = 'up' | 'down' | 'neutral';

export interface StatCardProps {
  icon?: React.ReactNode;
  title: string;
  value: string | number;
  subInfo?: string;
  trend?: { value: string; direction: TrendDirection };
  variant?: StatCardVariant;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  value,
  subInfo,
  trend,
  variant = 'default',
}) => (
  <Wrapper $variant={variant}>
    {icon && <IconBox $variant={variant}>{icon}</IconBox>}
    <ContentGroup>
      <Title>{title}</Title>
      <Value>{value}</Value>
      {(subInfo || trend) && (
        <TrendWrapper>
          {trend && (
            <span className={`trend trend--${trend.direction}`}>
              {trend.direction === 'up' ? '↑' : trend.direction === 'down' ? '↓' : '–'}
              {' '}{trend.value}
            </span>
          )}
          {subInfo && <SubInfo>{subInfo}</SubInfo>}
        </TrendWrapper>
      )}
    </ContentGroup>
  </Wrapper>
);
