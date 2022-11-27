import { gsap } from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
    BgContent,
    WrapperHome,
    InfoHome,
    BtnExplore
} from "./style";


const Home = (props: any) => {

    useEffect(() => {

        const tl = gsap.timeline();
    
        tl.fromTo("#bg", { width: "0%", opacity: 0}, {opacity: 1, width: "100%"}, 2)
        tl.fromTo("#inicio", {x: 1500, opacity: 0}, {x: 0, opacity: 1}, 3.5)
        tl.fromTo("#acb", {y: 1000}, {y: 0}, 3)

      
        
        
    }, [])


    return (
        <>
            <BgContent id="bg" />
            <WrapperHome >
                <InfoHome id="inicio">
                    <span >so, you want to travel to</span>
                    <h1>space</h1>
                    <p>Let’s face it; if you want to go to space, you might as well
                        genuinely go to outer space and not hover kind of on the
                        edge of it. Well sit back, and relax because we’ll give you a
                        truly out of this world experience!
                    </p>
                </InfoHome>
                    <BtnExplore id="acb">
                        <Link to="/destination">
                            explore
                        </Link>
                    </BtnExplore>
            </WrapperHome>

        </>
    )
}

export default Home;