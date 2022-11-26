import { useEffect } from 'react';

import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from '@glidejs/glide';

import img0 from '../../../assets/destination/image-moon.webp';
import img1 from '../../../assets/destination/image-mars.webp';
import img2 from '../../../assets/destination/image-europa.webp';
import img3 from '../../../assets/destination/image-titan.webp';
import { destinations } from '../../../service/data.json'


import {
    BgContent,
    WrapperDestination,
    Container,
    TitleImg,
    WrapperSlider,
    HeaderSlider,
    ContentSlider,
    InfoSlider,
    TitleSlider
} from "./sytle";


const Destination = () => {

    const imgs: string[] = [img0, img1, img2, img3];

    useEffect(() => {
        const glide = new Glide('#glide', {
            type: 'slider',
            perView: 1

        })

        glide.mount()
    }, []);


    const getImageByIndex = (index: number): string => imgs[index];

    return (
        <>
            <BgContent />
            <div className="destination wrapper">
                {
                    destinations ? (
                        <WrapperDestination id='glide'>
                            <div className="glide__track" data-glide-el="track">
                                <ul className="glide__slides">
                                    {

                                        destinations.map((item, index) => (
                                            <li className="glide__slide" key={index}>
                                                <Container>
                                                    <TitleImg>
                                                        <img src={getImageByIndex(index)} alt={item.name} />
                                                    </TitleImg>
                                                    <WrapperSlider>
                                                        <HeaderSlider data-glide-el="controls[nav]">
                                                            <button data-glide-dir="=0">moon</button>
                                                            <button data-glide-dir="=1">mars</button>
                                                            <button data-glide-dir="=2">europa</button>
                                                            <button data-glide-dir="=3">titan</button>
                                                        </HeaderSlider>
                                                        <ContentSlider>
                                                            <TitleSlider>
                                                                <h1>{item.name}</h1>
                                                                <p>{item.description}</p>
                                                                <hr />
                                                            </TitleSlider>
                                                            <InfoSlider>
                                                                <span>{item.distance}</span>
                                                                <span>{item.travel}</span>
                                                            </InfoSlider>
                                                        </ContentSlider>
                                                    </WrapperSlider>
                                                </Container>
                                            </li>
                                        ))

                                    }
                                </ul>
                            </div>
                        </WrapperDestination>
                    ) : (<h1>CARREGANDO...</h1>)
                }
            </div>
        </>
    )
}

export default Destination;