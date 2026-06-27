import styled, { createGlobalStyle, css } from "styled-components";
import media from "styled-media-query";

type PageWrapperProps = {
    smallGap?: boolean;
    bigGap?: boolean;
    alignItems?: 'flex-start' | 'flex-end';
}

type RectangleProps = {
    row?: boolean;
}

export const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
        *, *::before, *::after {
            font-family: ${theme.ds.font.family.poppins};
            font-size: ${theme.ds.font.size.base};
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            background-color: ${theme.ds.color.surface.base};
            color: ${theme.ds.color.text.primary};
            line-height: ${theme.ds.font.lineHeight.normal};
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: ${theme.ds.font.family.poppins};
            font-weight: ${theme.ds.font.weight.semibold};
            color: ${theme.ds.color.text.primary};
            line-height: ${theme.ds.font.lineHeight.snug};
        }

        a {
            color: ${theme.ds.color.text.link};
            text-decoration: none;
            transition: color 0.15s ease;
            &:hover { color: ${theme.ds.color.text.linkHover}; }
        }

        button {
            font-family: ${theme.ds.font.family.poppins};
        }

        input, select, textarea {
            font-family: ${theme.ds.font.family.poppins};
        }

        input[type=number] { -moz-appearance: textfield; }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        html, body {
            scrollbar-width: none; /* Firefox: oculta barra da aplicação */
        }
        html::-webkit-scrollbar, body::-webkit-scrollbar {
            width: 0;
            display: none; /* Chrome, Safari, Edge: oculta barra vertical geral */
        }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track {
            background: ${theme.ds.primitive.neutral[100]};
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb {
            background: ${theme.ds.primitive.neutral[300]};
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: ${theme.ds.primitive.neutral[400]};
        }

        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    `}
`;

export const PageWrapper = styled.div<PageWrapperProps> `
    display: flex;
    flex-direction: column;
    align-items: ${(prop)=>(prop.alignItems?prop.alignItems:'center')};
    gap: ${(prop)=>(prop.smallGap?'1vh':prop.bigGap?'5vh':'3vh')};
    background-color: ${({ theme }) => theme.ds.color.surface.base};
    width: 100%;
    height: 100vh;
`;

export const SignPageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    ${media.lessThan("medium")`
        padding: 8px;
    `}
`;

export const FormWrapper = styled.div`
    width: 420px;
    padding-top: 32px;

    ${media.lessThan("small")`
        width: 350px;
        margin: 8px 16px;   
    `}
`;

export const ComponentWrapper = styled.div`
    display: flex;
`;

export const CardWrapper = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5vw;
    background: ${({ theme }) => theme.ds.color.surface.card};
`;

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    position: relative;
    right: 0;
    padding-right: 50px;
    padding-top: 100px;
`

export const SimpleColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    heigth: 100%;
    width: 100%;
    gap: 15px;
    margin-bottom: 10px;

    @media (max-width: 1000px) {
        flex-wrap: wrap;
    }
`

export const SimpleRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8vw;
    heigth: 100%;
    width: 100%;

    @media (max-width: 1920px) {
        gap: 5vw;
    }

    @media (max-width: 1280px) {
        gap: 3vw;
    }

    @media (max-width: 980px) {
        flex-direction: column;
    }
`

export const CenteredWrapper = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30vw;
    gap: 1vh;
    margin: 20px auto;
    padding: 20px;
    background-color: ${({ theme }) => theme.ds.color.surface.muted};
    border-radius: ${({ theme }) => theme.ds.radius.lg};
    box-shadow: 1vh 1vh 0.5vh rgba(0, 0, 0, 0.5);
`

export const Rectangle = styled.div<RectangleProps>`
    display: flex;
    flex-direction: ${(prop)=> (prop.row? 'row' : 'column')};
    justify-content: ${(prop)=> (prop.row? 'space-between' : 'center')};
    align-items: center;
    width: 95%;
    height: auto;
    padding: 30px 40px;
    gap: 30px;
    margin-bottom: 20px;
    border-radius: ${({ theme }) => theme.ds.radius.lg};
    background-color: ${({ theme }) => theme.ds.color.surface.card};
`

export const ChangeInformationButton = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: ${({ theme }) => theme.ds.font.size.base};
	padding: 0 0.5vw;
	width: 100%;
	height: 5vh;
	border-radius: ${({ theme }) => theme.ds.radius.lg};
	border: 0px;
	background: ${({ theme }) => theme.ds.gradient.buttonPrimary};
	margin-bottom: 2vh;
    color: ${({ theme }) => theme.ds.color.text.inverse};

	&:hover {
		background: ${({ theme }) => theme.ds.gradient.buttonHover};
	}
`
