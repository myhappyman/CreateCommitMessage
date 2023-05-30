import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { selectTypes } from "../../atom";
import { Item, List, SectionName, Wrapper } from "../commonStyled";

export default function TypesUI() {
    const setSelectTypes = useSetRecoilState(selectTypes);
    const clickTypes = (name: string) => setSelectTypes(name);
    return (
        <Wrapper>
            <SectionName>타입 선택하기</SectionName>
            <List>
                {datas.map((d, i) => (
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

const datas = [
    {
        name: "",
        desc: "none (선택 안함)",
    },
    {
        name: "feat",
        desc: "새로운 기능을 추가",
    },
    {
        name: "fix",
        desc: "버그를 수정",
    },
    {
        name: "chore",
        desc: "기타 작업",
    },
    {
        name: "design",
        desc: "css관련 UI 디자인 작업",
    },
    {
        name: "docs",
        desc: "주석 작업, 문서 추가 관련 행위",
    },
    {
        name: "refactor",
        desc: "제품 리팩토링 수행",
    },
    {
        name: "remove",
        desc: "디렉토리, 파일을 삭제하는 경우",
    },
    {
        name: "rename",
        desc: "디렉토리, 파일을 수정하거나 경로를 변경하는 경우",
    },
    {
        name: "test",
        desc: "테스트 관련 작업",
    },
];
