import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
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
        price: "No tiene precio",
        pictureUrl: "https://cdn-amdgk.nitrocdn.com/leNGTWZgXPSVSbgccNgBwOvPbPUrxtAA/assets/static/optimized/rev-a64370b/wp-content/uploads/2021/12/suscripcion.png",
        category: "profesor"
    },
];

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const { itemId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });
        getData.then(res => setData(res.find(productos => productos.id === parseInt(itemId))));
    }, [])


    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer