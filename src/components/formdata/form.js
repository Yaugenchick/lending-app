
export function req () {
    const getData = (idForm, selectorButton) => {
        const form = document.getElementById(idForm),
                buttonSubmit = document.querySelector(selectorButton);
                console.log(form, buttonSubmit)
                /*let formData = new FormData(form);
                for(key of formData.entries()) {
                    console.log(key);
                }*/
            buttonSubmit.addEventListener('submit', function (event) {
                event.preventDefault();
               console.log(formData);
                let formData = new FormData(form);
                let json = JSON.stringify(formData)
                let response = fetch('http://localhost:3000/', {
                    "method": "POST",
                    "headers": {
                        "Content-type": "application/json ; charset=utf-8"
                    },
                    "body": json
                });
            });
    
    };
    getData('form', '.btn-form-send');
};
