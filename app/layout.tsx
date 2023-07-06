import './globals.css';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], weight: ['400'] });



export const metadata = {
    title: 'Aitmgoun Supplier',
    description: 'Aitmgoun Grocery Store',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={ inter.className }>
                { children }
            </body>
        </html>
    );
};