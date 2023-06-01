import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { commitEmojis, componentsIndex } from "../../atom";
import { Item, List, SectionName, Wrapper } from "../commonStyled";
import { emojis_arr } from "../../datas/EmojiArray";

export default function EmojiUI() {
    const setIndex = useSetRecoilState(componentsIndex);
    const setCommitEmojis = useSetRecoilState(commitEmojis);
    const clickEmoiji = (name: string) => {
        setCommitEmojis(name);
        setIndex((prev: number) => prev + 1);
    };
    return (
        <Wrapper>
            <SectionName>이모지 선택하기</SectionName>
            <List>
                {emojis_arr.map((d, i) => (
                    <Item
                        key={`${d.code}${i}`}
                        onClick={() => clickEmoiji(d.code)}
                    >
                        <Title>{d.image}</Title>
                        <Desc>{d.desc}</Desc>
                    </Item>
                ))}
            </List>
        </Wrapper>
    );
}

const Title = styled.div`
    padding: 1rem 1rem 0.5rem;
    border-bottom: 1px solid #ddd;
    text-align: center;
    font-size: 2rem;
`;

const Desc = styled.div`
    padding: 0.5rem 1rem 1rem;
    font-size: 1.4rem;
`;
