import { useRecoilState } from "recoil";
import { componentsIndex } from "../../atom";
import styled from "styled-components";
import TypesUI from "./Types";
import EmojiUI from "./Emoji";
import WriteTitle from "./WriteTitle";
import WriteBody from "./WriteBody";
import { NormalBtn } from "../commonStyled";

export default function CreateMessage() {
    const [index, setIndex] = useRecoilState(componentsIndex);
    const components = [
        <TypesUI />,
        <EmojiUI />,
        <WriteTitle />,
        <WriteBody />,
    ];
    const goBack = () => setIndex((prev) => (prev === 0 ? 0 : prev - 1));
    const messageReset = () => {
        setIndex(0);
    };
    return (
        <Section>
            <Contents>{components[index]}</Contents>
            <CommonBtn>
                <NormalBtn onClick={goBack}>뒤로</NormalBtn>
                <NormalBtn>처음으로</NormalBtn>
            </CommonBtn>
        </Section>
    );
}

const Section = styled.section`
    height: 50vh;
    padding: 1rem;
    background-color: #a5b1c2;
`;

const Contents = styled.div`
    height: calc(40vh - 1rem);
`;

const CommonBtn = styled.div`
    height: calc(10vh - 1rem);
    display: flex;
    align-items: center;
`;
