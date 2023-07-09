'use client';

import { FaCartShopping } from 'react-icons/fa6';
import { useState } from 'react';
import Link from 'next/link';

import styles from '@/styles/navbar.module.scss';
import { ShoppingCart } from "@/lib/db/cart";

interface ShoppingCartButtonProps {
    cart: ShoppingCart | null,
};

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
    const [vueCart, setVueCart] = useState(false);

    return (
        <div className={ styles.shopping_cart_button }>
            <span 
                tabIndex={ 0 }
                onClick={ () => setVueCart(!vueCart) }
            >
                <FaCartShopping size={ 22 } />
                <label>{ cart?.size ? cart?.size : 0 }</label>
            </span>
            { vueCart && (
                <div tabIndex={ 0 }>
                    <h2>
                        <p>Toal items: </p>
                        { cart?.size || 0 }
                    </h2>
                    <h2>
                        <p>Toal price: </p>
                        { (cart?.subtotal || 0).toFixed(0) }
                        <small>.00 Dh</small>
                    </h2>
                    <Link 
                        href='/cart'
                        className={ styles.cart_link }
                    >
                        Edit Cart
                    </Link>
                </div>
            )}
        </div>
    );
};