import { atom, selector } from "recoil";

export interface ICommitMessage {
    commitType: string;
    commitEmoji: string;
    commitTitle: string;
    commitBodyText: string;
}

export const visibleToast = atom({
    key: "visibleToast",
    default: false,
});

export const componentsIndex = atom<number>({
    key: "componentsIndex",
    default: 0,
});

export const commitTypes = atom<string>({
    key: "commitTypes",
    default: "none",
});

export const commitEmojis = atom<string>({
    key: "commitEmojis",
    default: "",
});

export const commitTitle = atom<string>({
    key: "commitTitle",
    default: "",
});

export const commitBody = atom<string[]>({
    key: "commitBody",
    default: [],
});

export const selectMessage = selector({
    key: "selectMessage",
    get: ({ get }) => {
        let type = get(commitTypes) === "none" ? "" : get(commitTypes) + ":";
        const emoji = get(commitEmojis) ? get(commitEmojis) : "";
        const title = get(commitTitle);
        const body = get(commitBody).join("\n");
        return `${type} ${emoji} ${title}\n\n${body}`.trim();
    },
});
