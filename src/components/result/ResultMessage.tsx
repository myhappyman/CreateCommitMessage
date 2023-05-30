import { useRecoilValue } from "recoil";
import { selectMessage } from "../../atom";
import styled from "styled-components";

export default function ResultMessage() {
    const message = useRecoilValue(selectMessage);
    return (
        <Wrapper>
            <SectionName>작성된 메시지</SectionName>
            <Message>{message}</Message>
        </Wrapper>
    );
}

const Wrapper = styled.div``;

const SectionName = styled.h2`
    font-size: 3rem;
`;

const Message = styled.span`
    font-size: 2.4rem;
`;
