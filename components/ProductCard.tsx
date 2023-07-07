import { Product } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { HiLink } from 'react-icons/hi';

import styles from '@/styles/card.module.scss';

interface ProductProps {
    product: Product
};



export default function ProductCard({ product }: ProductProps) {
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
                <h3 className={ styles.product_title }>{ product.title }</h3>
                <p className={ styles.product_desc }>{ product.description }</p>
                <h2 
                    className={ styles.product_price }
                    style={{ color: product.color }}
                >
                    { product.price }.00
                    <small> DH</small>
                </h2>
            </div>

            <button 
                className={ styles.add_to_cart }
                style={{ background: product.color }}
            >
                Add to cart
            </button>
        </div>
    );
};