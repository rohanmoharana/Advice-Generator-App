const diceBtn = document.querySelector(".dice-btn");
const boxContainer = document.querySelector(".container-box");


function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(function (respone) {

            if(!respone.ok){
                throw new Error("Something gone wrong. Try again!")
            }
            return respone.json();
        })
        .then(function (data) {
            // console.log(data);
            // console.log(Object.values(data)[0])
            // console.log(Object.values(data)[0].id)
            // console.log(Object.values(data)[0].advice)

            const html = `<p class="id">Advice #${Object.values(data)[0].id}</p>
                        <p class="text">"${Object.values(data)[0].advice}"</p>`
            // console.log(html);
            boxContainer.innerHTML = html;
        })
        .catch(function(dataError){
            console.log(dataError.message)
        })
}

getAdvice();

diceBtn.addEventListener("click", function () {
    getAdvice();
})