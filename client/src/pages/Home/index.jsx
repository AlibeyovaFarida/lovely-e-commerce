import React from 'react'
import Header from '../../layout/Header'
import HomePreview from '../../components/Home/HomePreview'
import Slider from '../../components/Home/Slider'
import BestsellerProducts from '../../components/Home/BestsellerProducts'
import NewProducts from '../../components/Home/NewProducts'
import BestsellerFilteredProducts from '../../components/Home/BestsellerFilteredProducts'
import Banners from '../../components/Home/Banners'
import styles from './style.module.scss'
import Footer from '../../layout/Footer'
const Home = () => {
  return (
    <div className={styles.home}>
      <Header type="home" />
      {/* <HomePreview /> */}
      <Slider/>
      <BestsellerProducts />
      <NewProducts />
      <BestsellerFilteredProducts />
      <Banners />
      <Footer variant="white" />
    </div>
  );
}

export default Home