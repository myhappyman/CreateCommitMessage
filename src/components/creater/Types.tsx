import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { commitTypes, componentsIndex } from "../../atom";
import { Item, List, SectionName, Wrapper } from "../commonStyled";
import { types_arr } from "../../datas/TypeArray";

export default function TypesUI() {
    const setIndex = useSetRecoilState(componentsIndex);
    const setCommitTypes = useSetRecoilState(commitTypes);
    const clickTypes = (name: string) => {
        setCommitTypes(name);
        setIndex((prev: number) => prev + 1);
    };
    return (
        <Wrapper>
            <SectionName>타입 선택하기</SectionName>
            <List>
                {types_arr.map((d, i) => (
                    <Item
                        key={`${d.name}${i}`}
                        onClick={() => clickTypes(d.name)}
                    >
                        <Title>{`${d.name === "" ? "" : d.name + ":"}`}</Title>
                        <Desc>{d.desc}</Desc>
                    </Item>
                ))}
            </List>
        </Wrapper>
    );
}

const Title = styled.div`
    padding: 1rem 1rem 0.5rem;
    border-bottom: 1px solid #ddd;
    text-align: center;
    font-size: 2rem;
`;

const Desc = styled.div`
    padding: 0.5rem 1rem 1rem;
    font-size: 1.4rem;
`;
