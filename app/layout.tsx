const inter = Inter({ subsets: ['latin'], weight: ['400'] });
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import { SessionProvider } from './SessionProvider';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import styles from './page.module.scss';
import './globals.css';



export const metadata: Metadata = {
    title: 'Supplier | Aitmgoun',
    description: 'Supplier Aitmgoun Grocery Store',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={ inter.className }>
                <main className={ styles.body__container }>
                    <SessionProvider>
                        <Navbar />
                        { children }
                        <Footer />
                    </SessionProvider>
                </main>
            </body>
        </html>
    );
};