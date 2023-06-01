interface ITypes {
    name: string;
    desc: string;
}

export const types_arr: ITypes[] = [
    {
        name: "none",
        desc: "선택 안함",
    },
    {
        name: "feat",
        desc: "새로운 기능을 추가",
    },
    {
        name: "fix",
        desc: "버그를 수정",
    },
    {
        name: "docs",
        desc: "주석 작업, 문서 추가 관련 행위",
    },
    {
        name: "chore",
        desc: "기타 작업",
    },
    {
        name: "style",
        desc: "CSS 관련 UI 디자인 작업",
    },
    {
        name: "refactor",
        desc: "코드 리팩토링 수행",
    },
    {
        name: "perf",
        desc: "퍼포먼스, 성능 관련 작업",
    },
    {
        name: "remove",
        desc: "디렉토리, 파일을 삭제하는 경우",
    },
    {
        name: "rename",
        desc: "디렉토리, 파일을 수정하거나 경로를 변경하는 경우",
    },
    {
        name: "test",
        desc: "테스트 관련 작업",
    },
    {
        name: "build",
        desc: "제품 빌드 관련 작업(dependency, maven, npm 등)",
    },
    {
        name: "ci",
        desc: "CI 구성 파일 및 스크립트 관련 작업",
    },
];
