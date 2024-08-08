type AddFunction = (a: number, b: number, c: number) => number

export type PersonProps = {
    name: string,
    description: string,
    age: number,
    config?: { isAdmin: boolean },
    callback: () => void,

}

export type HeadlineProp = {
    name: string
}

export type AnotherProps = {
    add: AddFunction
}

