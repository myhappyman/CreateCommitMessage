import { atom, selector } from "recoil";

export interface ICommitMessage {
    commitType: string;
    commitEmoji: string;
    commitTitle: string;
    commitBody: string;
}

export const componentsIndex = atom<number>({
    key: "componentsIndex",
    default: 0,
});

export const commitTypes = atom<string>({
    key: "commitTypes",
    default: "",
});

export const commitEmojis = atom<string>({
    key: "commitEmojis",
    default: "",
});

export const commitTitle = atom<string>({
    key: "commitTitle",
    default: "",
});

export const commitBody = atom<string>({
    key: "commitBody",
    default: "",
});

export const selectMessage = selector({
    key: "selectMessage",
    get: ({ get }) => {
        const type = get(commitTypes) ? get(commitTypes) + ":" : "";
        const emoji = get(commitEmojis) ? get(commitEmojis) : "";
        const title = get(commitTitle);
        const body = get(commitBody);
        return `${type} ${emoji} ${title}\n\n${body}`;
    },
});
