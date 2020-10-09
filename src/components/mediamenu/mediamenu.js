
export const menu = () => {
    const bindMenu = (selectorGamburger, selectorMenu) => {
        let gamburger = document.getElementById(selectorGamburger),
            mediamenu = document.querySelector(selectorMenu);
      
        const openMenu = () => {
            gamburger.classList.toggle('rotate-gamburger')
            mediamenu.classList.toggle('open-media-menu');
        };

        gamburger.addEventListener('click',openMenu)
       
    };
    
    bindMenu('menu-toggle', '.toggle-list');
};