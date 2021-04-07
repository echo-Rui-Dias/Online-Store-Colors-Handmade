import { useState } from "react";
import Slider from "react-slick";

import styles from './category.module.css';

function SampleArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0001 24.5002L1.5 13.0001L13.0001 1.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>

    );
}

export default function Category({ data }) {

    if (!data) return (<p>Produtos não disponíveis</p>)

    const settings1 = {
        nextArrow: <SampleArrow />,
        prevArrow: <SampleArrow />,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true
                }
            }
        ]
    };

    const settings3 = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={data.products[productID].images[i]} alt={data.products[productID].name} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: false,
        speed: 500,
        slidesToShow: 1
    }

    const [productID, setProductId] = useState(0);

    const changeProductId = (newId)=>{
        setProductId(newId);
    }

    const [changePrice, setChangePrice] = useState(0);
    
    const [quant, setQuant] = useState(1);

    const add =()=>{
            setQuant(quant+1);
    };

    const sub =()=>{
        if(quant>1){
            setQuant(quant-1);
        }else{
            setQuant(1);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.product}>
                <div className={styles.galery} id="galery">

                    <Slider {...settings3}>

                        {data.products[productID].images.map((image) => (
                            <img src={image} alt={data.products[productID].name} />
                        ))}

                    </Slider>
                </div>
                <div className={styles['buy-options']}>
                    <h3>{data.products[productID].name}</h3>
                    <h3>
                        {(data.products[productID].price[changePrice] * quant) + '€'}

                    </h3>
                    <div className={styles['chose-buy-option']}>
                        <div className={styles['chose-buy-option-top']}>
                            <p>Escolha a opção</p>
                            {/* Pensar depois */}
                            {/* <a href=""><p>Ver todas as opções</p></a> */}
                        </div>
                        <select onChange={(evt) => setProductId(evt.target.value)}>
                            {data.products.map((product, index) => (<option value={index}> {product.name} </option>))}
                        </select>
                    </div>

                    <div className={styles.others}>
                        <div className={styles['top-others']}>
                            <p>Escolha a opção</p>
                            {/* Pensar depois */}
                            {/* <a href=""><p>Ver todas as opções</p></a> */}
                        </div>
                        <div className={styles['others-galery']} id="slider-product-options">
                            <Slider {...settings1}>
                                {data.products.map((product) => (
                                    <div className={styles.option} onClick={() => changeProductId(product.id)}  >
                                        <img src={product.images[0]} width="100" height="100" alt={product.name} />
                                        <p>{product.name}</p>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    <div className={styles['size-quantity']}>
                        <div className={styles.size}>
                            <p>Especifique o tamanho</p>
                            <select onChange={(evt) => setChangePrice(evt.target.value)}>
                                {data.products[productID].sizes.map((size, index) => (<option value={index}> {size} </option>))}
                            </select>
                        </div>

                        <div className={styles.quantity}>
                            <p>Escolha a quantidade</p>
                            <div>
                                <button onClick={sub}>-</button>
                                <span> {quant} </span>
                                <button onClick={add}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.btns}>
                        <button className={styles['btn-buy']}> Comprar agora </button>
                        {/* adicionar mais tarde*/}
                        {/* <button className={styles['btn-personalize']}>Personalizar <span> <img /> </span> </button> */}
                    </div>
                </div>
            </div>

            <div className={styles.description}>
                <h4>Descrição</h4>
                <div>
                    <div className={styles['description-package']}>
                        <h3>Embalagem</h3>
                        <p>{data.products[productID].package}</p>
                    </div>

                    <div className={styles['description-materials']}>
                        <h3>Materiais</h3>
                        <p>{data.products[productID].material}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}