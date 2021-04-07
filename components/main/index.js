import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Footer from './footer';
import styles from './index.module.css';
import SectionOne from './section-one/index';
import SectionThree from './section-three';
import SectionTwo from './section-two';

// este main acaba por não ser usado, pois as páginas estão divididas em 6, uma por produto.

export default function Main(){
    return(
        <main>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <SectionThree></SectionThree>
            <Footer></Footer>
        </main>
    );
}