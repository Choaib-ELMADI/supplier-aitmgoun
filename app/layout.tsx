import './globals.css';
import styles from './page.module.scss';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], weight: ['400'] });
import { Metadata } from 'next';



export const metadata: Metadata = {
    title: 'Aitmgoun Supplier',
    description: 'Aitmgoun Grocery Store',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={ inter.className }>
                <div className={ styles.body__container }>
                    { children }
                </div>
            </body>
        </html>
    );
};