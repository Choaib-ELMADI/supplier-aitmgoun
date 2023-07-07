'use client';

import { useRouter } from 'next/navigation';

import styles from './page.module.scss';
import Button from '@/components/Button';



export default function ErrorPage({ error, reset }: { error: Error, reset: () => void }) {
    const router = useRouter();
    
    return (
        <div className={ styles.error_page }>
            <h1>An error occured</h1>
            <p className={ styles.error_message }>
                { error.message }
            </p>
            <p
                style={{
                    marginBottom: '2rem'
                }}
            >Try refreshing the page</p>
            <Button
                handleClick={ () => router.push('/') }
            >
                Home
            </Button>
        </div>
    );
};