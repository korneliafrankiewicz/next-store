import BlogList from '@/app/pages/api/BlogList';
import Menu from '../../menu/Menu';
import Header from '../../header/Header';
import ProductList from '@/app/pages/api/ProductList';
import Login from '../../login/Login';

export const Home = () => {
  return (
    <>
      <Menu />
      <Login />
      <Header />
      <BlogList />
      <ProductList />
    </>
  );
};

export default Home;
