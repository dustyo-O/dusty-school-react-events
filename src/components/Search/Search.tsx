import React from 'react';
import type { ChangeEvent, FC } from 'react';

import { cnSearch } from './Search.classname';

type SearchProps = {
    onSearch: (value: string) => void;
    value: string;
    className?: string;
}

const Search: FC<SearchProps> = ({ onSearch, value, className }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <div className={cnSearch(null, className)}>
            <input onChange={handleChange} value={value} />
        </div>
    );
};

export { Search };
