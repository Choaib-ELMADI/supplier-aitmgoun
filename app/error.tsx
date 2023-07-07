'use client';

import styles from './page.module.scss';
import Button from '@/components/Button';



export default function ErrorPage({ error, reset }: { error: Error, reset: () => void }) {
    return (
        <div className={ styles.error_page }>
            <h1>An error occured</h1>
            <p 
                style={{ 
                    color: 'red',
                    marginTop: '2rem'
                }}
            >
                { error.message }
            </p>
            <p
                style={{
                    marginBottom: '2rem'
                }}
            >Try refreshing the page</p>
            <Button
                handleClick={ reset }
            >
                Refresh
            </Button>
        </div>
    );
};