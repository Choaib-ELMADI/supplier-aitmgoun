import styles from '@/styles/loading.module.scss';
import Spinner from '@/components/Spinner';



export default function Loading() {
    return (
        <div className={ styles.loading_page }>
            <h1>Loading</h1>
            <Spinner />
        </div>
    );
};