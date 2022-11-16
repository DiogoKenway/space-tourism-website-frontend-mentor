import GlobalStyle from "./global-styled/GlobalStyled";
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from "./components/navbar";
import Home from "./components/pages/home/Home";
import Destination from './components/pages/destination/Destination';
import Crew from './components/pages/crew/Crew';
import Technology from './components/pages/technology/Technology';
import dataApi from './service/data.json';


// type Api = {
//   destinations: [
//     {
//       name: string;
//       images: {
//         png: string;
//         webp: string;
//       };
//       description: string;
//       distance: string;
//       travel: string;
//     },
//     {
//       name: string;
//       images: {
//         png: string;
//         webp: string;
//       };
//       description: string;
//       distance: string;
//       travel: string;
//     },
//     {
//       name: string;
//       images: {
//         png: string;
//         webp: string;
//       };
//       description: string;
//       distance: string;
//       travel: string;
//     },
//     {
//       name: string;
//       images: {
//         png: string;
//         webp: string;
//       };
//       description: string;
//       distance: string;
//       travel: string;
//     },
//   ],
//   crew: [
//     {

//     }
//   ]

// }


function App() {
  console.log(dataApi);

  const location: string = useLocation().pathname;
  const newClass: string = location.split("/")[1];
  console.log(newClass);

  return (
    <>
      <GlobalStyle />
      <Navbar currentRoute={location}/>
      <Routes>
        <Route path="/" element={<Home dataApi={dataApi} />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  )
}

export default App;
