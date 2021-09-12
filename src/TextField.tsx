import React, { useRef, useState } from 'react';

interface Person {
    firstName: string
    lastName: string
}


interface Props {
    text: string
    ok?: boolean
    i?: number
    fn?: (bob: string) => string
    person: Person
    handleChange: (event: React.ChangeEventHandler<HTMLInputElement>) => void
}

interface TextNode {
    text: string
}


export const TextField: React.FC<Props> = ({handleChange}) => {
    const [count, setCount] = useState<TextNode>({ text: 'hello' });
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null)


    return (
        <div>
            <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange} />
            </div>
        </div>
    )
}

