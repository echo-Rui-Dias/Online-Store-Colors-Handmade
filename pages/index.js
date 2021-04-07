import styles from '../styles/Home.module.css';
// import Main from '../components/main';
import Topnavbar from '../components/top-navbar';
import BottomNavbar from '../components/bottom-navbar';
import Category from '../components/category';
import SectionOne from '../components/main/section-one';
import SectionTwo from '../components/main/section-two';
import SectionThree from '../components/main/section-three';
import Footer from '../components/main/footer';

import { PRODUCTS } from '../data/products';

export default function Home() {
  return (
    <div className={styles.container}>
      <Topnavbar  />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Category data={PRODUCTS.find( (cat) => cat.category == 'incensos' )} />
      <Footer />
      <BottomNavbar />
    </div>
  )
}
