import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { commitTypes, componentsIndex } from "../../atom";
import { Item, List } from "../common/commonStyled";
import { types_arr } from "../../datas/TypeArray";

export default function TypesUI() {
    const setIndex = useSetRecoilState(componentsIndex);
    const setCommitTypes = useSetRecoilState(commitTypes);
    const clickTypes = (name: string) => {
        setCommitTypes(name);
        setIndex((prev: number) => prev + 1);
    };
    return (
        <List>
            {types_arr.map((d, i) => (
                <Item key={`${d.name}${i}`} onClick={() => clickTypes(d.name)}>
                    <Title>{`${
                        d.name === "none" ? "none" : d.name + ":"
                    }`}</Title>
                    <Desc>{d.desc}</Desc>
                </Item>
            ))}
        </List>
    );
}

const Title = styled.div`
    padding: 1rem 1rem 0.5rem;
    border-bottom: 1px solid #ddd;
    font-size: 1.8rem;
    font-weight: 700;
`;

const Desc = styled.div`
    padding: 0.5rem 1rem 1rem;
    font-size: 1.4rem;
`;
