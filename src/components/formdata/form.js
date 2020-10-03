
export function req () {
    const getData = (idForm, selectorButton) => {
        const form = document.getElementById(idForm),
                buttonSubmit = document.querySelector(selectorButton);
                console.log(form, buttonSubmit)
              
            buttonSubmit.addEventListener('submit', function (event) {
                event.preventDefault();
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
