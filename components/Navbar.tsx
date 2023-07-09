import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import ShoppingCartButton from './ShoppingCartButton';
import styles from '@/styles/navbar.module.scss';
import { getCart } from '@/lib/db/cart';

async function searchProducts(formData: FormData) {
    'use server';

    const searchQuery = formData.get('searchQuery')?.toString();

    if (searchQuery) {
        redirect(`/search?query=${ searchQuery }`);
    }
};



export default async function Navbar() {
    const cart = await getCart();

    return (
        <div className={ styles.navbar }>
            <Link 
                href='/'
                className={ styles.navbar_logo }
            >
                <Image 
                    src='/logo.png'
                    alt='Supplier'
                    width={ 32 }
                    height={ 32 }
                    draggable='false'
                    className={ styles.logo_image }
                />
                <h2>Supplier</h2>
            </Link>
            <div className={ styles.navbar_search_cart }>
                <ShoppingCartButton cart={ cart } />
                <form action={ searchProducts }>
                    <input 
                        type="text"
                        name='searchQuery'
                        placeholder='Search...'
                        required
                    />
                </form>
            </div>
        </div>
    );
};