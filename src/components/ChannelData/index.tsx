import React, { useEffect, useRef } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const div = messagesRef.current

        if( div ) {
            div.scrollTop = div.scrollHeight;
        }

    }, [messagesRef])

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage 
                    author="Felipe Gustavo"
                    date="10/09/2020"
                    content={
                        <>
                            <Mention>@Felipe Ornelis</Mention>, me carrega no Lol e FFzin de novo, por favorzinho?
                        </>
                    }
                    hasMention
                    isBot
                
                />

                <ChannelMessage 
                    author="Felipe Ornelis"
                    date="10/09/2020"
                    content={
                        <>
                            <Mention>@Felipe Gustavo</Mention>, vc paga a pizza dessa vez e estamos fechados!
                        </>
                    }
                    hasMention={false}
                    isBot={false}
                
                />


            </Messages>


            <InputWrapper>
                <Input type="text" placeholder="Converse em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData;