import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { writeBody } from "../../atom";
import { Area, SectionName, Tip, TipArea, Wrapper } from "../commonStyled";

interface IForm {
    bodyText: string;
}

export default function WriteBody() {
    const setWriteBody = useSetRecoilState(writeBody);
    const { register, handleSubmit } = useForm<IForm>();
    const onValid = (data: IForm) => {
        const { bodyText } = data;
        setWriteBody(bodyText);
    };
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
                </TipArea>
                <Form onSubmit={handleSubmit(onValid)}>
                    <BodyText {...register("bodyText")} />
                </Form>
            </Area>
        </Wrapper>
    );
}

const Form = styled.form``;

const BodyText = styled.textarea`
    width: 50rem;
    height: 20rem;
    font-size: 1.6rem;
    resize: none;
`;
