import { GlobalStyle, Content } from "./global-styled/GlobalStyled";
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from "./components/navbar";
import Home from "./components/pages/home";
import Destination from './components/pages/destination';
import Crew from './components/pages/crew';
import Technology from './components/pages/technology';
import dataApi from './service/data.json';


function App() {

  const location: string = useLocation().pathname;
  const newLocation : string = location.split("/").join("");

  return (
    <Content>
      <GlobalStyle />
      <Navbar currentRoute={newLocation}/>
      <Routes>
        <Route path="/" element={<Home dataApi={dataApi} />} />
        <Route path="/destination" element={<Destination dataApi={dataApi} />} />
        <Route path="/crew" element={<Crew dataApi={dataApi} />} />
        <Route path="/technology" element={<Technology dataApi={dataApi} />} />
      </Routes>
    </Content>
  )
}

export default App;
