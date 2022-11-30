import { useEffect, useState } from "react";
import Glide from '@glidejs/glide';

import { BgImage } from "./style";
import { technology } from '../../../service/data.json';
import { getImageByIndex, imagesRocketsDesktop } from "../../../utils/GetIndexImages";

const Technology = (props: any) => {

    const [showMenu, setShowMenu] = useState(true);

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
                                        <div className="wrapper-tecnology">
                                            <main className="container">
                                                <section className="dots" data-glide-el="controls[nav]">
                                                    <span data-glide-dir="=0" />
                                                    <span data-glide-dir="=1" />
                                                    <span data-glide-dir="=2" />
                                                    <span data-glide-dir="=3" />
                                                </section>
                                                <section className="informations">
                                                    <h1>{item.name}</h1>
                                                    <p>{item.description}</p>
                                                </section>
                                                <section className="image">
                                                    {getImageByIndex<string>(index, imagesRocketsDesktop)}
                                                </section>
                                            </main>
                                        </div>
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