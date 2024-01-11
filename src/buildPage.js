import Icon1 from './9OsQHDB.jpg';
import Icon2 from './1412416.jpg'


export function buildPage(){

    console.log("Hereee")
    const page = document.querySelector('#content')
    const gridContainer = document.createElement('div')
    const header = document.createElement('div')
    const mainContent = document.createElement('div')
    mainContent.classList.add('main')
    const tabHolder = document.createElement('div')

    buildGrid(gridContainer)
    buildHeader(header)
    buildMainContent(mainContent)
    buildTabs(tabHolder)
    gridContainer.appendChild(header)
    gridContainer.appendChild(mainContent)
    gridContainer.appendChild(tabHolder)
    
    page.appendChild(gridContainer)


}


function buildGrid(container){
    container.style.display = 'grid'
    container.style.gridTemplateRows = '1.15fr 0.43fr 4fr'
    container.style.gridTemplateColumns = '1fr'
    container.style.height = '100%'
    container.style.width = '100%'
    
    
}

function buildHeader(header){
    const backgroundImg = new Image()
    backgroundImg.src = Icon1
    backgroundImg.style.position = 'absolute'

    styleImage(backgroundImg)

    header.style.gridRow = '1 / 2'
    header.style.gridColumn = '1 / 2'
    header.style.position = 'relative';

    header.style.display = 'flex'
    header.style.alignItems = 'center'
    header.style.justifyContent = 'center'

    header.appendChild(backgroundImg)

    const textHolder = document.createElement('div')

    textHolder.appendChild(document.createTextNode("~Welcome to the Valheim Restaurant~"))
    textHolder.style.fontSize = '75px'
    textHolder.style.position = 'absolute'
    textHolder.style.zIndex = '1'
    textHolder.style.color = '#ffcc33 '
    textHolder.style.borderTop = '8px solid #ffcc33 '
    textHolder.style.borderBottom = '8px solid #ffcc33'
    

    header.appendChild(textHolder)
}

function buildMainContent(mainContent){
    mainContent.style.gridRow = '3 / 4'
    mainContent.style.gridColumn = '1 / 2'
    mainContent.style.backgroundColor = '#f5deb3'
}

function buildTabs(tabHolder){
    
    tabHolder.style.display = 'grid'
    tabHolder.style.gridRow = '2 / 3'
    tabHolder.style.gridColumn = '1 / 2'
    tabHolder.style.gridTemplateColumns = '1fr 1fr 1fr'
    tabHolder.style.gridTemplateRows = '1fr'
    tabHolder.style.alignItems = 'center'
    tabHolder.style.justifyContent = 'center'
    tabHolder.style.position = 'relative'
   // tabHolder.style.backgroundColor = '#3d0c02'

   
    
    

    

    //tabHolder.appendChild(backgroundImg)
    //backgroundImg.style.position = 'absolute'

    buildTabButtons(tabHolder)
    
    
}

function styleImage(img){
    img.style.width = '100%'
    img.style.height = '100%'
    img.style.maxWidth = '100%'
    img.style.maxHeight = '100%'
    img.style.objectFit = 'cover';
}


function styleButton(bttn,img){
    /*
    const buttonHolder = document.createElement('div')
    buttonHolder.style.display = 'flex'; // Use flexbox to align items horizontally
    buttonHolder.style.alignItems = 'center';
    buttonHolder.style.justifyContent = 'center';
    bttn.style.height = '100%'
    
    img.style.position = 'absolute'
    bttn.style.position = 'absolute'
    bttn.style.zIndex = '1';

    buttonHolder.appendChild(img)

    buttonHolder.appendChild(bttn)

    tab.appendChild(buttonHolder)
    */
    bttn.style.height = '100%';
    bttn.style.backgroundImage = `url(${img.src})`;
    bttn.style.backgroundSize = 'cover';
    bttn.style.backgroundPosition = 'center';
    bttn.style.backgroundRepeat = 'no-repeat';
    bttn.style.display = 'flex'
    bttn.style.fontSize = '50px'
    bttn.style.color = '#ffcc33 '
    bttn.style.alignItems = 'center'
    bttn.style.justifyContent = 'center'

}

function buildTabButtons(tab){

    const backgroundImg = new Image()
    backgroundImg.src = Icon2

    styleImage(backgroundImg)


    const homeButton = document.createElement('button')
    homeButton.textContent = "~HOME~"
    homeButton.style.gridColumn = '1 / 2'
    homeButton.classList.add('homeBttn')
    styleButton(homeButton,backgroundImg)
 
    const menuButton = document.createElement('button')
    menuButton.textContent = "~MENU~"
    menuButton.style.gridColumn = '2 / 3'
    menuButton.classList.add('menuBttn')
    styleButton(menuButton,backgroundImg)
    
    const contactButton = document.createElement('button')
    contactButton.textContent = "~CONTACT~"
    contactButton.style.gridColumn = '3 / 4'
    contactButton.classList.add('contactBttn')
    styleButton(contactButton,backgroundImg)
    
    
    tab.appendChild(homeButton)
    tab.appendChild(menuButton)
    tab.appendChild(contactButton)
    
}