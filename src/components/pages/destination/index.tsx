import { useEffect } from 'react';

import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from '@glidejs/glide';

import img0 from '../../../assets/destination/image-europa.webp';
import img1 from '../../../assets/destination/image-mars.webp';
import img2 from '../../../assets/destination/image-moon.webp';
import img3 from '../../../assets/destination/image-titan.webp';
import { destinations } from '../../../service/data.json'


import {
    Container,
    Content,
    TitleImg,
    WrapperSlider,
    HeaderSlider
} from "./sytle";


const Destination = () => {

    const imgs: string[] = [img0, img1,img2, img3];

    useEffect(() => {
        const glide = new Glide('.glide', {
            type: 'slider',
            perView: 1

        })

        glide.mount()
    }, []);


    const getImageByIndex = (index: number) : string => imgs[index]; 

    return (
        <>
            <Container />
            <div className="destination wrapper">
                {
                    destinations ? (
                        <div className="glide">
                            <div className="glide__track" data-glide-el="track">
                                <ul className="glide__slides">
                                    {

                                        destinations.map((item, index) => (
                                            <li className="glide__slide" key={index}>
                                                <Content>
                                                    <TitleImg>
                                                        <h2>
                                                            <span>{`0 ${index + 1}`}</span>P I C K
                                                            &nbsp;&nbsp;&nbsp; Y O U R
                                                            &nbsp;&nbsp;&nbsp; D E S T I N A T I O N
                                                        </h2>
                                                        <img src={getImageByIndex(index)} alt={item.name} />
                                                    </TitleImg>
                                                    <WrapperSlider>
                                                        <HeaderSlider data-glide-el="controls[nav]">
                                                            <button data-glide-dir="=0">M O O N</button>
                                                            <button data-glide-dir="=1">M A R S</button>
                                                            <button data-glide-dir="=2">E U R O P A</button>
                                                            <button data-glide-dir="=3">T I T A N</button>
                                                        </HeaderSlider>
                                                        <div className="slider">
                                                            <div className="content-slider">
                                                                <h2>{item.name.toUpperCase()}</h2>
                                                                <p>{item.description}</p>
                                                                <hr />
                                                                <div className="info-slider">
                                                                    <div className="info-box">
                                                                        <h2>AVG. DISTANCE</h2>
                                                                        <span>{item.travel.toUpperCase()}</span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h2>EST. TRAVEL TIME</h2>
                                                                        <span>{item.distance.toUpperCase()}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </WrapperSlider>
                                                </Content>
                                            </li>
                                        ))

                                    }
                                </ul>
                            </div>
                        </div>
                    ) : (<h1>CARREGANDO...</h1>)
                }
            </div>
        </>
    )
}

export default Destination;