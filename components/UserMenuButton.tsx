'use client';

import { BsThreeDotsVertical } from 'react-icons/bs';
import { signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import { useState } from 'react';
import Image from 'next/image';

import styles from '@/styles/navbar.module.scss';

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
                                width={ 120 }
                                height={ 120 }
                                draggable='false'
                            />
                            <h2>{ user?.name || 'User' }</h2>
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