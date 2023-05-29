import styled from "styled-components";
import TypesUI from "./Types";

export default function CreateMessage() {
    return (
        <Section>
            <TypesUI />
        </Section>
    );
}

const Section = styled.section`
    padding: 1rem;
`;
