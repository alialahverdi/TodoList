import { FC } from 'react'
import { IButton } from './type'

const Button: FC<IButton> = () => {
    return (
        <button type="submit">
            Click add to list
        </button>
    )
}

export default Button