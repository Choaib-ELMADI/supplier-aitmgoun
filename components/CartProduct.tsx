import Image from 'next/image';

import { incrementProductQuantity } from '@/app/products/[id]/actions';
import AddToCartButton from '@/app/products/[id]/AddToCartButton';
import styles from '@/styles/cart.module.scss';
import { Product } from "@prisma/client";

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
                <h2>{ product.title }</h2>
                <h3>Items: { quantity }</h3>
                <AddToCartButton 
                    productId={ product.id }
                    incrementProductQuantity={ incrementProductQuantity }
                    showLoading={ true }
                    color={ product.color }
                />
            </div>
        </div>
    );
};