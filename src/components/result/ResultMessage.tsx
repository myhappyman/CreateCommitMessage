import { useRecoilValue } from "recoil";
import { selectMessage } from "../../atom";
import styled from "styled-components";

export default function ResultMessage() {
    const message = useRecoilValue(selectMessage);
    const onCopy = () => {
        navigator.clipboard.writeText(message);
    };
    return (
        <Wrapper>
            <SectionName>
                작성된 메시지
                <EmojiBtn onClick={onCopy}>📋</EmojiBtn>
            </SectionName>
            <Message>{message}</Message>
        </Wrapper>
    );
}

const Wrapper = styled.div``;

const SectionName = styled.h2`
    font-size: 3rem;
`;

const EmojiBtn = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 3rem;
    cursor: pointer;
`;

const Message = styled.pre`
    font-size: 2.4rem;
`;
