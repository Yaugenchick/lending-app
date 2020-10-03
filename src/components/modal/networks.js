import  downArrow  from '../../image/arrowDown.png';
import twitter from '../../networks/twitter.png';
import Github from '../../networks/Github.png';
import facebook from '../../networks/facebook.png';
import Instagram from '../../networks/Instagram.png';
import dribbble from '../../networks/dribbble.png';



const buttonNetworks = () => {
    const button = document.createElement('button'),
            img = document.createElement('img');
            button.classList.add('networks');
            img.src = downArrow;
            document.body.appendChild(button).appendChild(img);
};
const networksHtml = () => {
    return `<div class="icons">
                <button class="close-icons">&times;</button>
                <ul>
                    <li><a href="#"><img src=${dribbble} height="30" width="30" alt=""></a></li>
                    <li><a href="#"><img src=${twitter} height="30" width="30" alt=""></a></li>
                    <li><a href="#"><img src=${Github} height="30" width="30" alt=""></a></li>
                    <li><a href="#"><img src=${facebook} height="30" width="30" alt=""></a></li>
                    <li><a href="#"><img src=${Instagram} height="30" width="30" alt=""></a></li>
                </ul>
            </div>`
};

const addNetworksToDOM = () => {
    const button = document.querySelector('.networks');
    
    if(!button) return;
    let div = document.createElement('div');
        div.classList.add('div')
        div.innerHTML = networksHtml();
        document.body.appendChild(div);
};


export const createNetworks = () => {
   
    buttonNetworks ()
    let networks = document.querySelector('.networks');
    networks.addEventListener('click', function () {
        addNetworksToDOM();
    
    const destroy = () => {
        document.querySelector('.div').remove();
        close.remove();
    };
    
    let close = document.querySelector('.close-icons');
    close.addEventListener('click', destroy);
    });
   
};