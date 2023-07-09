'use client';

import { useState, useTransition } from 'react';

import styles from '@/styles/add-to-cart-btn.module.scss';
import Spinner from '@/components/Spinner';

interface AddToCartButtonProps {
    productId: string,
    incrementProductQuantity: (productId: string) => Promise<void>,
    showLoading?: boolean,
    color?: string,
};



export default function AddToCartButton({ 
    productId, 
    incrementProductQuantity, 
    showLoading, 
    color
}: AddToCartButtonProps) {
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState(false);

    return (
        <div className={ styles.btn_container }>
            <button 
                className={ styles.add_button }
                onClick={ () => {
                    setSuccess(false);
                    startTransition(async () => {
                        await incrementProductQuantity(productId);
                        setSuccess(true);
                    });
                }}
                disabled={ isPending }
                style={{
                    background: color
                }}
            >
                Add to Cart
                { showLoading && isPending && ( <Spinner /> )}
            </button>
            { showLoading && !isPending && success && ( <label style={{ background: '#16c60c80' }}>✔️</label> )}
        </div>
    );
};