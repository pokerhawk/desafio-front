import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.ds.spacing[8]} ${({ theme }) => theme.ds.spacing[4]};
`;

export const ImageWrapper = styled.div`
  display: flex;
  height: 11.3rem;
  width: 100%;
  max-width: 41rem;
  margin-top: ${({ theme }) => theme.ds.spacing[16]};
  margin-bottom: ${({ theme }) => theme.ds.spacing[8]};
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size['4xl']};
  font-weight: ${({ theme }) => theme.ds.font.weight.medium};
  line-height: ${({ theme }) => theme.ds.font.lineHeight.tight};
  color: ${({ theme }) => theme.ds.color.text.secondary};
  margin-bottom: ${({ theme }) => theme.ds.spacing[2]};
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.lg};
  font-weight: ${({ theme }) => theme.ds.font.weight.regular};
  line-height: ${({ theme }) => theme.ds.font.lineHeight.relaxed};
  color: ${({ theme }) => theme.ds.color.text.secondary};
  margin-bottom: ${({ theme }) => theme.ds.spacing[8]};
  text-align: center;
`;

export const FooterText = styled.p`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.ds.color.text.secondary};
  gap: ${({ theme }) => theme.ds.spacing[1]};
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.sm};
`;
