import Link from 'next/link';

import styles from '@/styles/navbar.module.scss';



export default function Navbar() {
    return (
        <div className={ styles.navbar }>
            <h2>Supplier</h2>
            <Link href='/add-product'>Add</Link>
        </div>
    );
};