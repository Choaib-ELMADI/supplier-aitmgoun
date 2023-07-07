'use client';

import { ComponentProps } from "react";

type ButtonProps = {
    children: React.ReactNode,
    className?: string
} & ComponentProps<'button'>



export default function Button({ children, className='' }: ButtonProps) {
    return (
        <button className={ `${ className } main-button` }>
            { children }
        </button>
    );
};