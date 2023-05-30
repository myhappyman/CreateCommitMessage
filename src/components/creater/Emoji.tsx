import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { selectEmojis } from "../../atom";
import { Item, List, SectionName, Wrapper } from "../commonStyled";

export default function EmojiUI() {
    const setSelectEmoji = useSetRecoilState(selectEmojis);
    const clickEmoiji = (name: string) => setSelectEmoji(name);
    return (
        <Wrapper>
            <SectionName>이모지 선택하기</SectionName>
            <List>
                {datas.map((d, i) => (
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

const datas = [
    {
        image: "",
        code: "",
        desc: "None (선택 안함)",
    },
    {
        image: "🎨",
        code: ":art:",
        desc: "코드의 구조나 형식을 개선",
    },
    {
        image: "⚡️",
        code: ":zap:",
        desc: "성능을 향상",
    },
    {
        image: "🔥",
        code: ":fire:",
        desc: "코드 또는 파일을 제거",
    },
    {
        image: "🐛",
        code: ":bug:",
        desc: "버그를 수정",
    },
    {
        image: "🚑️",
        code: ":ambulance:",
        desc: "중요한 기능 수정",
    },
    {
        image: "✨",
        code: ":sparkles:",
        desc: "새로운 기능을 소개",
    },
    {
        image: "📝",
        code: ":memo:",
        desc: "설명서를 추가하거나 업데이트",
    },
    {
        image: "🚀",
        code: ":rocket:",
        desc: "제품을 배포",
    },
    {
        image: "💄",
        code: ":lipstick:",
        desc: "UI나 CSS 관련 추가 수정",
    },
    {
        image: "🎉",
        code: ":tada:",
        desc: "프로젝트 시작",
    },
];
