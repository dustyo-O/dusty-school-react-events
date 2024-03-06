import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { FC } from 'react';

import { cnChat } from '../Chat.classname';

type ChatSendFormProps = {
    onSubmit: (text: string) => void;
}

const DEFAULT_VALUE = '';

const ChatSendForm: FC<ChatSendFormProps> = ({ onSubmit }) => {
    const [text, setText] = useState(DEFAULT_VALUE);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(() => event.target.value);
    };

    const handleSendMessage = (event: FormEvent) => {
        event.preventDefault();
        onSubmit(text);

        setText(DEFAULT_VALUE);
    };

    return (
        <form className={cnChat('SendForm')} onSubmit={handleSendMessage}>
            <textarea
                className={cnChat('Control')}
                value={text}
                onChange={handleChange}
            />
            <button className={cnChat('Add')}>{'>'}</button>
        </form>
    );
};

export { ChatSendForm };
