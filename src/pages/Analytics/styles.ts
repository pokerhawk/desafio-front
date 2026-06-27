import styled from 'styled-components';

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.ds.spacing[3]};

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const SimpleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const ChartAndSalesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.ds.spacing[4]};

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`;

export const SectionTitle = styled.h3`
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.md};
    font-weight: ${({ theme }) => theme.ds.font.weight.semibold};
    color: ${({ theme }) => theme.ds.color.text.primary};
    margin: 0 0 16px;
`;

export const FiltersGrid = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.ds.spacing[3]};
    align-items: flex-end;
    flex-wrap: nowrap;

    /* Larguras fixas para os dois filtros ficarem sempre lado a lado (evita width:100% dos componentes) */
    & > * {
        flex: 0 0 auto;
        min-width: 0;
    }
    & > *:first-of-type {
        width: 220px;
    }
    & > *:last-of-type {
        width: 240px;
    }
`;

/** Wrapper do filtro exibido no slot do Header (actionsLineContent) */
export const DashboardHeaderFilters = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
    gap: ${({ theme }) => theme.ds.spacing[4]};
    flex-wrap: nowrap;
    flex-shrink: 0;
`;

// Sales list sub-components
export const FrameWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 0;
    width: 100%;
    flex: 1;
    margin-bottom: ${({ theme }) => theme.ds.spacing[4]};
`;

export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    flex: 1;
    overflow-y: auto;
    padding-right: 4px;
    max-height: 300px;

    &::-webkit-scrollbar { width: 4px; }
    &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.ds.primitive.neutral[100]};
        border-radius: 2px;
    }
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.ds.primitive.neutral[300]};
        border-radius: 2px;
    }
`;

export const FrameDate = styled.div`
    display: flex;
    align-items: center;
    padding: 0 12px;
    height: 32px;
    width: 100%;
    border-radius: ${({ theme }) => theme.ds.radius.lg};
    background: ${({ theme }) => theme.ds.primitive.teal[50]};
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.xs};
    font-weight: ${({ theme }) => theme.ds.font.weight.semibold};
    color: ${({ theme }) => theme.ds.primitive.teal[700]};
    letter-spacing: 0.03em;
    text-transform: uppercase;
`;

export const FrameItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.ds.spacing[3]};
    width: 100%;
    padding: 10px 12px;
    border-radius: ${({ theme }) => theme.ds.radius.lg};
    background: ${({ theme }) => theme.ds.color.surface.card};
    border: 1px solid ${({ theme }) => theme.ds.color.border.subtle};
    transition: all 0.15s ease;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.ds.color.surface.muted};
        border-color: ${({ theme }) => theme.ds.color.border.brand};
        box-shadow: ${({ theme }) => theme.ds.shadow.xs};
    }
`;

export const FrameItem = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    flex: 1;

    .time {
        font-family: ${({ theme }) => theme.ds.font.family.poppins};
        font-size: ${({ theme }) => theme.ds.font.size.xs};
        color: ${({ theme }) => theme.ds.color.text.tertiary};
        min-width: 52px;
    }

    .client-name {
        font-family: ${({ theme }) => theme.ds.font.family.poppins};
        font-size: ${({ theme }) => theme.ds.font.size.sm};
        font-weight: ${({ theme }) => theme.ds.font.weight.semibold};
        color: ${({ theme }) => theme.ds.color.text.primary};
    }
`;

export const FrameValue = styled.span`
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.sm};
    font-weight: ${({ theme }) => theme.ds.font.weight.bold};
    color: ${({ theme }) => theme.ds.primitive.green[500]};
    white-space: nowrap;
    min-width: 96px;
    text-align: right;
`;

export const ChartWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Balance = styled.div`
    display: flex;
`;

export const FrameTitle = styled.h2`
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.md};
    font-weight: ${({ theme }) => theme.ds.font.weight.semibold};
    color: ${({ theme }) => theme.ds.color.text.primary};
    margin: 0 0 12px;
`;

export const FrameIcon = styled.img`
    display: block;
    height: 20px;
    width: auto;
`;

export const FrameTime = styled.div`
    display: flex;
    width: 100%;
`;

export const OutLiner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    border-radius: ${({ theme }) => theme.ds.radius.lg};
    width: 100%;
`;

export const Hr = styled.div`
    width: 2px;
    height: auto;
    background: ${({ theme }) => theme.ds.gradient.buttonPrimary};
    margin: 0 ${({ theme }) => theme.ds.spacing[3]};
    border-radius: 1px;
`;

