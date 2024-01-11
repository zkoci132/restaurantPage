export function buildContactContent(){
    console.log("OI")

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

    

    buildContactContentHeader(gridContainer)

    contentHolder.appendChild(gridContainer)

}


function buildContactContentHeader(container){
    const contactHeader = document.createElement('div')
    buildHeader(contactHeader);

    const contactContent = document.createElement('div')
    buildContent(contactContent)

    

    container.appendChild(contactHeader);
    container.appendChild(contactContent); 
}


function buildHeader(div){
    div.appendChild(document.createTextNode('Contact Us...'))

    div.style.color = 'black'
    div.style.fontSize = '32px'

    div.style.display = 'flex'
    div.style.alignItems = 'center'
    div.style.justifyContent = 'center'
}

function buildContent(div){
    const contactTextp = document.createElement('p')
    const contactText = "Hello there";
    contactTextp.appendChild(document.createTextNode(contactText))
    

    div.appendChild(contactTextp)

    div.style.color = 'black'
    div.style.fontSize = '16px'

    div.style.display = 'flex'
    div.style.alignItems = 'center'
    div.style.justifyContent = 'center'
}
