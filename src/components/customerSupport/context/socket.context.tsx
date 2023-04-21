import io, { Socket } from 'socket.io-client';
import { API_URL } from '../../../config/apiUrl';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { useAppSelector } from '../../../hooks/useRedux';
import { IChat, IMessageUser } from '../../../interfaces/interfaceChat';

interface Props {
    children: ReactNode;
    sendMessage?: () => void;
}

interface Context {
    socket: Socket;
    sendMessage?: (data: IMessageUser) => void;
    allMessages?: IChat;
}

const socket = io(API_URL, {
    withCredentials: true,
});

export const SocketContext = createContext<Context>({ socket });

export const SocketsProvider = ({ children }: Props) => {
    const [allMessages, setAllMessages] = useState<IChat | undefined>();
    const { username, isLogged } = useAppSelector((state) => state.user);
    const sendMessage = (message: IMessageUser): void => {
        socket.emit('client_message', message);
    };

    const getMessages = (): void => {
        socket.emit('user_allMessages', `${username}`);
    };

    useEffect(() => {
        if (!username && !isLogged) {
            setAllMessages(undefined);
        }
    }, [username, isLogged]);

    useEffect(() => {
        if (username && isLogged) {
            socket.on(`${username}`, (messages: IChat) => {
                setAllMessages(messages);
            });
        }
    }, [username, isLogged, allMessages]);

    socket.on(`${allMessages?._id}`, (messages: IChat) => {
        if (username) {
            setAllMessages(messages);
        }
    });

    useEffect(() => {
        getMessages();
    }, [username]);

    return <SocketContext.Provider value={{ socket, sendMessage, allMessages }}>{children}</SocketContext.Provider>;
};

export const useSockets = () => useContext(SocketContext);
