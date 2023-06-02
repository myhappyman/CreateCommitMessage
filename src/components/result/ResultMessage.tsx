import { useRecoilState, useRecoilValue } from "recoil";
import {
    commitBody,
    commitEmojis,
    commitTitle,
    commitTypes,
    selectMessage,
    visibleToast,
} from "../../atom";
import styled from "styled-components";
import ToastPopup from "../common/ToatPopup";
import { Hr, SectionName, Wrapper } from "../common/commonStyled";
import { AiFillCopy } from "react-icons/ai";
import { BsEraserFill } from "react-icons/bs";

export default function ResultMessage() {
    const mType = useRecoilValue(commitTypes);
    const mEmoji = useRecoilValue(commitEmojis);
    const mTitle = useRecoilValue(commitTitle);
    const [mBody, setBody] = useRecoilState(commitBody);

    const [visible, setVisible] = useRecoilState(visibleToast);
    const message = useRecoilValue(selectMessage);
    const onCopy = () => {
        setVisible(true);
        navigator.clipboard.writeText(message);
    };
    const delBodyMsg = (index: number) => {
        setBody((prev) => {
            return [...prev.slice(0, index), ...prev.slice(index + 1)];
        });
    };
    return (
        <Section>
            <Wrapper>
                <SectionName>
                    커밋 메시지 출력
                    <Tools>
                        <AiFillCopy className="icon" onClick={onCopy} />
                        <HelpMessage className="helpMsg">복사</HelpMessage>
                    </Tools>
                </SectionName>
                <Hr />
                <MessageArea>
                    <MessageTitle>
                        <MType>{mType === "none" ? "" : `${mType}:`} </MType>
                        <MEmoji> {mEmoji === "none" ? "" : mEmoji} </MEmoji>
                        <MTitle>{mTitle}</MTitle>
                    </MessageTitle>
                    <MessageBody>
                        {mBody?.map((x, i) => (
                            <MBodyLine key={i}>
                                <MBody>{x}</MBody>
                                <MBodyDelBtn onClick={() => delBodyMsg(i)}>
                                    <BsEraserFill />
                                </MBodyDelBtn>
                            </MBodyLine>
                        ))}
                    </MessageBody>
                </MessageArea>
                <ToastPopup
                    visible={visible}
                    msg="커밋 메시지가 복사되었습니다."
                />
            </Wrapper>
        </Section>
    );
}

const Section = styled.section`
    width: 35%;
    height: 100vh;
    padding: 1rem 1rem 3rem;
`;

const Tools = styled.span`
    display: inline-block;
    position: relative;
    padding: 0 1.5rem;
    text-align: center;
    .icon {
        font-size: 2.4rem;
        color: #2980b9;
        background-color: transparent;
        cursor: pointer;
    }
    .icon:hover + .helpMsg {
        display: block;
    }
`;

const HelpMessage = styled.div`
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateY(-50%);
    padding: 0.4rem;
    min-width: 50px;
    text-align: center;
    font-size: 1.4rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 0.4rem;
    border: none;
`;

const MessageArea = styled.div`
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 1rem;
    background-color: rgba(234, 238, 242, 0.5);
`;

const MessageTitle = styled.div`
    font-weight: 700;
    font-size: 1.8rem;
`;
const MType = styled.span``;
const MEmoji = styled.span``;
const MTitle = styled.span``;

const MessageBody = styled.div`
    margin-top: 1rem;
    font-size: 1.4rem;
`;
const MBodyLine = styled.div`
    cursor: pointer;
    &:hover {
        text-decoration: #2980b9 wavy underline;
    }
`;
const MBody = styled.span`
    color: #656d76;
`;
const MBodyDelBtn = styled.span`
    padding-left: 1rem;
    color: red;

    &:hover {
        font-weight: 700;
    }
`;
