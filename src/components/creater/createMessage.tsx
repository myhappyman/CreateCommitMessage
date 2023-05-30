import { useRecoilValue } from "recoil";
import { selectEmojis, selectTypes, writeBody, writeTitle } from "../../atom";
import styled from "styled-components";
import TypesUI from "./Types";
import EmojiUI from "./Emoji";
import WriteTitle from "./WriteTitle";
import WriteBody from "./WriteBody";

export default function CreateMessage() {
    const type = useRecoilValue(selectTypes);
    const emoji = useRecoilValue(selectEmojis);
    const title = useRecoilValue(writeTitle);
    const body = useRecoilValue(writeBody);
    return (
        <Section>
            {!type ? (
                <TypesUI />
            ) : !emoji ? (
                <EmojiUI />
            ) : !title ? (
                <WriteTitle />
            ) : !body ? (
                <WriteBody />
            ) : null}
        </Section>
    );
}

const Section = styled.section`
    height: 50vh;
    padding: 1rem;
    background-color: #a5b1c2;
`;
