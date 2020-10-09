
export const changeAvatar = () => {
    function bindAvatar (avatarSelector) {
        const avatar = document.querySelectorAll(avatarSelector);
             
        avatar.forEach( item => {
            item.addEventListener('mouseover', () => {
                item.classList.add('big-avatar');
            });
            item.addEventListener('mouseout', () => {
                item.classList.remove('big-avatar')
            });
        });
            
    };
    bindAvatar ('[data-avatar]');
};

// в каждом модуле в классах реализовать выход из анимации