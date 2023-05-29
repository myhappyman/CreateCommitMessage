> **Utility types ?**  
> 유틸리티 타입은 전역으로 사용 가능하며, 공통 타입 변환을 용이하게 하기 위해 유틸리티 타입을 제공한다.

<br/>

## 🔹 Partial

`Partial<T>` 프로퍼티 목록 중 선택해서 사용할 수 있는 유형을 반환한다.

```ts
//example
interface Todo {
    title: string;
    description: string;
}

// Partial Utility types
function updateTodo(obj: Partial<Todo>) {
    return obj;
}

const result = updateTodo({
    title: "title",
});

console.log(result); // { title: 'title' } 출력
```

<br/>

## 🔹 Readonly

`Readonly<T>` 프로퍼티를 읽기 전용으로 설정하고 호출만 가능하다. (수정 불가)

```ts
//example
interface Todo {
    title: string;
}

const todo: Readonly<Todo> = {
    title: "Dlete inaxtive users",
};

todo.title = "Hello"; // (Error) readonly에서는 값을 변경할 수 없다.
```

<br/>

## 🔹 Record

`Record<K, T>` 프로퍼티의 집합 K로 타입을 구성하며 K이외에 다른 타입으로 지정이 불가능하다.T는 프로퍼티를 다른 타입에 매핑시키는 데 사용된다.

```ts
//example
interface PageInfo {
    title: string;
}

type Page = "home" | "about" | "contact";

const x: Record<Page, PageInfo> = {
    about: { title: "about!" },
    contact: { title: "contact." },
    home: { subtitle: "home" }, // (Error) subtitle은 정의된 타입이 아니기 때문에 오류 발생
    main: { title: "main" }, // (Error) main은 K에 정의된 집합이 아니기 때문에 key값으로 사용 불가능
};
```

<br/>

## 🔹 Pick

`Pick<T, K>` 프로퍼티 중 K의 집합을 선택해 원하는 타입만 지정할 수 있다.(Omit의 반대)

```ts
//example
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// Pick을 이용해 title만 프로퍼티로 지정
type TodoPreview = Pick<Todo, "title">;

const todo: TodoPreview = {
    title: "Clean room",
};
```

<br/>

## 🔹 Omit

`Omit<T, K>` 모든 프로퍼티 중 특정 프로퍼티(K)만 제거 후 사용할 수 있다.(pick의 반대)

```ts
//example
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// Omit을 이용해 description 프로퍼티를 제외
type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};
```

<br/>

## 🔹 Exclude

`Exclude<T, U>` T에서 U를 제외한 타입을 구성한다.(Extract의 반대)

```ts
//example
type T0 = Exclude<"a" | "b" | "c", "a">;
// "b" | "c"

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
// "c"

type T2 = Exclude<string | number | (() => void), Function>;
// string | number
```

<br/>

## 🔹 Extract

`Extract<T, U>` T에서 U만 추출한다.(Exclude의 반대)

```ts
//example
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
// "a"

type T1 = Extract<string | number | (() => void), Function>;
// () => void
```

<br/>

## 🔹 NonNullabble

`NonNullabble<T>` 타입 중 null과 undefined를 제외한다.

```ts
//example
type T0 = NonNullabble<string | number | undefined>;
// string | number

type T1 = NonNullabble<string[] | null | undefined>;
// string[]
```

<br/>

## 🔹 Parameters

`Parameters<T>` T의 값(매개변수)들이 튜플(타입이 정확히 지정된 배열의 타입) 타입으로 구성된다.

```ts
//example
declare function f1(arg: { a: number; b: string }): void;
type T0 = Parameters<() => string>; // []
type T1 = Parameters<(s: string) => void>; // [string]
type T2 = Parameters<<T>(arg: T) => T>; // [unknown]
type T3 = Parameters<typeof f1>; // [{a: number, b:string}]
type T4 = Parameters<any>; // unknown[]
type T5 = Parameters<never>; // never
// (Error) Type 'string' does not satisfy the constraint '(...args: any) => any'.
type T6 = Parameters<string>;
// (Error) Type 'Function' does not satisfy the constraint '(...args: any) => any'.
type T7 = Parameters<Function>;
```

<br/>

## 🔹 ConstructorParameters

`ConstructorParameters<T>` 생성자 함수 유형의 유형에서 튜플 또는 배열 유형을 생성합니다. 모든 매개변수 유형(또는 함수가 아닌 never경우 유형)이 포함된 튜플 유형을 생성합니다 . --> ts 공식문서 인용

```ts
//example
type T0 = ConstructorParameters<ErrorConstructor>; // [message?: string]
type T1 = ConstructorParameters<FunctionConstructor>; // string[]
type T2 = ConstructorParameters<RegExpConstructor>; // [pattern: string | RegExp, flags?: string]

interface Inew {
    new (arg: string): Function;
}
type T3 = ConstructorParameters<Inew>; // [string]

function f1(a: T3) {
    a[0], a[1]; // (Error) Tuple type '[arg: string]' of length '1' has no element at index '1'
}
```

<br/>

## 🔹 ReturnType

`ReturnType<T>` 함수 T의 반환 타입으로 구성된 타입을 생성한다.

```ts
//example
declare function f1(): { a: number; b: string };
type T0 = ReturnType<() => string>; // string
type T1 = ReturnType<(s: string) => void>; // void
type T2 = ReturnType<<T>() => T>; // unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
type T4 = ReturnType<typeof f1>; // {a: number;b: string;}
type T5 = ReturnType<any>; // any
type T6 = ReturnType<never>; // never
// (Error) Type 'string' does not satisfy the constraint '(...args: any) => any'.
type T7 = ReturnType<string>;
/* (Error) Type 'Function' does not satisfy the constraint '(...args: any) => any'. 
Type 'Function' provides no match for the signature '(...args: any): any'. */
type T8 = ReturnType<Function>;
```

<br/>

## 🔹 Required

`Required<T>` 기존 정의된 프로퍼티가 옵셔널(?)로 필수값이 아니더라도 T의 모든 프로퍼티가 필수로 사용하도록 설정된다.

```ts
//example
interface Props {
    a?: number;
    b?: string;
}

const obj: Props = { a: 5 };

// (Error) Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
const obj2: Required<Props> = { a: 5 };
```
