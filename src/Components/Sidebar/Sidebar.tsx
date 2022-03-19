import * as AiIcons from "react-icons/ai"
import { BsBook } from "react-icons/bs"

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <BsBook/>, 
        cName: 'nav-text'
    },
    // {
    //     title: 'Favorites',
    //     path: '/favorites',
    //     icon: <AiIcons.AiFillHeart/>,
    //     cName: 'nav-text'
    // },
];