import { CgTrashEmpty } from 'react-icons/cg';

import PaginationBar from '@/components/PaginationBar';
import ProductCard from "@/components/ProductCard";
import HeroProduct from '@/components/HeroProduct';
import { prisma } from "@/lib/db/prisma";
import styles from "./page.module.scss";

interface HomeProps {
    searchParams: { page: string },
};



export default async function HomePage({ searchParams: { page = '1' } }: HomeProps) {
    const currentPage = parseInt(page);

    const pageSize = 4;
    const heroItemCount = 1;
    const totalItemCount = await prisma.product.count();
    const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);

    const products = await prisma.product.findMany({
        orderBy: { id: 'desc' },
        skip: (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
        take: pageSize + (currentPage === 1 ? heroItemCount : 0)
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
        <div className={ currentPage !== 1 ? styles.home : '' }>
            { currentPage === 1 && (
                <HeroProduct product={ products[0] } />
            )}

            <div className={ `main-grid` }>
                {
                    (currentPage === 1 ? products.slice(1) : products).map((product) => (
                        <ProductCard 
                            key={ product.id }
                            product={ product }
                        />
                    ))
                }
            </div>

            { totalPages > 1 && (
                <PaginationBar 
                    currentPage={ currentPage } 
                    totalPages={ totalPages }
                />
            )}
        </div>
    );
};