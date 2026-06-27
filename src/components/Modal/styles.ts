import styled, { css, keyframes } from 'styled-components';
import type { ModalSize } from '.';

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translate(-50%, -44%); opacity: 0; }
  to   { transform: translate(-50%, -50%); opacity: 1; }
`;

const sizeMap: Record<ModalSize, string> = {
  sm: '380px',
  md: '520px',
  lg: '720px',
  xl: '960px',
};

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.ds.color.surface.overlay};
  animation: ${fadeIn} 0.2s ease;
`;

export const ModalWrapper = styled.div<{ $size: ModalSize; $width?: string }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ $size, $width }) => $width || sizeMap[$size]};
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 48px);
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.ds.color.surface.card};
  border-radius: ${({ theme }) => theme.ds.radius['2xl']};
  box-shadow: ${({ theme }) => theme.ds.shadow['2xl']};
  overflow: hidden;
  animation: ${slideUp} 0.25s ease;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
  flex-shrink: 0;
`;

export const ModalTitle = styled.h2`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.lg};
  font-weight: ${({ theme }) => theme.ds.font.weight.semibold};
  color: ${({ theme }) => theme.ds.color.text.primary};
  margin: 0;
`;

export const ModalCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: ${({ theme }) => theme.ds.radius.lg};
  cursor: pointer;
  color: ${({ theme }) => theme.ds.color.text.tertiary};
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.ds.color.surface.muted};
    color: ${({ theme }) => theme.ds.color.text.primary};
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.ds.color.border.focus};
  }
`;

export const ModalBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px;
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding: 16px 24px 20px;
  border-top: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
  flex-shrink: 0;
`;
