import Image from 'next/image';
import styles from './page.module.css';
import '@repo/shared-styles/button.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <button className='button__style'>Click</button>
        </main>
    );
}
