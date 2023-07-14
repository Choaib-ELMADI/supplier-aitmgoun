import { GiEmptyMetalBucketHandle } from 'react-icons/gi';

import ProductCard from '@/components/ProductCard';
import styles from '@/styles/search.module.scss';
import { prisma } from '@/lib/db/prisma';

interface SearchPageProps {
    searchParams: { query: string },
};



export default async function SearchPage({ searchParams: { query } }: SearchPageProps) {
    const products = await prisma.product.findMany({
        where: {
            OR: [
                { title: { contains: query, mode: 'insensitive' }},
                { description: { contains: query, mode: 'insensitive' }},
            ]
        },
        orderBy: { id: 'desc' }
    });
    
    return (
        <div className={ styles.search_page }>
            <h2>Search for <span>{ query.toLowerCase() }</span></h2>
            
                { products.length < 1 ? (
                    <div className={ styles.no_result }>
                        <GiEmptyMetalBucketHandle size={ 80 } />
                        <h2>No products found</h2>
                    </div>
                ) : (
                    <div className={ styles.search_result_container }>
                        { 
                            products.map((product) => (
                                <ProductCard  
                                    product={ product }
                                    key={ product.id }
                                />
                            ))
                        }
                    </div>
                )}
            </div>
    );
};