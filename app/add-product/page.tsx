import { Metadata } from 'next/types';
import { redirect } from 'next/navigation';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';

import styles from './page.module.scss';
import Button from '@/components/Button';
import { prisma } from '@/lib/db/prisma';

async function addProduct(formData: FormData) {
    'use server';

    const title = formData.get('title')?.toString();
    const description = formData.get('description')?.toString();
    const imageUrl = formData.get('imageUrl')?.toString();
    const price = Number(formData.get('price') || 0);

    if (!title || !description || !imageUrl || !price) {
        throw Error('Missing required fields');
    }

    await prisma.product.create({
        data: { title, description, imageUrl, price }
    });

    redirect('/');
};



export const metadata: Metadata = {
    title: 'Supplier | Add Products',
};

export default function AddProductPage() {
    return (
        <div className={ styles.add_product_container }>
            <h1 className={ styles.welcoming }>👋 Welcome to Supplier,</h1>
            <h1 className={ styles.add_product_title }>
                Supply Products
                <AiOutlineAppstoreAdd size={ 28 } />
            </h1>

            <form 
                className={ styles.add_product_form }
                action={ addProduct }
            >
                <input 
                    type='text'
                    name='title'
                    placeholder='Title'
                    required
                />
                <textarea
                    name='description'
                    placeholder='Description'
                    rows={ 4 }
                    required
                />
                <input 
                    type='url'
                    name='imageUrl'
                    placeholder='Image URL'
                    required
                />
                <input 
                    type='number'
                    name='price'
                    placeholder='0.00 $'
                    required
                />

                <Button
                    className={ styles.button }
                    type='submit'
                >
                    Add product
                </Button>
            </form>
        </div>
    );
};