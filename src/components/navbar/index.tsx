import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/shared/logo.svg';
import closeIcon from '../../assets/shared/icon-close.svg';
import openIcon from '../../assets/shared/icon-hamburger.svg';

type Routes = {
    currentRoute: string;
}

const Navbar = ({ currentRoute }: Routes) => {
    const [isShowing, setIsShowing] = useState(false);


    return (
        <header>
            <div className="navbar-outside"
                style={isShowing ? { display: "block" } : { display: "none" }}
                onClick={() => setIsShowing(!isShowing)}></div>
            <div className="logo">
                <img src={logo} alt="logo do site" />
                <hr />
            </div>
            <div className="bars-navbar"
                style={isShowing ? { display: "block" } : { display: "none" }}>
                <img src={openIcon} alt="" />
            </div>
            <ul className='navbar'>
                <div className="close"
                    style={isShowing ? { display: "block" } : { display: "none" }}>
                    <img src={closeIcon}
                        onClick={() => setIsShowing(!isShowing)}
                        alt="icone de fechar menu" />
                </div>
                <li>
                    <Link to="/"
                        style={currentRoute === ""
                            ? { borderBottom: "solid 2px white" }
                            : { borderBottom: "solid 2px transparent" }
                        }><strong>0 0</strong>&nbsp; H O M E</Link>
                </li>
                <li>
                    <Link to="/destination"
                        style={currentRoute === "destination"
                            ? { borderBottom: "solid 2px white" }
                            : { borderBottom: "solid 2px transparent" }
                        }><strong>0 1</strong>&nbsp; D E S T I N A T I O N</Link>
                </li>
                <li>
                    <Link to="/crew"
                        style={currentRoute === "crew"
                            ? { borderBottom: "solid 2px white" }
                            : { borderBottom: "solid 2px transparent" }
                        }><strong>0 2</strong>&nbsp; C R E W</Link>
                </li>
                <li>
                    <Link to="/technology"
                        style={currentRoute === "technology"
                            ? { borderBottom: "solid 2px white" }
                            : { borderBottom: "solid 2px transparent" }
                        }><strong>0 3</strong>&nbsp; T E C H N O L O G Y</Link>
                </li>
            </ul>
        </header>
    )
}


export default Navbar;