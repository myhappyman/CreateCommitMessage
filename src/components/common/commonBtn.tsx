import styled from "styled-components";
import { NormalBtn } from "./commonStyled";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
    commitBody,
    commitEmojis,
    commitTitle,
    commitTypes,
    componentsIndex,
} from "../../atom";
import { components } from "../creater/createMessage";

export default function CommonButtons() {
    const [index, setIndex] = useRecoilState(componentsIndex);
    const setCommitTypes = useSetRecoilState(commitTypes);
    const setCommitEmojis = useSetRecoilState(commitEmojis);
    const setCommitTitle = useSetRecoilState(commitTitle);
    const setCommitBody = useSetRecoilState(commitBody);
    const goBack = () => {
        if (index === 0) return;
        setIndex((prev) => (prev === 0 ? 0 : prev - 1));
    };
    const messageReset = () => {
        if (index === 0) return;
        if (window.confirm("작성 중인 메시지가 초기화 됩니다")) {
            setIndex(0);
            setCommitTypes("none");
            setCommitEmojis("");
            setCommitTitle("");
            setCommitBody([]);
        }
    };
    const nextStep = () => setIndex((prev) => prev + 1);
    const complete = () => setIndex(components.length - 1);

    return (
        <CommonBtn>
            {(() => {
                if (index > 0) {
                    return (
                        <>
                            <NormalBtn onClick={messageReset}>초기화</NormalBtn>
                            <NormalBtn onClick={goBack}>뒤로</NormalBtn>
                        </>
                    );
                }
            })()}
            {(() => {
                if (index > 2 && index < components.length) {
                    return <NormalBtn onClick={nextStep}>다음</NormalBtn>;
                }
            })()}
            {(() => {
                if (index > 2 && index + 1 < components.length) {
                    return <NormalBtn onClick={complete}>완료</NormalBtn>;
                }
            })()}
        </CommonBtn>
    );
}

const CommonBtn = styled.div`
    height: calc(10vh - 1rem);
    display: flex;
    align-items: center;
`;
