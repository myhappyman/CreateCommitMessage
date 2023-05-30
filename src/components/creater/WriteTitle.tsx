import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { writeTitle } from "../../atom";
import { Area, SectionName, Tip, TipArea, Wrapper } from "../commonStyled";

interface IForm {
    title: string;
}

export default function WriteTitle() {
    const setWriteTitle = useSetRecoilState(writeTitle);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>();
    const onValid = (data: IForm) => {
        const { title } = data;
        setWriteTitle(title);
    };
    return (
        <Wrapper>
            <SectionName>커밋 메시지 제목 작성</SectionName>
            <Area>
                <TipArea>
                    <Tip>간결하고 요약하여 작성합니다.</Tip>
                    <Tip>마침표나 특수기호는 되도록 사용하지 않습니다.</Tip>
                    <Tip>과거시제를 사용하지 않습니다.</Tip>
                    <Tip>50자 이내로 작성합니다.</Tip>
                </TipArea>
                <Form onSubmit={handleSubmit(onValid)}>
                    <Input
                        {...register("title", {
                            required: "커밋 제목은 필수값입니다.",
                            minLength: {
                                value: 2,
                                message: "최소 2글자 이상 입력하세요.",
                            },
                            maxLength: {
                                value: 50,
                                message: "최대 50글자까지 작성하세요.",
                            },
                        })}
                        placeholder="제목을 입력하세요."
                    />
                    <br />
                    <ErrorMessage>{errors.title?.message}</ErrorMessage>
                </Form>
            </Area>
        </Wrapper>
    );
}
const Form = styled.form`
    position: relative;
    padding: 2rem 0;
    margin-top: 1rem;
    width: 50%;
`;

const Input = styled.input`
    font-family: inherit;
    width: 100%;
    padding: 0.7rem 0;
    font-size: 1.6rem;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
        color: transparent;
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
    }

    &:focus {
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, #11998e, #38ef7d);
        border-image-slice: 1;
    }
`;

const ErrorMessage = styled.span`
    font-size: 1.4rem;
    color: red;
`;
