import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    width: 100%;
    gap: 16px;
    border-radius: ${({ theme }) => theme.ds.radius.xl};
    border: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
    background: ${({ theme }) => theme.ds.color.surface.card};
    box-shadow: ${({ theme }) => theme.ds.shadow.sm};
`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const Pagination = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
    justify-content: center;
    width: auto;
    padding: 4px 10px;
    border-radius: ${({ theme }) => theme.ds.radius.lg};
    border: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.sm};
    color: ${({ theme }) => theme.ds.color.text.secondary};
`

export const Wrapper = styled.div`
    .rdt_TableHeadRow {
        display: flex;
        background: ${({ theme }) => theme.ds.color.surface.muted};
        min-height: 0;
    }
    .rdt_TableCol {
        display: flex;
        align-self: stretch;
        height: 40px;
        justify-content: center;
        border-top: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
        border-bottom: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
    }
    .rdt_TableCell {
        display: flex;
        justify-content: center;
        align-self: center;
        height: 56px;
        width: 100%;
        font-family: ${({ theme }) => theme.ds.font.family.poppins};
        font-size: ${({ theme }) => theme.ds.font.size.sm};
        font-weight: ${({ theme }) => theme.ds.font.weight.medium};
        line-height: ${({ theme }) => theme.ds.font.lineHeight.normal};
        border-bottom: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
    }
    .rdt_TableCol_Sortable {
        display: flex;
        color: ${({ theme }) => theme.ds.color.text.secondary};
        font-family: ${({ theme }) => theme.ds.font.family.poppins};
        font-size: ${({ theme }) => theme.ds.font.size.sm};
        font-weight: ${({ theme }) => theme.ds.font.weight.semibold};
    }
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${({ theme }) => theme.ds.color.surface.card};
    border-right: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
    border-left: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
    border-bottom: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
    border-radius: 0 0 ${({ theme }) => theme.ds.radius.xl} ${({ theme }) => theme.ds.radius.xl};
    overflow: hidden;
`

export const SimpleWrapper = styled.div`
    display: flex;
`

export const ModalWrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const FooterWrapper = styled.footer`
    display: flex;
`

export const Aref = styled.a`
    display: flex;
    padding: 6px 10px;
    border-radius: ${({ theme }) => theme.ds.radius.md};
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.sm};
    color: ${({ theme }) => theme.ds.color.text.primary};
    transition: background 0.15s ease;

    &:hover {
        background: ${({ theme }) => theme.ds.color.surface.muted};
        cursor: pointer;
    }
`;

/** Botão de ação compacto para tabelas - ícone apenas, estilo ghost do design system */
export const DetailActionLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: ${({ theme }) => theme.ds.radius.md};
    color: ${({ theme }) => theme.ds.color.text.secondary};
    background: transparent;
    transition: background 0.15s ease, color 0.15s ease;
    text-decoration: none;

    &:hover {
        background: ${({ theme }) => theme.ds.color.surface.muted};
        color: ${({ theme }) => theme.ds.color.text.primary};
    }

    svg {
        width: 18px;
        height: 18px;
    }
`;
