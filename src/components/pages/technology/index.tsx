import { useEffect, useState } from "react";

import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from "@glidejs/glide";

import { technology } from '../../../service/data.json';
import { getImageByIndex, imagesRocketsDesktop } from "../../../utils/GetIndexImages";

import { 
    BgImage,
    WrapperTecnology,
    Container,
    NavigationPoints,
    Informations,
    ContainerImage
} from "./style";

const Technology = (props: any) => {

    const [showMenu, setShowMenu] = useState(true);
    
    useEffect(() => {
        const glide = new Glide("#glide",{
            type: 'slider',
            perView: 1
        })

        glide.mount()
    }, [])


    const getWidth = (): number => window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;



    function useCurrentWidth(): number {

        const [width, setWidth] = useState(getWidth());

        useEffect(() => {
            const tl = gsap.timeline();

            // tl.fromTo("#logo", {y: 1500, opacity: 0}, {y: 0, opacity: 1}, 3)
            // tl.fromTo("#line", {x: 1500, opacity: 0}, {x: 0, opacity: 1}, 3.1)
            // tl.fromTo("#navbar", {y: -1500, opacity: 0}, {y: 0, opacity: 1}, 3.5)

            let timeoutId: any;

            const resizeListener = (): void => {

                clearTimeout(timeoutId);

                timeoutId = setTimeout(() => setWidth(getWidth()), 150);
            };

            window.addEventListener('resize', resizeListener);

            return () => {
                window.removeEventListener('resize', resizeListener);
            }


        }, [])

        return width;
    }

    return (
        <>
            <BgImage />
            {
                technology ? (
                    <div id="glide">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                {technology.map((item, index) =>
                                    <li key={index}>
                                        <WrapperTecnology>
                                            <Container>                                         
                                                    <NavigationPoints data-glide-el="controls[nav]">
                                                        <span data-glide-dir="=0">1</span>
                                                        <span data-glide-dir="=1">2</span>
                                                        <span data-glide-dir="=2">3</span>                                                                                   
                                                    </NavigationPoints>
                                                    <Informations>
                                                        <h1>{item.name}</h1>
                                                        <p>{item.description}</p>
                                                    </Informations>                                              
                                                <ContainerImage>
                                                    <img src={getImageByIndex<string>(index, imagesRocketsDesktop)} alt="" />
                                                </ContainerImage>
                                            </Container>
                                        </WrapperTecnology>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>) : (<h1>CARREGANDO DADOS....</h1>)
            }


        </>
    )
}

export default Technology;