//Welcome guys! The original code here is made by Kaylerr. Thanks for checking this out, and make any changes necessary.

/*
wait, how the fuck do i get the string?

// Retrieve params via url.search, passed into ctor
const url = new URL('https://example.com?foo=1&bar=2');
const params1 = new URLSearchParams(url.search);

// Get the URLSearchParams object directly from an URL object
const params1a = url.searchParams

// Pass in a string literal
const params2 = new URLSearchParams("foo=1&bar=2");
const params2a = new URLSearchParams("?foo=1&bar=2");

// Pass in a sequence of pairs
const params3 = new URLSearchParams([["foo", "1"], ["bar", "2"]]);

// Pass in a record
const params4 = new URLSearchParams({"foo": "1", "bar": "2"});


*/
//Okay, so first off i'm trying to create a ParameterString, by grabbing the URL first and the thing below. Then, what i do is create a new URLSearchParameters Object.

const url = new URL('https://cube-enix.github.io/sverse/Server.html?username=Kaylerr&password=isCool');
const params1 = new URLSearchParams(url.search);

object.onload = CheckCredentials();{UserManager};

function CheckCredentials() {
    //Next, let's check if we have a "username" in our url.
    if(searchParams.has(username)) {

        //Seems like we do! If we check for the "password" in our url?
        if(searchParams.has(password)) {

            //okay, let's try to use them here.
            console.log("We have both! Next: Authentication!");

        } else {
            //Nope! Let's return an error to the console.
            console.log("hmm... do we have a username? Doesn't look like it!");
        } 

    } else {
        //Nope! Let's return an error to the console.
        console.log("hmm... do we have a username? Doesn't look like it!");
    }
}