import { notFound } from "next/navigation";
import { Metadata } from "next";
import { cache } from "react"; 

import styles from '@/styles/product-page.module.scss';
import { prisma } from "@/lib/db/prisma";

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

    return (
        <div className={ styles.product_details_wrapper }>
            <h2>{ product?.title }</h2>
        </div>
    );
};