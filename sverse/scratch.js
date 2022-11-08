//Welcome guys! The original code here is made by Kaylerr. Thanks for checking this out, and make any changes necessary.
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);

class SVerseSDK {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "SVerseSDK",
            "name": "SVerse",
            "blocks": [
                        {
                            "opcode": "authenticateUser",
                            "blockType": "reporter",
                            "text": "Log In With SVerse with Username [username] and Password [password]",
                            "arguments": {
                                "username": {
                                    "type": "string",
                                    "defaultValue": "RelicStar"
                                },
                                 "password": {
                                    "type": "string",
                                    "defaultValue": "Is Awesome"
                                },
                            }
                        },
                ],
        };
    }
    
    authenticateUser({username, password}) {
    const url = new URL('https://cube-enix.github.io/sverse/Server.html?username=' + username + '&password=' + password);
    const params1 = new URLSearchParams(url.search);
        
    //Next, let's check if we have a "username" in our url.
    if(params1.has('username')) {

        //Seems like we do! If we check for the "password" in our url?
        if(params1.has('password')) {

            //okay, let's try to use them here.
            
            const user = params1.get('username');
            const pass = params1.get('password');

            //add authentication shit here
            return "username: " + params1.get('username')

        } else {
            //Nope! Let's return an error to the console.
        return "Failed to find a Password in the URL."
        } 

    } else {
        //Nope! Let's return an error to the console.
        return "Failed to find a Username in the URL."
    }
}
}

Scratch.extensions.register(new SVerseSDK())
