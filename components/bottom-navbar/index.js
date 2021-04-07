import styles from './index.module.css';

export default function BottomNavbar() {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <ul className={styles['list-menu']}>
                    <li><a href="#"> <span> <img src={'navbar/home.svg'}/> </span> Home</a></li>
                    <li><a href="#sobre"> <span> <img src={'navbar/about.svg'}/> </span> Sobre</a></li>
                    <li><a href="#produtos"> <span> <img src={'navbar/products.svg'}/> </span> Produtos</a></li>
                    <li><a href="#contactos"> <span> <img src={'navbar/contact.svg'}/> </span> Contactos</a></li>
                    <li><a href=""> <span> <img src={'navbar/profile.svg'}/> </span> Perfil</a></li>
                </ul>
            </div>
            <div className={styles.background}></div>
        </div>
    );
};