import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background-color: #ffffff00;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-radius: 30px;
    transition: all 0.25s ease;

    svg {
        font-size: 1rem;
        margin-right: 10px;
    }

    @media (hover: hover) {
        :hover {
            cursor: pointer;
            box-shadow: 1px 1.5px 3px 0px #000;
        }
    }
`;
