
export const changeAvatar = () => {
    function bindAvatar (avatarSelector) {
        const avatar = document.querySelectorAll(avatarSelector);
             

        avatar.forEach( item => {
            item.addEventListener('mousemove', () => {
                item.classList.add('big-avatar');
            });
        });
            

    };
    bindAvatar ('[data-avatar]');
};
