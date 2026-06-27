import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from 'styled-media-query';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: ${({ theme }) => theme.ds.spacing[5]};
`;

export const LoginContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    ${media.lessThan("medium")`
        flex-direction: column;
    `}
`;

export const LeftColumn = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    overflow: hidden;
    position: relative;

    ${media.lessThan("medium")`
        width: 100%;
        height: 40vh;
    `}
`;

export const LoginImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
`;

export const RightColumn = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 40px;
    background: linear-gradient(160deg, ${({ theme }) => theme.ds.primitive.green[600]} 0%, ${({ theme }) => theme.ds.primitive.neutral[1000]} 100%);

    ${media.lessThan("medium")`
        width: 100%;
        height: 60vh;
        padding: 24px 20px;
    `}
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    gap: ${({ theme }) => theme.ds.spacing[6]};
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

export const LogoImage = styled.img`
    height: 72px;
    width: auto;
`;

export const HeaderGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.ds.spacing[1]};
`;

export const WelcomeText = styled.h1`
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size['3xl']};
    font-weight: ${({ theme }) => theme.ds.font.weight.bold};
    color: ${({ theme }) => theme.ds.color.text.inverse};
    line-height: ${({ theme }) => theme.ds.font.lineHeight.tight};
    white-space: pre-line;
`;

export const SubtitleText = styled.p`
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.base};
    color: ${({ theme }) => theme.ds.color.text.inverse};
    opacity: 0.8;
    line-height: ${({ theme }) => theme.ds.font.lineHeight.relaxed};
`;

export const InputFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.ds.spacing[4]};
    width: 100%;

    label {
        color: ${({ theme }) => theme.ds.color.text.inverse} !important;
        opacity: 0.9;
    }

    input {
        background-color: rgba(255, 255, 255, 0.96) !important;
        color: ${({ theme }) => theme.ds.color.text.primary} !important;
    }

    > div > div {
        background-color: rgba(255, 255, 255, 0.96) !important;
        border-color: rgba(255, 255, 255, 0.3) !important;
    }
`;

export const Register = styled(Link)`
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.sm};
    color: ${({ theme }) => theme.ds.primitive.teal[200]};
    text-decoration: none;
    align-self: center;
    transition: opacity 0.15s ease;

    &:hover {
        opacity: 0.8;
        text-decoration: underline;
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.25);
`;

export const SignupOptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 6px;
    width: 100%;
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.sm};
    color: rgba(255, 255, 255, 0.75);

    a {
        color: ${({ theme }) => theme.ds.primitive.teal[200]};
        text-decoration: underline;
        font-weight: ${({ theme }) => theme.ds.font.weight.medium};

        &:hover { opacity: 0.8; }
    }
`;

export const Error = styled.p`
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.xs};
    font-weight: ${({ theme }) => theme.ds.font.weight.medium};
    color: ${({ theme }) => theme.ds.primitive.red[400]};
`;

export const RowWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: ${({ theme }) => theme.ds.spacing[4]};
`;

export const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.ds.spacing[4]};
`;

export const QrCodeWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const PasswordToggle = styled.div`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
`;

// Legacy aliases (keep old names working)
export const HeaderWrapper = HeaderGroup;
export const InputFormWrapperLegacy = InputFormWrapper;
