import { useState, useEffect } from 'react';
import { Container } from "./sytle";

import img0 from '../../../assets/destination/image-europa.webp';
import img1 from '../../../assets/destination/image-mars.webp';
import img2 from '../../../assets/destination/image-moon.webp';
import img3 from '../../../assets/destination/image-titan.webp';

import Glide from '@glidejs/glide';



const Destination = (props: any) => {

    const [destination, setDestination] = useState(null);
    let glide: any; // Glide.Static;

    useEffect(() => {
        setData();

        glide = new Glide(".glide", {
            perView: 1,
            type: "carousel",
        });
    }, [])

    const setData = async () => {
        props.dataApi
            .then((res: any) => setDestination(res.destination))
            .then(() => glide.mount());
    };

    const imgIndex = (index: number) => {
        switch (index) {
            case 0: return img0;
            case 1: return img1;
            case 2: return img2;
            case 3: return img3;
            default: console.log("Error ao carregar as imagens");
            

        }
    }

    return (
        <Container />
    )
}

export default Destination;