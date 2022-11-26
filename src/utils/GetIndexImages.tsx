import moon from "../assets/destination/image-moon.webp";
import mars from "../assets/destination/image-mars.webp";
import europa from "../assets/destination/image-europa.webp";
import titan from "../assets/destination/image-titan.webp";

const imagesPlanets: string[] = [moon, mars, europa, titan];

import douglas from '../assets/crew/image-douglas-hurley.webp';
import mark from '../assets/crew/image-mark-shuttleworth.webp';
import victor from '../assets/crew/image-victor-glover.webp';
import anousheh from '../assets/crew/image-anousheh-ansari.webp';

const imagesEmployees: string[] = [douglas, mark, victor, anousheh];


function getImageByIndex(index: number, list: string[]): string {
    return list[index];
}

export { imagesPlanets, imagesEmployees, getImageByIndex };