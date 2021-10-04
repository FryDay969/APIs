import fetch from "node-fetch";


for(let i=0; i<10; i++){
    fetch("https://aws.random.cat/meow")
        .then(responce =>{
            if(responce.status!=200){
                console.log(null)
            }
            return responce.json();
        })
        .then(result => {
            console.log(result)
        })
}