function fetchData(){
    fetch('https://mock-api.driven.com.br/api/v4/shirts-api/shirts')
    .then(response => {
        if(!response.ok){
            throw Error('Error')
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
        const html = data
        .map(user => {
            return `<div class="user">
            <div class="cardApi">Id: ${user.id}</div>
            <div class="cardApi"><img class="imgApi" src="${user.image}" /></div>
            <div class="cardApi">Owner: ${user.owner} </div>
            <div class="cardApi">Model: ${user.model}</div>
            <div class="cardApi">Neck: ${user.neck}</div>
            <div class="cardApi">Material: ${user.material}</div>
            </div>`
        })
        .join('')
        console.log(html)
        document.querySelector('#app').insertAdjacentHTML('afterbegin', html)
    })
    .catch(error => {
        console.log(error)
    })
}

fetchData()