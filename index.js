global.fetch = require("node-fetch");
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const datajson = './ruc.json'

// código a correr en el proyecto de sunat:
// composer update
// php -S 0.0.0.0:8080 -t public

async function getData() {
    let url = 'http://localhost:8080/api/v1/ruc/20494959195?token=abcxyz';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function getData2() {
    let url = 'https://api.sunat.cloud/ruc/20494959195';
    const method = {
        method: "GET", 
        credentials: 'omit',
    };
    try {
        let res = await fetch(url, method);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

const getJson = (datajson) => {
    fetch(datajson)
      .then(response => response.json())
      .then(total => {
        console.log(Object.entries(total.data))
        return dataLol = Object.entries(total.data);
      });
};

getJson(datajson)
// getData().then(res => console.log(res))
// getData2().then(res => console.log(res))

