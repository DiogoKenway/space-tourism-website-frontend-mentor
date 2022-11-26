import { BgImage } from "./style";
import { crew } from '../../../service/data.json';
import Glide from "@glidejs/glide";

import { useEffect } from "react";
import { imagesEmployees, getImageByIndex } from '../../../utils/GetIndexImages';
import "@glidejs/glide/src/assets/sass/glide.core.scss";

const Crew = (props: any) => {

    useEffect(() => {
        const glide = new Glide("#glide", {
            type: 'slider',
            perView: 1
        })

        glide.mount();
    }, [])


    return (
        <>
            <BgImage /> {
                crew ? (
                    <div id="glide">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                {crew.map((item, index) => (
                                    <li key={index}>
                                        <main className="Container">
                                            <div className="wrappper-crew">
                                                <section className="title-page">
                                                    <h2><strong>02</strong>meet your crew</h2>
                                                </section>
                                                <section className="role-information">
                                                    <h3>{item.role}</h3>
                                                    <h1>{item.name}</h1>
                                                    <p>{item.bio}</p>
                                                </section>z
                                                <section className="navigation-points">       
                                                    <nav data-glide-el="controls[nav]">
                                                        <span data-glide-dir="=0">moon</span>
                                                        <span data-glide-dir="=1">mars</span>
                                                        <span data-glide-dir="=2">europa</span>
                                                        <span data-glide-dir="=3">titan</span>
                                                    </nav>
                                                </section>
                                                <section className="photo">
                                                    <img src={getImageByIndex(index, imagesEmployees)} alt={item.name} />
                                                </section>
                                            </div>
                                        </main>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                ) : <h1>CARREGANDO....</h1>
            }

        </>

    )
}

export default Crew;