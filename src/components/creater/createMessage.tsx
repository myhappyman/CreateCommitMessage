import { useRecoilValue } from "recoil";
import { componentsIndex } from "../../atom";
import styled from "styled-components";
import TypesUI from "./Types";
import EmojiUI from "./Emoji";
import WriteTitle from "./WriteTitle";
import WriteBody from "./WriteBody";
import CommonButtons from "../common/commonBtn";
import Finish from "./Finish";
import { Hr, SectionName, Wrapper } from "../common/commonStyled";

// interface IComponents {
//     sectionName: string;
//     component: React.PropsWithChildren;
// }

export const components = [
    {
        sectionName: "메시지 타입 선택",
        component: <TypesUI />,
    },
    {
        sectionName: "메시지 이모지 선택",
        component: <EmojiUI />,
    },
    {
        sectionName: "메시지 제목 작성",
        component: <WriteTitle />,
    },
    {
        sectionName: "메시지 본문 작성",
        component: <WriteBody />,
    },
    {
        sectionName: "메시지 작성 완료",
        component: <Finish />,
    },
];

export default function CreateMessage() {
    const index = useRecoilValue(componentsIndex);
    return (
        <Section>
            <Wrapper>
                <SectionName> {components[index].sectionName}</SectionName>
                <Hr />
                {components[index].component}
            </Wrapper>
            <CommonButtons />
        </Section>
    );
}

const Section = styled.section`
    width: 65%;
    height: 100vh;
    padding: 1rem;
    background-color: #24292f;
    color: rgba(255, 255, 255, 0.7);
`;
