import { dark } from "@material-ui/core/styles/createPalette"
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers"

export const homeObjOne = {
    id: 'about', 
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Find the carrer of your dreams',
    headline: 'We are more than just a workplace. We are a family.',
    description: 'We know that finding a meaningful and rewarding job can be a long journey. Our goal is to make that process as easy as possible for you, and to create a work environment that is satisfying - one where you wll look forward to coming to every day. Start your journey with us by browsing available jobs.',
    imgStart: false,
    img: require('../../images/svg-1.svg'),
    // alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
};
