import styles from './index.module.css'

{/*                                         Medu em desenvolvimento 
                                Faltam as páginas de ligação aos respetivos links
*/}

export default function Footer() {
    return (
        <footer className={styles.container} id="contactos">
            <div className={styles.row}>
                <h4>Contactos</h4>
                <div className={styles.email}>
                    <h2>colorshm@gmail.com</h2>
                </div>
                <div>
                    <h4>@ <span>Colors</span> Handmade</h4>
                </div>
                <div className={styles.info}>
                    <ul>
                        <li>
                            <ul>
                                <li className={styles.title}>Legislação</li>
                                <li><a>Política de privacidade</a></li>
                                <li><a>Condições de compra</a></li>
                                <li><a>Devoluções</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li className={styles.title}>Métodos de pagamento</li>
                                <li><a>MB Way</a></li>
                                <li><a>PayPal</a></li>
                                <li><a>Multibanco</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li className={styles.title}>Perguntas Frequentes</li>
                                <li><a>Como é feito o envio</a></li>
                                <li><a>De onde são os produtos?</a></li>
                                <li><a>Posso saber o estado do envio?</a></li>
                                <li><a>Posso cancelar o meu pedido?</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li className={styles.title}>Contactos</li>
                                <li><a>Instagram</a></li>
                                <li><a>Facebook</a></li>
                                <li><a>Email</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}