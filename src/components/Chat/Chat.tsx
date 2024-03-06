import React, { useState } from 'react';

import { Feed } from '../Feed/Feed';
import { Search } from '../Search/Search';
import { ChatSendForm } from './SendForm/SendForm';
import { cnChat } from './Chat.classname';

import './Chat.css';

const Chat = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [search, setSearch] = useState('');

    const handleSendMessage = (text: string) => {
        setMessages(prev => [...prev, text]);
    };

    const handleSearch = (value: string) => {
        setSearch(value);
    };

    const displayMessages = messages.filter(message => message.startsWith(search));

    return (
        <div className={cnChat()}>
            <Search onSearch={handleSearch} value={search} className={cnChat('Search')} />
            <Feed messages={displayMessages} />
            <ChatSendForm onSubmit={handleSendMessage} />
        </div>
    );
};

export { Chat };
