import styles from './index.module.css';

export default function SectionTwo() {
    return (
        <section className={styles.container} id="sobre">
            <div className={styles.row}>
                <h2>COLORS handmade</h2>
                <img className={styles.image} src={'main/about.jpg'} width="1080" height="1182" />
                <div className={styles['product-info']}>
                    <h2>COLORS handmade</h2>
                    <p> A colors handmade é o meu mais recente bebé. Começou por ser um projecto no âmbito de um curso de marketing de moda que tirei. Foi pensado para uma marca de tricot que conjugava o slow fashion com a tradição e a cor. Mas como tudo sofre evolução, a marca também começou a evoluir comigo e assim deixou apenas o tricot para ser a minha marca, a minha arte e tudo aquilo que faz sentido para mim.</p>
                    <p>  Nesta marca tudo se conjuga e com ela espero conseguir transmitir toda essa energia a quem a quiser receber.</p>
                </div>
            </div>
        </section>
    );
}