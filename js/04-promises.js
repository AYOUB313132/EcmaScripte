/*EJEMPLO GENERAL*/
/*const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer ) {
      resolve("Conseguido!");
    } else {  
      reject("Error");
    }
  });

  makeServerRequest.then(result => {
    console.log(result);
  });
  
makeServerRequest.catch(error => {
    console.log(error)
  });
*/
/*Cogeremos datos de mi usuario de github*/
function getGithubDataFor(githubProfileName = "") {
    return new Promise((resolve, reject) => {
        const response = fetch(
            `https://api.github.com/users/${githubProfileName}`
        ).then(response => {
            response.json().then(json => {
                const { html_url, twitter_username } = json;
                resolve({ html_url, twitter_username, date: new Date() });
                // De todo el payload solamente retornamos estas props
            });
        });
    });
}

// LLamando la función que retorna una Promesa
getGithubDataFor("elenBilbo").then(obj => {
    console.log({ obj });
    // Mostramos en consola el objeto
});