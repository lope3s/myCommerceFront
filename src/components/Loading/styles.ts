import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
`;

export const Loading = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 10px solid #ccc;
    border-left-color: #000;
    animation: rotate 1s ease-in-out infinite;

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
