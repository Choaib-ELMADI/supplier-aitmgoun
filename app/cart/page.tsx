import { Metadata } from 'next/types';

import CartProduct from '@/components/CartProduct';
import styles from '@/styles/cart.module.scss';
import { getCart } from '@/lib/db/cart';



export const metadata: Metadata = {
    title: 'Supplier | Cart',
};

export default async function UserCart() {
    const cart = await getCart();

    return (
        <div className={ styles.cart_wrapper }>
            { !cart?.items.length || cart?.items.length < 0 ? 
                <>
                    <h2>Your shopping cart is empty</h2>
                </> :
                <>
                    <h2>Shopping Cart</h2>
                    {
                        cart?.items.map((item) => (
                            <CartProduct
                                key={ item.id }
                                quantity={ item.quantity }
                                product={ item.product }
                            />
                        ))
                    }
                </>
            }
        </div>
    );
};