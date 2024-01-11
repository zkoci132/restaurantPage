export function buildHomeContent(){

    

    const contentHolder = document.querySelector('.main')

    if(contentHolder.hasChildNodes()){
        for (let i = 0; i < contentHolder.childNodes.length; i++) {
            if(contentHolder.firstChild === null){
                continue
            }
            else{
                contentHolder.removeChild(contentHolder.firstChild);
            }
            
        }
    }

    const gridContainer = document.createElement('div')

    gridContainer.style.display = 'grid'
    gridContainer.style.gridTemplateRows = '1fr 3fr'
    gridContainer.style.gridTemplateColumns = '1fr'

    gridContainer.style.height = '100%'
    gridContainer.style.width = '100%'

    

    buildHomeContentHeader(gridContainer)

    contentHolder.appendChild(gridContainer)

}


function buildHomeContentHeader(container){
    const homeHeader = document.createElement('div')
    buildHeader(homeHeader);

    const homeContent = document.createElement('div')
    buildContent(homeContent)

    

    container.appendChild(homeHeader);
    container.appendChild(homeContent); 
}


function buildHeader(div){
    div.appendChild(document.createTextNode('About...'))

    div.style.color = 'black'
    div.style.fontSize = '32px'

    div.style.display = 'flex'
    div.style.alignItems = 'center'
    div.style.justifyContent = 'center'
}

function buildContent(div){
    const aboutTextp = document.createElement('p')
    aboutTextp.style.padding = '50px'
    aboutTextp.style.maxWidth = '60%'
    aboutTextp.style.lineHeight = '2'
    aboutTextp.style.fontSize = '25px'
    const aboutText1 = "This page is intended to display the various recipes found in the game Valheim. While exploring the game world, this page will be a very handy resource to allow you to quickly decide which resources to look for. Good luck on your future travels, and be sure to watch your back in the swamps!";
    aboutTextp.innerHTML = aboutText1 

    
    

    div.appendChild(aboutTextp)

    div.style.color = 'black'
    div.style.fontSize = '16px'

    div.style.display = 'flex'
    div.style.alignItems = 'center'
    div.style.justifyContent = 'center'
}