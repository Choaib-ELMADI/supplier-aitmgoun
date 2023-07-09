'use client';

import { useTransition } from 'react';

import styles from '@/styles/cart.module.scss';
import Spinner from '@/components/Spinner';
import { deleteProduct } from './actions';

interface DeleteProductButtonProps {
    productId: string,
};



export default function DeleteProductButton({ 
    productId
}: DeleteProductButtonProps) {
    const [isPending, startTransition] = useTransition();

    return (
        <button 
            className={ styles.delete_btn }
            onClick={ () => {
                startTransition(async () => {
                    await deleteProduct(productId);
                });
            }}
            disabled={ isPending }
        >
            { isPending ? 'Deleting' : 'Delete' }
            { isPending && ( <Spinner /> )}
        </button>
    );
};