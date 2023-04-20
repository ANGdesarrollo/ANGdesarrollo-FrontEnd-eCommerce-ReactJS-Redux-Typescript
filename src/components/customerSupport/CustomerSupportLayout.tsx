import React, { useState, useEffect } from 'react';
import { useImages } from '../../hooks/useImages';
import { IChat } from '../../interfaces/interfaceChat';

const { smiling, chatContainer, mandoicon, customerSupport, close } = useImages();

interface Props {
    sendMessageInput: (e: React.FormEvent<HTMLFormElement>) => void;
    containerRef: React.MutableRefObject<HTMLDivElement | null>;
    allMessages: IChat | undefined;
    inputRef: React.MutableRefObject<HTMLInputElement | null>;
    handleChat: () => void;
    isOpen: boolean;
}

export const CustomerSupportLayout = ({
    sendMessageInput,
    containerRef,
    allMessages,
    inputRef,
    isOpen,
    handleChat,
}: Props) => {
    const openCloseImage = isOpen ? close : customerSupport;
    return (
        <>
            <div className="openChat" onClick={handleChat}>
                <img src={openCloseImage} alt="open/close" />
            </div>
            {isOpen && (
                <div className="container-boxChat">
                    <form action="" onSubmit={sendMessageInput}>
                        <div ref={containerRef} className="sub-container">
                            <div className="header-boxChat">
                                <div className="header-icon">
                                    <img src={mandoicon} alt="logo" />
                                </div>
                                <div>
                                    <h2>GameOn Support</h2>
                                </div>
                            </div>
                            <div className="chatBox">
                                <div className="icon">
                                    <div>
                                        <img src={mandoicon} alt="admin" />
                                    </div>
                                </div>
                                <div className="chat" style={{ backgroundImage: `url(${chatContainer})` }}>
                                    <span>Thanks for contact us !</span>
                                </div>
                            </div>
                            {allMessages &&
                                allMessages.message &&
                                allMessages.message.map((el) => {
                                    return (
                                        <div className="chatBox" key={el._id}>
                                            <div className="icon">
                                                <div>
                                                    <img src={mandoicon} alt="admin" />
                                                </div>
                                            </div>
                                            <div className="chat" style={{ backgroundImage: `url(${chatContainer})` }}>
                                                <span>{el.message}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                        <div className="input-chatBox">
                            <div className="subContainer">
                                <div>
                                    <input ref={inputRef} type="text" />
                                    <img className="send" src={smiling} alt="send" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};
