export function buildMenuContent(){
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

    gridContainer.style.display = 'flex'
    gridContainer.style.flexWrap = 'wrap'
    //gridContainer.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr'
    //gridContainer.style.gridTemplateColumns = '1fr 1fr 1fr'

    gridContainer.style.height = '90%'
    gridContainer.style.width = '90%'

    gridContainer.style.border = '3px solid black'
    gridContainer.style.overflowY = 'scroll'
    gridContainer.style.gap = '200px'
    gridContainer.style.marginTop = '30px'

    gridContainer.style.alignItems = 'center'
    gridContainer.style.justifyContent = 'center'
    gridContainer.style.padding = '20px'

    gridContainer.style.maxHeight = '100%'

    buildMenu(gridContainer)
    contentHolder.appendChild(gridContainer)

    contentHolder.style.display = 'flex'
    contentHolder.style.alignItems = 'center'
    contentHolder.style.justifyContent = 'center'

}

function buildMenu(container){
    let row = 0
    let col = 0
    for(let i = 0;i < 14; i++){
        const menuItem = document.createElement('div')
        
        const menuImg = document.createElement('div')
        const menuText = document.createElement('div')
        menuText.appendChild(document.createTextNode('Placeholder'))

        buildMenuImg(menuImg)

        menuItem.appendChild(menuImg)
        menuItem.appendChild(menuText)
        /*
        if(i === 0){
            menuItem.style.gridArea = '1 / 1 / 2 / 2'
        }
        else if(i === 1){
            menuItem.style.gridArea = '1 / 2 / 2 / 3'
        }
        else if(i === 2){
            menuItem.style.gridArea = '1 / 3 / 2 / 4'
        }
        else if(i === 3){
            menuItem.style.gridArea = '2 / 1 / 3 / 2'
        }
        else if(i === 4){
            menuItem.style.gridArea = '2 / 2 / 3 / 3'
        }
        else if(i === 5){
            menuItem.style.gridArea = '2 / 3 / 3 / 4'
        }
        */
        
        container.appendChild(menuItem)
    }
    
    


}


function buildMenuImg(item){
    item.style.height = '150px'
    item.style.width = '150px'
    item.style.border = '5px solid black'
    item.style.marginTOp = '30px'
}