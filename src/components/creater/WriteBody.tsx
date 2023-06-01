import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { ICommitMessage, commitBody } from "../../atom";
import { Area, SectionName, Tip, TipArea, Wrapper } from "../commonStyled";
import { Form, Input } from "./WriteTitle";

export default function WriteBody() {
    const setWriteBody = useSetRecoilState(commitBody);
    const { register, handleSubmit, setValue, setFocus } =
        useForm<Pick<ICommitMessage, "commitBodyText">>();

    const onValid = (data: Pick<ICommitMessage, "commitBodyText">) => {
        const { commitBodyText } = data;
        setWriteBody((prev: string[]) => [...prev, commitBodyText]);
        setValue("commitBodyText", ""); // 입력 후 초기화
    };

    useEffect(() => {
        setFocus("commitBodyText");
    }, [setFocus]);
    return (
        <Wrapper>
            <SectionName>커밋 메시지 내용 작성</SectionName>
            <Area>
                <TipArea>
                    <Tip>최대한 상세하게 작성합니다.</Tip>
                    <Tip>
                        변경 내용보단 왜 변경했는지, 무엇을 바꿨는지 작성합니다.
                    </Tip>
                    <Tip>한 줄당 72자 이내로 작성합니다.</Tip>
                    <Tip>바디 메시지는 여러번 작성 할 수 있습니다.</Tip>
                </TipArea>
                <Form onSubmit={handleSubmit(onValid)}>
                    <Input
                        {...register("commitBodyText", {
                            maxLength: {
                                value: 72,
                                message: "최대 72자까지 작성하세요.",
                            },
                        })}
                        placeholder="메시지를 작성하고 Enter키를 통해 입력하세요."
                    />
                </Form>
            </Area>
        </Wrapper>
    );
}

// const Form = styled.form``;

// const BodyText = styled.input`
//     font-family: inherit;
//     width: 100%;
//     padding: 0.7rem 0;
//     font-size: 1.6rem;
//     border: 0;
//     border-bottom: 2px solid #9b9b9b;
//     outline: 0;
//     background: transparent;
//     transition: border-color 0.2s;

//     &::placeholder {
//         color: transparent;
//         font-size: 1.3rem;
//         cursor: text;
//         top: 20px;
//     }

//     &:focus {
//         padding-bottom: 6px;
//         font-weight: 700;
//         border-width: 3px;
//         border-image: linear-gradient(to right, #11998e, #38ef7d);
//         border-image-slice: 1;
//     }
// `;
