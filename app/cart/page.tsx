import { CgTrashEmpty } from 'react-icons/cg';
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
            { !cart || !cart?.items.length ? 
                <div className={ styles.empty_cart }>
                    <CgTrashEmpty size={ 100 } />
                    <h2 style={{ fontSize: 'var(--large__size)' }}>Your shopping cart is empty</h2>
                </div> :
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
                    <button 
                        className='main-button'
                        style={{ 
                            marginTop: '2rem', 
                            width: 'min(100%, 400px)',
                            justifyContent: 'center',
                            paddingBlock: '1rem',
                            marginInline: 'auto',
                            fontWeight: 'bold'
                        }}
                    >
                        Check out 
                        {' '}
                        { (cart?.subtotal || 0).toFixed(2) } Dh
                    </button>
                </>
            }
        </div>
    );
};