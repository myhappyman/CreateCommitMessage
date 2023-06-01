import { useRecoilValue } from "recoil";
import { componentsIndex } from "../../atom";
import styled from "styled-components";
import TypesUI from "./Types";
import EmojiUI from "./Emoji";
import WriteTitle from "./WriteTitle";
import WriteBody from "./WriteBody";
import CommonButtons from "./commonBtn";
import Finish from "./Finish";

export const components = [
    <TypesUI />,
    <EmojiUI />,
    <WriteTitle />,
    <WriteBody />,
    <Finish />,
];

export default function CreateMessage() {
    const index = useRecoilValue(componentsIndex);
    return (
        <Section>
            <Contents>{components[index]}</Contents>
            <CommonButtons />
        </Section>
    );
}

const Section = styled.section`
    height: 70vh;
    padding: 1rem;
    background-color: #a5b1c2;
`;

const Contents = styled.div`
    height: calc(60vh - 5rem);
`;
