import React, { useEffect, useRef, useState } from 'react';
import { useSockets } from './context/socket.context';
import { useAppSelector } from '../../hooks/useRedux';
import { IMessageUser } from '../../interfaces/interfaceChat';
import { CustomerSupportLayout } from './CustomerSupportLayout';
import { swalAlert } from '../../config/swal';

export const CustomerSupportContainer = () => {
    const { allMessages, sendMessage } = useSockets();
    const { username, isLogged } = useAppSelector((state) => state.user);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (!username && !isLogged) setIsOpen(false);
    }, [username, isLogged]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    useEffect(() => {
        const container = containerRef.current;
        if (container) container.scrollTop = container.scrollHeight;
    }, [allMessages]);

    const handleChat = (): void => {
        if (username && isLogged) {
            setIsOpen(!isOpen);
        } else {
            swalAlert({ message: 'You must login to contact us' });
        }
    };

    const sendMessageInput = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const message = inputRef.current?.value.trim();
        if (message) {
            if (sendMessage && username) {
                const formatedMessage: IMessageUser = {
                    username,
                    message,
                };
                sendMessage(formatedMessage);
            }
            inputRef.current!.value = '';
        }
    };

    return (
        <CustomerSupportLayout
            allMessages={allMessages}
            containerRef={containerRef}
            inputRef={inputRef}
            sendMessageInput={sendMessageInput}
            handleChat={handleChat}
            isOpen={isOpen}
            username={username}
        />
    );
};
