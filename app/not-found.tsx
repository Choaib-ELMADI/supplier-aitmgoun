import Link from 'next/link';
import { Metadata } from 'next';



export const metadata: Metadata = {
    title: 'Supplier | 404',
};

export default function NotFoundPage() {
    return (
        <div className={ '' }>
            <h1 style={{ fontSize: '5rem' }}>404</h1>
            <h1>Not Found Page</h1>
            <Link href='/'>Home</Link>
        </div>
    );
};