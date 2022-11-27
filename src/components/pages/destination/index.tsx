import { useEffect } from 'react';

import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from '@glidejs/glide';
import gsap from 'gsap';

import { getImageByIndex, imagesPlanets } from '../../../utils/GetIndexImages';

import { destinations } from '../../../service/data.json';

import {
    BgImage,
    Container,
    TitleImg,
    WrapperSlider,
    HeaderSlider,
    ContentSlider,
    InfoSlider,
    TitleSlider
} from "./sytle";


const Destination = () => {

    useEffect(() => {
        const glide = new Glide('#glide', {
            type: 'slider',
            perView: 1

        })

        glide.mount()
    }, []);

    return (
        <>
            <BgImage />
            <div className="destination wrapper">
                {
                    destinations ? (
                        <div id='glide'>
                            <div className="glide__track" data-glide-el="track">
                                <ul className="glide__slides">
                                    {

                                        destinations.map((item, index) => (
                                            <li className="glide__slide" key={index}>
                                                <Container>
                                                    <TitleImg>
                                                        <img src={getImageByIndex(index, imagesPlanets)} alt={item.name} />
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
                        </div>
                    ) : (<h1>CARREGANDO...</h1>)
                }
            </div>
        </>
    )
}

export default Destination;