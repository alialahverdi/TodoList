import { FC } from 'react'
import { IInput } from './type'



const Input: FC<IInput> = ({
    type,
    value,
    onChange
}) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input