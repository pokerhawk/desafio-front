import styled from 'styled-components';
import media from 'styled-media-query';

export const RegisterContainer = styled.div`
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

export const RegisterImage = styled.img`
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
    gap: ${({ theme }) => theme.ds.spacing[5]};
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
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
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

    button {
        margin-top: ${({ theme }) => theme.ds.spacing[2]};
    }
`;

export const Divider = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;

    &::before, &::after {
        content: '';
        flex: 1;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.25);
    }

    span {
        font-family: ${({ theme }) => theme.ds.font.family.poppins};
        font-size: ${({ theme }) => theme.ds.font.size.xs};
        color: rgba(255, 255, 255, 0.5);
        white-space: nowrap;
    }
`;

export const SignInOptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 6px;
    width: 100%;
    font-family: ${({ theme }) => theme.ds.font.family.poppins};
    font-size: ${({ theme }) => theme.ds.font.size.sm};
    color: rgba(255, 255, 255, 0.75);
    margin-top: ${({ theme }) => theme.ds.spacing[4]};

    a {
        color: ${({ theme }) => theme.ds.primitive.teal[200]};
        text-decoration: underline;
        font-weight: ${({ theme }) => theme.ds.font.weight.medium};

        &:hover { opacity: 0.8; }
    }
`;

export const PasswordToggle = styled.div`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
`;
