import styles from './page.module.css';
import { Button } from '@repo/ui/button';

export default function Home() {
    return (
        <main className={styles.main}>
            <Button>Click me</Button>
        </main>
    );
}
