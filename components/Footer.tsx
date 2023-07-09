import Link from 'next/link';
import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { TbBrandFiverr } from 'react-icons/tb';
import { FaTwitter } from 'react-icons/fa';

import styles from '@/styles/footer.module.scss';



export default function Footer() {
    return (
        <div className={ styles.footer_wrapper }>
            <div className={ styles.footer_content }>
                <div className={ styles.footer_category }>
                    <h2>Services</h2>
                    <ul>
                        <li>
                            <Link href="#">Web design</Link>
                        </li>
                        <li>
                            <Link href="#">Development</Link>
                        </li>
                        <li>
                            <Link href="#">Hosting</Link>
                        </li>
                    </ul>
                </div>
                <div className={ styles.footer_category }>
                    <h2>About</h2>
                    <ul>
                        <li>
                            <Link href="#">Company</Link>
                        </li>
                        <li>
                            <Link href="#">Team</Link>
                        </li>
                        <li>
                            <Link href="#">Legacy</Link>
                        </li>
                    </ul>
                </div>
                <div className={ styles.footer_category }>
                    <h2>Careers</h2>
                    <ul>
                        <li>
                            <Link href="#">Job openings</Link>
                        </li>
                        <li>
                            <Link href="#">Employee success</Link>
                        </li>
                        <li>
                            <Link href="#">Benefits</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={ styles.footer_links }>
                <div className={ styles.links_container }>
                    <Link 
                        href='https://www.linkedin.com/in/choaib-elmadi' 
                        target='_blank'
                        rel='noreferrer'
                        className={ styles.link }
                    >
                        <AiFillLinkedin size={ 24 } />
                    </Link>
                    <Link 
                        href='https://www.fiverr.com/choaib_elmadi' 
                        target='_blank'
                        rel='noreferrer'
                        className={ styles.link }
                    >
                        <TbBrandFiverr size={ 24 } />
                    </Link>
                    <Link 
                        href='https://www.instagram.com/choaib_elmadi/' 
                        target='_blank'
                        rel='noreferrer'
                        className={ styles.link }
                    >
                        <AiFillInstagram size={ 24 } />
                    </Link>
                    <Link 
                        href='https://twitter.com/curious_choaib' 
                        target='_blank'
                        rel='noreferrer'
                        className={ styles.link }
                    >
                        <FaTwitter size={ 24 } />
                    </Link>
                </div>
                <p>Supplier | Aitmgoun &copy; { new Date().getFullYear() }</p>
            </div>
        </div>
    );
};