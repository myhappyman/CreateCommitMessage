import { useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { ICommitMessage, commitTitle, componentsIndex } from "../../atom";
import { Area, Tip, TipArea } from "../common/commonStyled";

export default function WriteTitle() {
    const setIndex = useSetRecoilState(componentsIndex);
    const setCommitTitle = useSetRecoilState(commitTitle);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
    } = useForm<Pick<ICommitMessage, "commitTitle">>();
    const onValid = (data: Pick<ICommitMessage, "commitTitle">) => {
        const { commitTitle } = data;
        setCommitTitle(commitTitle);
        setIndex((prev: number) => prev + 1);
    };

    useEffect(() => {
        setFocus("commitTitle");
    }, [setFocus]);
    return (
        <Area>
            <TipArea>
                <Tip>간결하고 요약하여 작성합니다.</Tip>
                <Tip>마침표나 특수기호는 되도록 사용하지 않습니다.</Tip>
                <Tip>과거시제를 사용하지 않습니다.</Tip>
                <Tip>50자 이내로 작성합니다.</Tip>
            </TipArea>
            <Form onSubmit={handleSubmit(onValid)}>
                <Input
                    {...register("commitTitle", {
                        required: "커밋 제목은 필수값입니다.",
                        minLength: {
                            value: 2,
                            message: "최소 2글자 이상 입력하세요.",
                        },
                        maxLength: {
                            value: 50,
                            message: "최대 50자까지 작성하세요.",
                        },
                    })}
                    placeholder="메시지를 작성하고 Enter키를 통해 입력하세요."
                />
                <br />
                <ErrorMessage>{errors.commitTitle?.message}</ErrorMessage>
            </Form>
        </Area>
    );
}

export const Form = styled.form`
    position: relative;
    padding: 2rem 0;
    margin-top: 1rem;
    width: 50%;
`;

export const Input = styled.input`
    font-family: inherit;
    width: 100%;
    padding: 0.7rem 0;
    font-size: 1.6rem;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    background: transparent;
    color: #ddd;
    transition: border-color 0.2s;

    &::placeholder {
        color: #fff;
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

export const ErrorMessage = styled.span`
    font-size: 1.4rem;
    color: red;
`;
