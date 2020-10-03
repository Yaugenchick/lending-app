
export const scrollSite = () => {
    function getReference (elementSelector) {
        let anchors = document.querySelectorAll(elementSelector);
          
            anchors.forEach( (anchor) => {
                anchor.addEventListener('click', function (event) {
                    event.preventDefault();
                    if(anchor.src === 'href="#"') return;
                    const blockID = anchor.getAttribute('href').substr(1);
                      
                    document.getElementById(blockID)
                    .scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                });
            });
          
    }
    getReference('a[href*="#"]');
};