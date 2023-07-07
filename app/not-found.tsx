import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <div className={ '' }>
            <h1>Not Found Page</h1>
            <Link href='/'>Home</Link>
        </div>
    );
};