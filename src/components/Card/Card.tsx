import { FC } from 'react'
import { ICard } from './type'

const Card: FC<ICard> = ({
    item,
}) => {
    return (
        <div>
            {item?.name}
        </div>
    )
}

export default Card