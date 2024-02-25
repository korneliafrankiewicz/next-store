import Image from 'next/image';
import styles from './page.module.css';
import BlogList from '../app/pages/api/blogs';
import TemporaryDrawer from './components/menu/Menu';
import Header from './components/header/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme from './theme';
import ButtonComponent from './components/buttonComponent/ButtonComponent';

export default function Home({ posts }: any) {
  return (
    <ThemeProvider theme={theme}>
      <main className={styles.main}>
        <TemporaryDrawer />
        <Header />
        {/* <BlogList /> */}
      </main>
    </ThemeProvider>
  );
}
