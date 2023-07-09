import { Metadata } from 'next';
import Link from 'next/link';

import styles from '@/styles/not-found.module.scss';



export const metadata: Metadata = {
    title: 'Supplier | 404',
};

export default function NotFoundPage() {
    return (
        <div className={ styles.not_found_page }>
            <h1 style={{ fontSize: '5rem' }}>404</h1>
            <h1>Page Not Found</h1>
            <Link 
                href='/'
                className={ `main-button ${ styles.not_found_link }` }
            >Home</Link>
        </div>
    );
};