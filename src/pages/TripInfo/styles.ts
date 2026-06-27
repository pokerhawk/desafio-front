import styled from "styled-components";

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.ds.spacing[5]};
  margin-bottom: ${({ theme }) => theme.ds.spacing[6]};
`;

export const InfoItem = styled.div`
  background: ${({ theme }) => theme.ds.color.surface.muted};
  border: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
  border-radius: ${({ theme }) => theme.ds.radius.lg};
  padding: ${({ theme }) => theme.ds.spacing[4]};
`;

export const InfoLabel = styled.label`
  display: block;
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.xs};
  font-weight: ${({ theme }) => theme.ds.font.weight.semibold};
  color: ${({ theme }) => theme.ds.color.text.tertiary};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.ds.font.letterSpacing.wider};
  margin-bottom: ${({ theme }) => theme.ds.spacing[1]};
`;

export const InfoValue = styled.div`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.base};
  font-weight: ${({ theme }) => theme.ds.font.weight.semibold};
  color: ${({ theme }) => theme.ds.color.text.primary};
  word-break: break-word;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.ds.spacing[3]};
  align-items: center;
`;

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.md};
  color: ${({ theme }) => theme.ds.color.text.tertiary};
`;

export const TransactionsTableWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.ds.spacing[6]};
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.ds.spacing[5]};
  padding: ${({ theme }) => theme.ds.spacing[5]};
`;

export const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.ds.spacing[5]};
  background: ${({ theme }) => theme.ds.color.surface.card};
  border-radius: ${({ theme }) => theme.ds.radius.lg};
  box-shadow: ${({ theme }) => theme.ds.shadow.sm};
`;

export const PixCodeSection = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const PixCodeLabel = styled.label`
  display: block;
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.base};
  font-weight: ${({ theme }) => theme.ds.font.weight.semibold};
  color: ${({ theme }) => theme.ds.color.text.secondary};
  margin-bottom: ${({ theme }) => theme.ds.spacing[2]};
`;

export const PixCodeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.ds.spacing[3]};
  padding: ${({ theme }) => theme.ds.spacing[3]};
  background: ${({ theme }) => theme.ds.color.surface.muted};
  border: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
  border-radius: ${({ theme }) => theme.ds.radius.md};
`;

export const PixCodeText = styled.span`
  flex: 1;
  font-family: ${({ theme }) => theme.ds.font.family.mono};
  font-size: ${({ theme }) => theme.ds.font.size.xs};
  color: ${({ theme }) => theme.ds.color.text.secondary};
  word-break: break-all;
`;

export const CopyButton = styled.span`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.sm};
  color: ${({ theme }) => theme.ds.color.text.link};
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.ds.color.text.linkHover};
  }
`;

export const RefundModalText = styled.p`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.md};
  color: ${({ theme }) => theme.ds.color.text.secondary};
  margin: 0;
  text-align: center;
`;

export const RefundButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.ds.spacing[3]};
`;
