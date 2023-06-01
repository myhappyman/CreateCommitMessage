import styled from "styled-components";

export const Wrapper = styled.div``;

export const SectionName = styled.h2`
    font-size: 3rem;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1.5rem;
`;
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: ${(props) => props.theme.boxShadowHover};
    cursor: pointer;
`;

export const Area = styled.div``;

export const TipArea = styled.ul``;

export const Tip = styled.li`
    font-size: 1.8rem;
    font-weight: 700;
    color: #fff;
`;

export const NormalBtn = styled.button`
    padding: 1rem;
    border: none;
    border-radius: 0.6rem;
    font-size: 1.4rem;
    color: #fff;
    background-color: #0a3d62;
    cursor: pointer;
    & ~ & {
        margin-left: 1rem;
    }
`;
