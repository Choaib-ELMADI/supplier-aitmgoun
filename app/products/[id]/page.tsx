import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from 'next/image';
import { cache } from "react"; 

import styles from '@/styles/product-page.module.scss';
import { incrementProductQuantity } from "./actions";
import AddToCartButton from "./AddToCartButton";
import { prisma } from "@/lib/db/prisma";
import { getCart } from "@/lib/db/cart";

interface ProductPageProps {
    params: {
        id: string,
    }
};



const getProduct = cache(async (id: string) => {
    const product = await prisma.product.findUnique({ where: { id } });

    if (!product) notFound();

    return product;
});

export async function generateMetadata({ params: { id } }: ProductPageProps): Promise<Metadata> {
    const product = await getProduct(id);
    
    return {
        title: `Supplier | ${ product.title }`,
        description: product.description,
        openGraph: {
            images: [{ url: product.imageUrl }]
        }
    };
};

export default async function ProductPage({ params: { id } }: ProductPageProps) {
    const product = await getProduct(id);
    const isNew = Date.now() - new Date(product.createdAt).getTime() < 1000 * 60 * 60 * 24 * 4;
    const cart = await getCart();

    return (
        <div className={ styles.product_details_wrapper }>
            <div className={ styles.product_gallery }>
                <div className={ styles.image_banner_container }>
                    <Image 
                        src={ product.imageUrl }
                        alt={ product.title }
                        width={ 435 }
                        height={ 580 }
                        draggable='false'
                        priority
                        className={ styles.image_banner }
                    />
                    { isNew && (
                        <span style={{
                            color: product.color
                        }}>New</span>
                    )}
                    <h2>
                        { product.price.toFixed(0) }
                        <small>.00 Dh</small>
                    </h2>
                </div>
                <div className={ styles.small_images_container }>
                    <div className={ styles.small_image_container }>
                        <Image 
                            src={ product.imageUrl }
                            alt={ product.title }
                            width={ 200 }
                            height={ 290 }
                            draggable='false'
                            className={ styles.small_image }
                        />
                    </div>
                    <div className={ styles.small_image_container }>
                        <Image 
                            src={ product.imageUrl }
                            alt={ product.title }
                            width={ 200 }
                            height={ 290 }
                            draggable='false'
                            className={ styles.small_image }
                        />
                    </div>
                </div>
            </div>
            <div className={ styles.product_info_wrapper }>
                <div className={ styles.product_info }>
                    <div className={ styles.product_info_heading }>
                        <div style={{ background: product.color }} />
                        <h2>Overview</h2>
                    </div>
                    <p>{ product.description }</p>
                    <div className={ styles.product_info_heading }>
                        <div style={{ background: product.color }} />
                        <h2>Ratings & Reviews</h2>
                    </div>
                </div>
                <div className={ styles.product_pricing }>
                    <div className={ styles.cart_details }>
                        <div>
                            <p>Total Items</p>
                            <h2>{ cart?.size }</h2>
                        </div>
                        <div>
                            <p>Total Price</p>
                            <h2>
                                { cart?.subtotal.toFixed(0) }
                                <small>.00 Dh</small>
                            </h2>
                        </div>
                    </div>
                    <AddToCartButton 
                        productId={ product.id }
                        incrementProductQuantity={ incrementProductQuantity } 
                        showLoading={ true }
                    />
                    <div className={ styles.product_pricing_warn }>
                        <span>i</span>
                        <p>
                            Order this product immediately, 
                            will soon run out and this stock 
                            will no longer be available
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};