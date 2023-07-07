import ProductCard from "@/components/ProductCard";
import HeroProduct from '@/components/HeroProduct';
import Navbar from "@/components/Navbar";
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
            <Navbar />
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