import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], weight: ['400'] });
import { Metadata } from 'next';

import Navbar from '@/components/Navbar';
import styles from './page.module.scss';
import './globals.css';



export const metadata: Metadata = {
    title: 'Supplier',
    description: 'Aitmgoun Grocery Store Supplier',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={ inter.className }>
                <main className={ styles.body__container }>
                    <Navbar />
                    { children }
                    <h2>Footer</h2>
                </main>
            </body>
        </html>
    );
};