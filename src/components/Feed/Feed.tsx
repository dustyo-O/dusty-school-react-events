import React from 'react';
import type { FC } from 'react';

import { cnFeed } from './Feed.classname';

type FeedProps = {
    messages: string[];
}

const Feed: FC<FeedProps> = ({ messages }) => {
    return (
        <div className={cnFeed()}>
            {messages.map(message => <div>{message}</div>)}
        </div>
    );
};

export { Feed };
