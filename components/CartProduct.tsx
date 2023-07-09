import Image from 'next/image';

import DeleteProductButton from '@/app/products/[id]/DeleteProductButton';
import { incrementProductQuantity } from '@/app/products/[id]/actions';
import AddToCartButton from '@/app/products/[id]/AddToCartButton';
import styles from '@/styles/cart.module.scss';
import { Product } from "@prisma/client";
import Link from 'next/link';

interface CartProductProps {
    product: Product,
    quantity: number,
};



export default function CartProduct({ product, quantity }: CartProductProps) {
    return (
        <div className={ styles.cart_product }>
            <Image 
                src={ product.imageUrl }
                alt={ product.title }
                width={ 260 }
                height={ 260 }
                draggable='false'
                className={ styles.cart_product_image }
            />
            <div className={ styles.cart_product_info }>
                <Link 
                    href={ `/products/${ product.id }` }
                    style={{ 
                        textDecoration: `underline ${ product.color }`, 
                        color: 'var(--white__clr)'
                    }}
                >
                    <h2>{ product.title }</h2>
                </Link>
                <h3>
                    <span style={{ color: product.color }}>Items: </span>
                    { quantity }
                </h3>
                <h3>
                    <span style={{ color: product.color }}>Price: </span>
                    { product.price.toFixed(0) }
                    <small style={{ fontSize: 'var(--smaller__size)' }}>.00 Dh</small>
                </h3>
                <AddToCartButton 
                    productId={ product.id }
                    incrementProductQuantity={ incrementProductQuantity }
                    showLoading={ true }
                    color={ product.color }
                />
                {/* <DeleteProductButton 
                    productId={ product.id }                
                /> */}
            </div>
        </div>
    );
};