import { BgContent, TitleHome, ButtomExplore, HomeWrapper, Title, Subtitle } from "./style";
import { Link } from "react-router-dom";

const Home = (props: any) => {

    return (
        <>
            <BgContent />
            <HomeWrapper>
                <TitleHome>
                    <h1>
                        <Title>
                            S O, Y O U&nbsp;&nbsp;W A N T&nbsp;&nbsp;T O
                            &nbsp;&nbsp;T R A V E L&nbsp;&nbsp;T O
                        </Title>
                        <Subtitle>SPACE</Subtitle>
                    </h1>
                    <p>
                        Let’s face it; if you want to go to space, you might as well genuinely
                        go to outer space and not hover kind of on the edge of it. Well sit
                        back, and relax because we’ll give you a truly out of this world
                        experience!
                    </p>                    
                </TitleHome>
                <ButtomExplore>
                    <Link to={"/destination"}>
                        <div>
                            <span>E X P L O R E</span>
                        </div>
                    </Link>
                </ButtomExplore>
            </HomeWrapper>
        </>
    )
}

export default Home;