interface IEmoji {
    image: string;
    code: string;
    desc: string;
}

export const emojis_arr: IEmoji[] = [
    {
        image: "none",
        code: "",
        desc: "선택 안함",
    },
    {
        image: "✨",
        code: ":sparkles:",
        desc: "새로운 기능을 소개",
    },
    {
        image: "🐛",
        code: ":bug:",
        desc: "버그를 수정",
    },
    {
        image: "🎨",
        code: ":art:",
        desc: "코드의 구조나 형식을 개선",
    },
    {
        image: "💎",
        code: ":gem:",
        desc: "CSS 관련 UI디자인 작업",
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
        image: "🚑️",
        code: ":ambulance:",
        desc: "중요한 기능 수정",
    },

    {
        image: "📝",
        code: ":memo:",
        desc: "설명서 관련 작업",
    },
    {
        image: "🚀",
        code: ":rocket:",
        desc: "제품을 배포",
    },
    {
        image: "💄",
        code: ":lipstick:",
        desc: "UI나 CSS 관련 작업",
    },
    {
        image: "🎉",
        code: ":tada:",
        desc: "프로젝트 시작",
    },
    {
        image: "✅",
        code: ":white_check_mark:",
        desc: "테스트를 성공한 경우",
    },
    {
        image: "🔒️",
        code: ":lock:",
        desc: "보안 이슈 해결",
    },
    {
        image: "🔐",
        code: ":closed_lock_with_key:",
        desc: "민감 데이터 작업",
    },
    {
        image: "🔖",
        code: ":bookmark:",
        desc: "릴리즈/버전 정보",
    },
    {
        image: "🚨",
        code: ":rotating_light:",
        desc: "컴파일러 또는 린터의 경고를 수정",
    },
    {
        image: "🚧",
        code: ":construction:",
        desc: "작업 진행 중",
    },
    {
        image: "💚",
        code: ":green_heart:",
        desc: "CI 빌드를 수정",
    },
    {
        image: "⬇️",
        code: ":arrow_down:",
        desc: "dependency 다운그레이드",
    },
    {
        image: "⬆️",
        code: ":arrow_up:",
        desc: "dependency 업그레이드",
    },
    {
        image: "📌",
        code: ":pushpin:",
        desc: "dependency 특정 버전에 고정",
    },
    {
        image: "👷",
        code: ":construction_worker:",
        desc: "CI 빌드 시스템 작업",
    },
    {
        image: "📈",
        code: ":chart_with_upwards_trend:",
        desc: "분석, 추적코드 관련 작업",
    },
    {
        image: "♻️",
        code: ":recycle:",
        desc: "코드 리팩토링",
    },
    {
        image: "➕",
        code: ":heavy_plus_sign:",
        desc: "dependency 추가",
    },
    {
        image: "➖",
        code: ":heavy_minus_sign:",
        desc: "dependency 제거",
    },
    {
        image: "🔧",
        code: ":wrench:",
        desc: "구성 파일을 추가하거나 수정",
    },
    {
        image: "🔨",
        code: ":hammer:",
        desc: "개발 스크립트 관련 작업",
    },
    {
        image: "🌐",
        code: ":globe_with_meridians:",
        desc: "국제화 또는 현지화",
    },
    {
        image: "✏️",
        code: ":pencil2:",
        desc: "오타 수정",
    },
    {
        image: "💩",
        code: ":poop:",
        desc: "개선이 필요한 잘못된 코드 작성",
    },
    {
        image: "⏪️",
        code: ":rewind:",
        desc: "변경 사항을 되돌림(revert changes)",
    },
    {
        image: "🔀",
        code: ":twisted_rightwards_arrows:",
        desc: "분기를 병합(merge branch)",
    },
    {
        image: "📦️",
        code: ":package:",
        desc: "컴파일된 파일, 패키지 관련 작업",
    },
    {
        image: "👽️",
        code: ":alien:",
        desc: "외부 API변경으로 코드를 수정",
    },
    {
        image: "🚚",
        code: ":truck:",
        desc: "리소스를 이동하거나 이름을 변경",
    },
    {
        image: "📄",
        code: ":page_facing_up:",
        desc: "라이선스 관련 작업",
    },
    {
        image: "💥",
        code: ":boom:",
        desc: "거대한 API 변경(breaking changes)",
    },
    {
        image: "🍱",
        code: ":bento:",
        desc: "assets 관련 작업",
    },
    {
        image: "♿️",
        code: ":wheelchair:",
        desc: "접근성 향상",
    },
    {
        image: "💡",
        code: ":bulb:",
        desc: "주석 작업",
    },
    {
        image: "🍻",
        code: ":beers:",
        desc: "술에 취해 코드 작성",
    },
    {
        image: "💬",
        code: ":speech_balloon:",
        desc: "텍스트나 문장 관련 작업",
    },
    {
        image: "🗃️",
        code: ":card_file_box:",
        desc: "DB관련 수정 작업",
    },
    {
        image: "🔊",
        code: ":loud_sound:",
        desc: "로그를 추가하거나 수정",
    },
    {
        image: "🔇",
        code: ":mute:",
        desc: "로그 제거",
    },
    {
        image: "👥",
        code: ":busts_in_silhouette:",
        desc: "기여자 관련 작업",
    },
    {
        image: "🚸",
        code: ":children_crossing:",
        desc: "UI/UX 향상",
    },
    {
        image: "🏗️",
        code: ":building_construction:",
        desc: "아키텍처 수정",
    },
    {
        image: "📱",
        code: ":iphone:",
        desc: "반응형 작업",
    },
    {
        image: "🤡",
        code: ":clown_face:",
        desc: "Mock things",
    },
    {
        image: "🥚",
        code: ":egg:",
        desc: "이스터에그를 추가하거나 수정",
    },
    {
        image: "🙈",
        code: ":see_no_evil:",
        desc: ".gitingnore를 추가하거나 수정",
    },
    {
        image: "📸",
        code: ":camera_flash:",
        desc: "snapshot을 추가하거나 수정",
    },
    {
        image: "⚗️",
        code: ":alembic:",
        desc: "실험 진행",
    },
    {
        image: "🔍️",
        code: ":mag:",
        desc: "검색엔진 최적화(SEO)",
    },
    {
        image: "🏷️",
        code: ":label:",
        desc: "유형 관련 작업",
    },
    {
        image: "🌱",
        code: ":seedling:",
        desc: "시드 파일 관련 작업",
    },
    {
        image: "🚩",
        code: ":triangular_flag_on_post:",
        desc: "feature flag 관련 작업",
    },
    {
        image: "🥅",
        code: ":goal_net:",
        desc: "오류를 Catch",
    },
    {
        image: "💫",
        code: ":dizzy:",
        desc: "애니메이션 관련 작업",
    },
    {
        image: "🗑️",
        code: ":wastebasket:",
        desc: "정리할 코드의 사용을 중지",
    },
    {
        image: "🛂",
        code: ":passport_control:",
        desc: "승인, 역할, 권한 관련 코드 작업",
    },
    {
        image: "🩹",
        code: ":adhesive_bandage:",
        desc: "중요하지 않은 간단한 수정",
    },
    {
        image: "🧐",
        code: ":monocle_face:",
        desc: "데이터 탐색/검사",
    },
    {
        image: "⚰️",
        code: ":coffin:",
        desc: "Dead Code 삭제",
    },
    {
        image: "🧪",
        code: ":test_tube:",
        desc: "실패한 코드 삭제",
    },
    {
        image: "👔",
        code: ":necktie:",
        desc: "비즈니스 로직관련 작업",
    },
    {
        image: "🩺",
        code: ":stethoscope:",
        desc: "상태 확인값 관련 작업",
    },
    {
        image: "🧱",
        code: ":bricks:",
        desc: "인프라 관련 작업",
    },
    {
        image: "🧑‍💻",
        code: ":technologist:",
        desc: "개발자 경험을 향상",
    },
    {
        image: "💸",
        code: ":money_with_wings:",
        desc: "후원 또는 금융 관련 인프라 작업",
    },
    {
        image: "🧵",
        code: ":thread:",
        desc: "멀티스레드 또는 동시성 관련 작업",
    },
    {
        image: "🦺",
        code: ":safety_vest:",
        desc: "유효성 검사 관련 작업",
    },
];
