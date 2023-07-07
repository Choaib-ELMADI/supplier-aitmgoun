import Link from 'next/link';

import styles from '@/styles/navbar.module.scss';



export default function Navbar() {
    return (
        <div className={ styles.navbar }>
            <Link 
                href='/'
                className={ styles.navbar_logo }
            >
                <h2>Supplier</h2>
            </Link>
            <Link href='/add-product'>Add</Link>
        </div>
    );
};