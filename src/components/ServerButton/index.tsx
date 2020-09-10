import React from 'react'

import Rocketseat from '../../assets/Logo.svg'

import { Button } from './styles'

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = (props) => {
    return (
        <Button
            isHome={props.isHome}
            hasNotifications={props.hasNotifications}
            mentions={props.mentions}
        >
        { props.isHome && <img src={Rocketseat} alt="Rocketseat" />}
        </Button>
    )
}

export default ServerButton