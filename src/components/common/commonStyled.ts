import styled from "styled-components";

export const Contents = styled.div`
    /* height: calc(60vh - 5rem); */
`;

export const Wrapper = styled.div``;

export const SectionName = styled.h2`
    margin: 1rem 0 2rem;
    font-size: 3rem;
`;

export const Hr = styled.hr`
    border: 1px solid #ddd;
    margin-bottom: 2rem;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1.5rem;
    max-height: 76vh;
    overflow: auto;
`;
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #000;
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
    border: rgba(31, 35, 40, 0.15);
    border-radius: 0.6rem;
    font-size: 1.4rem;
    color: #e8e8e8;
    background-color: #2980b9;
    cursor: pointer;
    & ~ & {
        margin-left: 1rem;
    }
`;
