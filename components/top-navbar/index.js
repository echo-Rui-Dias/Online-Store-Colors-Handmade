import styles from './index.module.css';
import SectionTwo from '../main/section-two/index';
import  {useRouter} from 'next/router';
import Main from '../main/index';

export default function TopNavbar() {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles['menu-logo']} >
                    <a href="#">
                    <img src={'navbar/logo.svg'} />
                    </a>
                </div>
                <div className={styles['list-menu']}>
                    <ul id={styles['list-menu-left']}>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#produtos">Produtos</a></li>
                        <li><a href="#contactos">Contactos</a></li>
                    </ul>
                    <ul id={styles['list-menu-right']}>
                        <li > <a id={styles['btn-login']}>Login</a> </li>
                        <li> <a>Create account</a> </li>
                    </ul>
                </div>
                <div className={styles['menu-shop']}>
                    <span>0</span>
                    <img src={'navbar/shop.svg'} />
                </div>
            </div>
            <div className={styles.background}></div>
        </div>
    );
};




