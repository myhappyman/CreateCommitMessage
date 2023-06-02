import { useRecoilState, useRecoilValue } from "recoil";
import { selectMessage, visibleToast } from "../../atom";
import styled from "styled-components";
import ToastPopup from "../common/ToatPopup";

export default function ResultMessage() {
    const [visible, setVisible] = useRecoilState(visibleToast);
    const message = useRecoilValue(selectMessage);
    const onCopy = () => {
        setVisible(true);
        navigator.clipboard.writeText(message);
    };
    return (
        <Wrapper>
            <SectionName>
                작성된 메시지
                <EmojiBtn onClick={onCopy}>📋</EmojiBtn>
            </SectionName>
            <Message>{message}</Message>
            <ToastPopup visible={visible} msg="커밋 메시지가 복사되었습니다." />
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
