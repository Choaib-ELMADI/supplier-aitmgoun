import Image from 'next/image';
import Link from 'next/link';
import { AiFillShopping } from 'react-icons/ai';

import { incrementProductQuantity } from '@/app/products/[id]/actions';
import AddToCartButton from '@/app/products/[id]/AddToCartButton';
import styles from '@/styles/hero-product.module.scss';
import { Product } from '@prisma/client';

interface ProductProps {
    product: Product
};



export default function HeroProduct({ product }: ProductProps) {
    return (
        <div className={ styles.hero_product }>
            <Link 
                className={ styles.hero_image_wrapper }
                href={ `/products/${ product.id }` }
            >
                <Image 
                    src={ product.imageUrl }
                    alt={ product.title }
                    width={ 1000 }
                    height={ 600 }
                    draggable='false'
                    priority
                    className={ styles.hero_image }
                />
            </Link>
            <div className={ styles.hero_info }>
                <h2 className={ styles.hero_info_category }>{ `${ product.collection } Collection` }</h2>
                <h1 className={ styles.hero_info_title }>{ product.title }</h1>
                <p className={ styles.hero_info_desc }>{ product.description }</p>
                <div className={ styles.hero_prices }>
                    <h2
                        style={{
                            color: product.color
                        }}
                    >
                        { product.price.toFixed(0) }
                        <small>.00 Dh</small>
                    </h2>
                    <h2>
                        { (1.1 * product.price).toFixed(0) }
                        <small>.00 Dh</small>
                        <div 
                            className={ styles.old_price_bar } 
                            style={{
                                background: product.color
                            }}
                        />
                    </h2>
                </div>
                <div className={ styles.hero_actions }>
                    <Link 
                        href={ `/products/${ product.id }` }
                        className={ styles.hero_action }
                    >
                        <AiFillShopping size={ 22 } />
                        View Details
                    </Link>
                    <AddToCartButton 
                        productId={ product.id }
                        incrementProductQuantity={ incrementProductQuantity }
                        showLoading={ true }
                    />
                </div>
            </div>
        </div>
    );
};