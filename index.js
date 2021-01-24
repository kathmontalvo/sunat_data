global.fetch = require("node-fetch");
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const datajson = 'https://raw.githubusercontent.com/kathmontalvo/sunat_data/master/ruc.json'

// código a correr en el proyecto de sunat:
// composer update
// php -S 0.0.0.0:8080 -t public 20494959195

async function getData(ruc) {
    let url = `http://localhost:8080/api/v1/ruc/${ruc}?token=abcxyz`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function getData2(ruc) {
    let url = `https://api.sunat.cloud/ruc/${ruc}`;
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
        const allData = total.data;
        const newData = allData.map(el => {
            return el['RUC/DNI']
        })
        newData.forEach((ruc, i) => {
            // console.log(ruc, i);
            getData(ruc).then(res => console.log(res))
            // getData2(ruc).then(res => console.log(res))
        });
      });
};

getJson(datajson)
// getData().then(res => console.log(res))
// getData2().then(res => console.log(res))

