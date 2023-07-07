import Link from 'next/link';

import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/db/prisma";
import styles from "./page.module.scss";



export default async function HomePage() {
    const products = await prisma.product.findMany({
        orderBy: { id: 'desc' }
    });

    if (products.length < 1) {
        return (
            <h1>No products yet</h1>
        );
    }

    return (
        <div className={ styles.home }>
            <h1>Home Page</h1>
            <Link
                href='/add-product'
            >
                Add Product
            </Link>
            <div className={ `main-grid` }>
                {
                    products.map((product) => (
                        <ProductCard 
                            key={ product.id }
                            product={ product }
                        />
                    ))
                }
            </div>
        </div>
    );
};