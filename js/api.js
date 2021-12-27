function fetchData() {
  fetch("https://mock-api.driven.com.br/api/v4/shirts-api/shirts")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const html = data
        .map((user) => {
          return `<div class="user">
            <div class="cardApi">Id: ${user.id}</div>
            <div class="cardApi"><img class="imgApi" src="${user.image}" /></div>
            <div class="cardApi">Owner: ${user.owner} </div>
            <div class="cardApi">Model: ${user.model}</div>
            <div class="cardApi">Neck: ${user.neck}</div>
            <div class="cardApi">Material: ${user.material}</div>
            </div>`;
        })
        .join("");
      console.log(html);
      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();

function postData() {
  /* fetch('https://example.com/', { method: 'CONNECT' }) */

  const bodyData = {
    
        "model": "t-shirt",
        "neck": "v-neck",
        "material": "silk",
        "image": 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
        "owner": 'feito',
        "author": 'harrison'
  }

  fetch("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", {
    method: "POST",

    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

    body: JSON.stringify(  bodyData ),
    //body:      {a: 1, b: 'Textual content'}      
  })
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })

    .catch((error) => {
      console.log(error);
    });
}

postData();


(async () => {
    const rawResponse = await fetch('https://httpbin.org/post', {
      method: 'POST',
      
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({a: 1, b: 'Textual content'})
    });
    const content = await rawResponse.json();
  
    console.log(content);
  })();