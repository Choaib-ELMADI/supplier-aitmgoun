'use client';

import { ComponentProps } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

import Spinner from "./Spinner";

type ButtonProps = {
    children: React.ReactNode,
    className?: string,
} & ComponentProps<'button'>



export default function Button({ children, className='', ...props }: ButtonProps) {
    const { pending } = useFormStatus();

    return (
        <button 
            { ...props }
            className={ `${ className } main-button` }
            disabled={ pending }
        >
            { children }
            { pending && ( <Spinner /> )}
        </button>
    );
};