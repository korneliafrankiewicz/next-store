import Image from 'next/image';
import styles from './page.module.css';
import BlogList from '../app/pages/api/blogs';

export default function Home({ posts }: any) {
  return (
    <main className={styles.main}>
      <BlogList />
    </main>
  );
}
