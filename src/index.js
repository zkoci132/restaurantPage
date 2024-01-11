import { buildPage } from './buildPage'
import { buildHomeContent } from './tabs/home.js'
import { buildMenuContent } from './tabs/menu.js'
import { buildContactContent } from './tabs/contact.js'
import './style.css';

buildPage();

const homeButton = document.querySelector('.homeBttn');
const menuButton = document.querySelector('.menuBttn');
const contactButton = document.querySelector('.contactBttn')


homeButton.addEventListener('click',()=>{
    buildHomeContent()
})

menuButton.addEventListener('click',()=>{
    buildMenuContent()
})

contactButton.addEventListener('click',()=>{
    buildContactContent()
})

