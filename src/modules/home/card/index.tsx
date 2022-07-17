import React from 'react'

import CardViews from './views'
import { CardProps } from './types'

const Card = ({ link, image, label }: CardProps) => {
    return <CardViews link={link} image={image} label={label} />
}

export default Card
