

export const modal = () => {
        function bindModal ( elementSelector , idSelector , imgSelector , closeSelector) {
            let items = document.querySelectorAll(elementSelector),
                modalWindow = document.getElementById(idSelector),
                img = document.querySelector(imgSelector),
                button = document.querySelector(closeSelector),
                src;
                
                    items.forEach( item => {
                    item.addEventListener('click', (event) => {
                        src = event.target.attributes.src.nodeValue;
                        modalWindow.classList.add('open');
                        button.style = `display: block`;
                        img.setAttribute('src', src);
                        img.style =  `display: block`;
                        img.classList.add('popup');
                        img.height = 400 ;
                        img.width = 600 ;
                    });
                });
                    button.addEventListener('click', () => {
                        img.src = "";
                        img.style =  `display: none`; 
                        modalWindow.classList.remove('open');
                        button.style = `display: none`;
                      
                        console.log(img);
                        console.log(modalWindow);
                        console.log(button);
                    });
                    modalWindow.addEventListener('click', () => {
                        img.src = "";
                        img.style =  `display: none`; 
                        modalWindow.classList.remove('open');
                        button.style = `display: none`;
                       
                    });
        
    };

    bindModal( '[data-popup]' , 'modal' , '[data-img]' , '.close');
};


     // sizes="(min-width: 40em) 100vw" ; sizes="(max-width: 30em) 100vw, (max-width: 50em) 50vw, calc(33vw - 100px)")
                    //img.sizes = `(max-width: 1240px) 600px`;
                    //item.attributes.src.nodeValue;
                    //console.log('src',src ,'item', item.attributes.src.nodeValue);
                    //item.classList.add('popup');
                    //modal.classList.add('open');