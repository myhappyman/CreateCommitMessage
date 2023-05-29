import styled from "styled-components";

export default function TypesUI() {
    return (
        <Wrapper>
            <Area>
                {datas.map((d) => (
                    <Item>
                        <Title>{d.name}:</Title>
                        <Desc>{d.desc}</Desc>
                    </Item>
                ))}
            </Area>
        </Wrapper>
    );
}

const Area = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1.5rem;
`;
const Item = styled.li`
    padding: 1rem;
    box-shadow: ${(props) => props.theme.boxShadowHover};
    cursor: pointer;
`;

const Title = styled.div`
    font-size: 1.6rem;
`;

const Desc = styled.div`
    font-size: 1.4rem;
`;

const datas = [
    {
        name: "feat",
        desc: "새로운 기능을 추가하는 커밋입니다.",
    },
    {
        name: "fix",
        desc: "버그를 수정하는 커밋입니다.",
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

const Wrapper = styled.div``;
