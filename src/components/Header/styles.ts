import styled from 'styled-components';

type InformationProps = {
    smallFont?: boolean
}

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const TopBarWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 56px;
    padding: 0 ${({ theme }) => theme.ds.spacing[6]};
    background: ${({ theme }) => theme.ds.color.surface.card};
    border-bottom: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
    box-shadow: ${({ theme }) => theme.ds.shadow.xs};
`;

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.lg};
    font-weight: ${({ theme }) => theme.ds.font.weight.semibold};
    color: ${({ theme }) => theme.ds.color.text.primary};
    margin: 0;
`

export const AccountDetails = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.ds.spacing[3]};
    justify-content: space-between;
    align-items: center;
`

export const Image = styled.img`
    display: block;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.ds.color.border.subtle};
    background-color: ${({ theme }) => theme.ds.primitive.neutral[200]};
    object-fit: cover;
    cursor: pointer;
    transition: border-color 0.15s ease;

    &:hover {
        border-color: ${({ theme }) => theme.ds.primitive.teal[400]};
    }
`

export const InformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.ds.spacing[0.5]};
    align-items: flex-end;
`

export const Information = styled.span<InformationProps>`
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme, smallFont }) => smallFont ? theme.ds.font.size.xs : theme.ds.font.size.sm};
    font-weight: ${({ theme, smallFont }) => smallFont ? theme.ds.font.weight.regular : theme.ds.font.weight.semibold};
    color: ${({ theme, smallFont }) => smallFont ? theme.ds.color.text.secondary : theme.ds.color.text.primary};
`

export const BalanceBarWrapper = styled.div`
    display: flex;
    width: 100%;
    min-height: auto;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.ds.spacing[2]} ${({ theme }) => theme.ds.spacing[6]};
    gap: ${({ theme }) => theme.ds.spacing[6]};
    border-bottom: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
    background: ${({ theme }) => theme.ds.color.surface.muted};
    flex-wrap: wrap;
`

export const HrefWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const ActionsLineExtra = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.ds.spacing[4]};
    flex-wrap: wrap;
`

export const BalanceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    white-space: nowrap;
`

export const A = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    text-decoration: none;
    border-radius: ${({ theme }) => theme.ds.radius.lg};
    border: 1px solid ${({ theme }) => theme.ds.color.border.brand};
    color: ${({ theme }) => theme.ds.color.text.brandDark};
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.sm};
    font-weight: ${({ theme }) => theme.ds.font.weight.medium};
    transition: background 0.15s ease;

    &:hover {
        background: ${({ theme }) => theme.ds.primitive.teal[50]};
    }
`
