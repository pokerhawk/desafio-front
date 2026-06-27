import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.ds.spacing[4]};
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.ds.spacing[3]};
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.ds.spacing[2]};
`;

export const FiltersRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.ds.spacing[4]};
  align-items: flex-end;
  margin-bottom: ${({ theme }) => theme.ds.spacing[5]};
  flex-wrap: wrap;

  @media (min-width: 640px) {
    flex-wrap: nowrap;
  }
`;

export const FilterInputWrapper = styled.div`
  min-width: 200px;
  flex: 1;
  max-width: 280px;
`;

export const CreateUserLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.ds.radius.lg};
  border: 1px solid ${({ theme }) => theme.ds.color.border.brand};
  color: ${({ theme }) => theme.ds.color.text.brandDark};
  background: transparent;
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.sm};
  font-weight: ${({ theme }) => theme.ds.font.weight.medium};
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.ds.primitive.teal[50]};
  }
`;

export const PaginationBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.ds.spacing[3]} 0 0;
  margin-top: ${({ theme }) => theme.ds.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.ds.spacing[3]};
`;

export const PaginationInfo = styled.span`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.sm};
  color: ${({ theme }) => theme.ds.color.text.secondary};
`;


export const CreateLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${({ theme }) => theme.ds.spacing[5]};
  width: 100%;

  & > * {
    width: 100%;
    min-width: 0;
  }
`;

export const FormV2 = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.ds.spacing[6]};
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.ds.spacing[6]};
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.ds.spacing[1]};
`;

export const SectionTitle = styled.h3`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.lg};
  font-weight: ${({ theme }) => theme.ds.font.weight.semibold};
  color: ${({ theme }) => theme.ds.color.text.primary};
  margin: 0 0 ${({ theme }) => theme.ds.spacing[2]};
  padding-bottom: ${({ theme }) => theme.ds.spacing[3]};
  border-bottom: 2px solid ${({ theme }) => theme.ds.color.border.subtle};
  width: 100%;
`;

export const SectionSubtitle = styled.p`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.sm};
  color: ${({ theme }) => theme.ds.color.text.secondary};
  margin: 0 0 ${({ theme }) => theme.ds.spacing[5]};
  line-height: ${({ theme }) => theme.ds.font.lineHeight.normal};
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.ds.font.family.poppins};
  font-size: ${({ theme }) => theme.ds.font.size.sm};
  font-weight: ${({ theme }) => theme.ds.font.weight.medium};
  color: ${({ theme }) => theme.ds.color.text.primary};
  margin-bottom: ${({ theme }) => theme.ds.spacing[1]};
`;

// ── Legacy (kept for compatibility) ─────────────────────────────────────────

export const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.ds.spacing[6]};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.ds.breakpoint.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.ds.spacing[5]};
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  width: 100%;
  margin: ${({ theme }) => theme.ds.spacing[5]} 0;
  padding: ${({ theme }) => theme.ds.spacing[6]};
  background: ${({ theme }) => theme.ds.color.surface.muted};
  border-radius: ${({ theme }) => theme.ds.radius.xl};
  border: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
  box-shadow: ${({ theme }) => theme.ds.shadow.xs};
  justify-content: center;
  align-items: center;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.ds.spacing[5]};
  justify-content: center;
  margin-top: ${({ theme }) => theme.ds.spacing[6]};

  button {
    min-width: 180px;

    @media (max-width: ${({ theme }) => theme.ds.breakpoint.md}) {
      width: 100%;
      max-width: none;
    }
  }
`;
