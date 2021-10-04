

declare module "node-fetch"
import fetch from "node-fetch";
// import "./node-fetch";


function api(url:string): Promise<any> {
    return fetch(url)
        .then(response => {
                    if (!response.ok) {
                    throw new Error(response.statusText)
                    }
                    return response.json()
                })
        .then(data => {
            return data
          })                  
}

api('https://aws.random.cat/meow')








