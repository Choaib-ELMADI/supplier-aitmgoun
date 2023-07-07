'use client';

import { ComponentProps } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

import Spinner from "./Spinner";

type ButtonProps = {
    children: React.ReactNode,
    className?: string,
    handleClick?: () => void
} & ComponentProps<'button'>



export default function Button({ children, className='', handleClick, ...props }: ButtonProps) {
    const { pending } = useFormStatus();

    return (
        <button 
            { ...props }
            className={ `${ className } main-button` }
            disabled={ pending }
            onClick={ handleClick }
        >
            { children }
            { pending && ( <Spinner /> )}
        </button>
    );
};