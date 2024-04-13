
export type InputType = 'text' | 'password'

export interface IInput {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type: InputType
}