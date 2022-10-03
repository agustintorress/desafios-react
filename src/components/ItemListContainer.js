import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';

import { useParams } from 'react-router-dom';

const productos = [
    {
        id: 1,
        name: "Microondas",
        description: "Cansado de tener hambre a las 6 am, y nada mas hay guiso frio? Tranquilo, con el nuevo microondas 5890 podras calentar ese guiso de lentejas en segundos!!!WOOOOOOOW",
        price: 20000,
        pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVE_mHzHkd1npxmQvoIANf5FvwUY0-McJMRQ&usqp=CAU",
        category: "productos"
    },
    {
        id: 2,
        name: "Esponja",
        description: "Quién vive en una piña debajo del mar. ¡¡Bob Esponja!! Su cuerpo amarillo absorbe sin más. ¡¡Bob Esponja!!",
        price: 350,
        pictureUrl: "https://pbs.twimg.com/media/Evpd5BdXcAUsVRe.jpg",
        category: "productos"
    },
    {
        id: 3,
        name: "Pistola de agua",
        description: "Con esta sale agua, la bala se la trago el brazuca que esta en cana!",
        price: 15000,
        pictureUrl: "https://m.media-amazon.com/images/I/41IBO-zSTDL.jpg",
        category: "productos"
    },
    {
        id: 4,
        name: "Pablo Facherito",
        description: "El profe bien facherito facheron",
        price: 3,
        pictureUrl: "https://pablomonteserin.com/wp-content/uploads/2021/12/suscripcion.png",
        category: "profesor"
    },
];


const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(productos => productos.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
    }, [categoriaId])



    return (
        <>
            <h1>¡{greeting}!</h1>
            <ItemList data={data} />
        </>

    )
}

export default ItemListContainer