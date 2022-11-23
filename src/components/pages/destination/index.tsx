import { useEffect } from 'react';

import img0 from '../../../assets/destination/image-europa.webp';
import img1 from '../../../assets/destination/image-mars.webp';
import img2 from '../../../assets/destination/image-moon.webp';
import img3 from '../../../assets/destination/image-titan.webp';
import { destinations } from '../../../service/data.json'

import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from '@glidejs/glide';

import { 
    Container,
    Content,
    TitleImg,
    WrapperSlider
 } from "./sytle";


const Destination = () => {

    const glide = new Glide(".glide", {
        perView: 1,
        type: "slider",
    });   

    useEffect(() => {
        const glideMount = async () => {
            glide.mount()
        };

        glideMount();

    }, []);


    const imgIndex = (index: number) => {
        switch (index) {
            case 0: return img0;
            case 1: return img1;
            case 2: return img2;
            case 3: return img3;
            default: console.log("Erro ao carregar as imagens");
                break;
        }
    }

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
                                                        <img src={imgIndex(index)} alt={item.name} />
                                                    </TitleImg>
                                                    <WrapperSlider>
                                                        <div className="header-slider"
                                                            data-glide-el="controls[nav]"
                                                        >
                                                            <button data-glide-dir="=0">M O O N</button>
                                                            <button data-glide-dir="=1">M A R S</button>
                                                            <button data-glide-dir="=2">E U R O P A</button>
                                                            <button data-glide-dir="=3">T I T A N</button>
                                                        </div>
                                                        <div className="slider">
                                                            <div className="content-slider">
                                                                <h2>{item.name.toUpperCase()}</h2>
                                                                <p>{item.description.toUpperCase()}</p>
                                                                <hr />
                                                                <div className="info-slider">
                                                                    <div className="info-box">
                                                                        <h2>AVG. DISTANCE</h2>
                                                                        <span>{item.travel.toUpperCase()}</span>
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