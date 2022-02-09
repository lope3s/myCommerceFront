import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #fae1dd;
    box-shadow: 0px 1.5px 3px 0px #000;
    position: fixed;
    display: flex;
    align-items: center;
`;

export const Logo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;

    p {
        margin-bottom: 0.5rem;
        font-weight: 600;
    }

    svg {
        font-size: 2rem;
    }

    @media (hover: hover) {
        :hover {
            cursor: pointer;
        }
    }
`;

export const InputBox = styled.div`
    flex: 5;
    display: flex;
    align-items: center;
    position: relative;

    div {
        position: absolute;
        z-index: 1;
        right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: 1px solid #00000050;
        height: 70%;
        width: 3rem;

        svg {
            font-size: 1.5rem;
            color: #00000050;
        }

        @media (hover: hover) {
            :hover {
                cursor: pointer;
            }
        }
    }
`;

export const Input = styled.input`
    all: unset;
    width: 100%;
    height: 50px;
    background-color: #f8edeb;
    border-radius: 50px;
    border: none;
    box-shadow: 0px 2px 5px 0px #000;
    text-indent: 15px;
`;

export const ButtonsBox = styled.div`
    flex: 4;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
`;
