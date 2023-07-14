import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';
import Link from 'next/link';

import styles from '@/styles/pagination.module.scss';

interface PaginationBarProps {
    currentPage: number,
    totalPages: number,
};



export default function PaginationBar({ currentPage, totalPages }: PaginationBarProps) {
    const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10));
    const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));

    const numberedPageItems: JSX.Element[] = [];

    for (let page = minPage; page <= maxPage; page++) {
        numberedPageItems.push(
            <Link 
                href={ `?page=${ page }` }
                key={ page }
                className={ 
                    ` ${ styles.pagination_link } 
                    ${ currentPage === page ? styles.pagination_link_active : '' }` 
                }
            >{ page }</Link>
        );
    }

    return (
        <>
            <div className={ styles.pagination_container }>
                { numberedPageItems }
            </div>

            <div className={ styles.small_pagination_container }>
                { currentPage > 1 && (
                    <Link 
                        href={ `?page=${ currentPage - 1 }` }
                        className={ styles.pagination_link }
                    >
                        <BsChevronBarLeft size={ 22 } />
                    </Link>
                )}
                <p>{ `Page ${ currentPage }` }</p>
                { currentPage < totalPages && (
                    <Link 
                        href={ `?page=${ currentPage + 1 }` }
                        className={ styles.pagination_link }
                    >
                        <BsChevronBarRight size={ 22 } />
                    </Link>
                )}
            </div>
        </>
    );
};