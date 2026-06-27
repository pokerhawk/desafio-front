import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const SpinnerWrapper = styled.div<{ $fullPage?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.ds.color.surface.card};
  border-radius: ${({ theme }) => theme.ds.radius.lg};
  border: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
  ${({ $fullPage }) =>
    $fullPage &&
    `
    padding: 24px 32px;
    min-height: 100%;
  `}
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  &:after {
    content: ' ';
    display: block;
    width: 32px;
    height: 32px;
    margin: 6px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.ds.color.border.focus};
    border-color: ${({ theme }) => theme.ds.color.border.focus} transparent
      ${({ theme }) => theme.ds.color.border.focus} transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;

export const OverlayWrapper = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.ds.color.surface.overlay};
  z-index: 9999;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const OverlaySpinner = styled.div`
  width: 75px;
  height: 75px;
  border: 5px solid ${({ theme }) => theme.ds.color.border.subtle};
  border-top: 5px solid ${({ theme }) => theme.ds.color.border.focus};
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

export const OverlayLogo = styled.img`
  object-fit: cover;
  object-position: 15% center;
  width: 25px;
  height: 65px;
  image-rendering: smooth;
  filter: blur(0.5px);
`;

export const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
