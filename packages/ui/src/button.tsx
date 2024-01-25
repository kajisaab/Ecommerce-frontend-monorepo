'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonPropsInterface {
    fontSize: string;
}

interface ButtonProps {
    children: ReactNode;
    fontSize?: number;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
    children,
    className,
    fontSize = 2,
    onClick,
}: ButtonProps) => {
    return (
        <ButtonComponent
            className={className || ''}
            fontSize={`${fontSize}vmin`}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                onClick && onClick(e)
            }
        >
            {children}
        </ButtonComponent>
    );
};

export const ButtonComponent = styled.button<ButtonPropsInterface>`
    background-color: var(--primary--button--bg);
    color: var(--primary--button--text);
    padding: 8px 24px;
    width: 100%;
    outline: none;
    font-size: ${(props) => `clamp(18px, ${props.fontSize}, 32px)`};
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    transition:
        transform,
        0.2s ease,
        box-shadow 0.5s ease;
    transform: scale(0.95);
    box-shadow: inset 20px 15px 20px var(--primary--button--hover);

    &:hover {
        box-shadow: inset 20px 45px 20px var(--primary--button--hover);
        transform: scale(1);
    }

    &:active {
        transform: scale(0.95);
    }
`;
