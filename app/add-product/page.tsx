'use client';

import { useState, useEffect, useRef } from 'react';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';

import styles from './page.module.scss';



export default function AddProduct() {
    const [form, setForm] = useState({
        title: '',
        description: '',
        imageUrl: '',
        price: ''
    });
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        const { name, value } = target;

        setForm({
            ...form, [name]: value
        });
    };

    useEffect(() => {
        if (textareaRef.current) {
            const current = textareaRef.current;

            current.style.height = 'auto';
            current.style.height = `${ current.scrollHeight }px`;
        }
    }, [form.description]);

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();

        console.table(form);
    };

    return (
        <div className={ styles.add_product_container }>
            <h1 className={ styles.welcoming }>👋 Welcome to Supplier,</h1>
            <h1 className={ styles.add_product_title }>
                Supply Products
                <AiOutlineAppstoreAdd size={ 28 } />
            </h1>

            <form 
                className={ styles.add_product_form }
                onSubmit={ handleSubmitForm }
            >
                <input 
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={ form.title }
                    onChange={ handleChange }
                    required
                />
                <textarea
                    ref={ textareaRef }
                    name='description'
                    placeholder='Description'
                    value={ form.description }
                    rows={ 3 }
                    onChange={ handleChange }
                    required
                />
                <input 
                    type='url'
                    name='imageUrl'
                    placeholder='Image URL'
                    value={ form.imageUrl }
                    onChange={ handleChange }
                    required
                />
                <input 
                    type='number'
                    name='price'
                    placeholder='0.00 $'
                    value={ form.price }
                    onChange={ handleChange }
                    required
                />

                <button
                    className={ `${ styles.button } main-button` }
                    type='submit'
                >
                    Add product
                </button>
            </form>
        </div>
    );
};