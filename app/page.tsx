import { CgTrashEmpty } from 'react-icons/cg';

import ProductCard from "@/components/ProductCard";
import HeroProduct from '@/components/HeroProduct';
import { prisma } from "@/lib/db/prisma";
import styles from "./page.module.scss";



export default async function HomePage() {
    const products = await prisma.product.findMany({
        orderBy: { id: 'desc' }
    });

    if (products.length < 1) {
        return (
            <div className={ styles.no_products }>
                <CgTrashEmpty size={ 100 } />
                <h2 style={{ fontSize: 'var(--large__size)' }}>No products yet</h2>
            </div>
        );
    }

    return (
        <div className={ styles.home }>
            <HeroProduct product={ products[0] } />
            <div className={ `main-grid` }>
                {
                    products.slice(1).map((product) => (
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