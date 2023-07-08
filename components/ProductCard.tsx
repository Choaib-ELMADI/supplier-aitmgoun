import { Product } from '@prisma/client';
import { HiLink } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';

import { incrementProductQuantity } from '@/app/products/[id]/actions';
import AddToCartButton from '@/app/products/[id]/AddToCartButton';
import styles from '@/styles/card.module.scss';

interface ProductProps {
    product: Product
};



export default function ProductCard({ product }: ProductProps) {
    const isNew = Date.now() - new Date(product.createdAt).getTime() < 1000 * 60 * 60 * 24 * 4;

    return (
        <div className={ styles.card_wrapper }>
            <div className={ styles.product_info }>
                <div className={ styles.product_image }>
                    <div 
                        className={ styles.dot }
                        style={{ background: product.color }}
                    />
                    <Link 
                        href={ `/products/${ product.id }` }
                        className={ styles.product_link }
                    >
                        <Image 
                            src={ product.imageUrl }
                            alt={ product.title }
                            width={ 155 }
                            height={ 170 }
                            draggable='false'
                            className={ styles.image }
                        />
                        <span
                            style={{ background: product.color }}
                        >
                            <HiLink />
                        </span>
                    </Link>
                </div>
                <h3 className={ styles.product_title }>
                    { product.title }
                    { isNew && (
                        <span>New</span>
                    )}
                </h3>
                <p className={ styles.product_desc }>{ product.description }</p>
                <h2 
                    className={ styles.product_price }
                    style={{ color: product.color }}
                >
                    { product.price.toFixed(0) }
                    <small>.00 DH</small>
                </h2>
            </div>

            <AddToCartButton 
                productId={ product.id }
                incrementProductQuantity={ incrementProductQuantity } 
                showLoading={ false }
                color={ product.color }
            />
        </div>
    );
};