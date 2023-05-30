import { atom, selector } from "recoil";

export const selectTypes = atom<string | null>({
    key: "selectTypes",
    default: null,
});

export const selectEmojis = atom<string | null>({
    key: "selectEmojis",
    default: null,
});

export const writeTitle = atom<string>({
    key: "writeTitle",
    default: "",
});

export const writeBody = atom<string>({
    key: "writeBody",
    default: "",
});

export const selectMessage = selector({
    key: "selectMessage",
    get: ({ get }) => {
        const type = get(selectTypes) ? get(selectTypes) + ":" : "";
        const emoji = get(selectEmojis) ? get(selectEmojis) : "";
        const title = get(writeTitle);
        return type + " " + emoji + " " + title;
    },
});
