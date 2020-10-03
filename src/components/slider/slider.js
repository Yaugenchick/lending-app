 export const slider = () => {
    const getSlider = (selectorBtn, selectorSliderItem) => {
        const button = document.querySelector(selectorBtn),
            slides = document.querySelectorAll(selectorSliderItem);

            let index = 0;

           const activeSlide = (n) => {
                slides.forEach( slide => {
                    slide.classList.remove('active');
                });
                slides[n].classList.add('active');
           };
           const nextSlide = () => {
               if(index == slides.length - 1) {
                    index = 0;
                    activeSlide(index);
               } else {
                    index ++;
                    activeSlide(index);
               }
           };
           button.addEventListener('click', nextSlide);

    };
    getSlider('.btn-slide','.slide-wraper');
};


