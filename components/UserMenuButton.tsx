'use client';

import { BsThreeDotsVertical } from 'react-icons/bs';
import { signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/navbar.module.scss';
import { env } from '@/lib/env';

interface UserMenuButtonProps {
    session: Session | null,
};



export default function UserMenuButton({ session }: UserMenuButtonProps) {
    const [vueUserMenu, setVueUserMenu] = useState(false);
    const user = session?.user;

    return (
        <div className={ styles.user_menu }>
            <span onClick={ () => setVueUserMenu(!vueUserMenu) }>
                { user ? (
                    <Image 
                        src={ user?.image || '/profile-image-placeholder.png' }
                        alt='user profile'
                        width={ 40 }
                        height={ 40 }
                        draggable='false'
                    />
                )
                : (
                    <label>
                        <BsThreeDotsVertical size={ 20 } />
                    </label>
                )}
            </span>
            { vueUserMenu && (
                <div className={ styles.menu_content }>
                    { user ? (
                        <>
                            <Image 
                                src={ user?.image || '/profile-image-placeholder.png' }
                                alt='user profile'
                                width={ 100 }
                                height={ 100 }
                                draggable='false'
                            />
                            <h2>{ user?.name || 'User' }</h2>

                            <Link href='/add-product'>Add Product</Link>

                            <button 
                                className='main-button'
                                onClick={ () => signOut({ callbackUrl: '/' }) }
                            >Log out</button>
                        </>
                    ): (
                        <>
                            <h1>Hello,</h1>
                            <button 
                                className='main-button'
                                onClick={ () => signIn() }
                            >Sign in</button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};