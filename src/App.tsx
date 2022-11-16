import GlobalStyle from "./global-styled/GlobalStyled";
import { Routes, Route } from 'react-router-dom'

import Navbar from "./components/navbar";
import Home from "./components/pages/home/Home";
import Destination from './components/pages/destination/Destination';
import Crew from './components/pages/crew/Crew';
import Technology from './components/pages/technology/Technology';
import datas from './service/data.json';


function App() {
  console.log(datas);
  
  return (
    <>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/destination" element={<Destination />}/>
          <Route path="/crew" element={<Crew />}/>
          <Route path="/technology" element={<Technology />}/>
        </Routes>
    </>
  )
}

export default App;
