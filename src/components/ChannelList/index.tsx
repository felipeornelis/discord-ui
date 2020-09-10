import React from 'react'

import ChannelButton from '../ChannelButton'

import { Container, Category, AddCategoryIcon } from './styles'

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton name="chat-livre" />
            <ChannelButton name="free-fire" />
            <ChannelButton name="fortnite" />
            <ChannelButton name="memes-do-felipe" />
        </Container>
    )
}

export default ChannelList