class DevTools {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "SNextDevTools",
            "name": "SNextDevTools",
            "blocks": [
                        {
                            "opcode": "fetchU",
                            "blockType": "command",
                            "text": "get [username]'s U profile",
                            "arguments": {
                                "username": {
                                    "type": "string",
                                    "defaultValue": 'Kaylerr'
                                },
                            }
                        },

                        {
                            "opcode": "saveToConsole",
                            "blockType": "command",
                            "text": "save [data] to console as [name]",
                            "arguments": {
                                "data": {
                                    "type": "data",
                                    "defaultValue": "6819"
                                },
                                "name": {
                                    "type": "string",
                                    "defaultValue": 'local high score'
                                },
                            }
                        },

                        {
                            "opcode": "FetchDLCKey",
                            "blockType": "command",
                            "text": "FetchDLCKey with Dreamlo Public Code: [publicCode] with key: [key]",
                            "arguments": {
                                "publicCode": {
                                    "type": "string",
                                    "defaultValue": '122b406c8f40bc123c1df420'
                                },
                                "key": {
                                    "type": "string",
                                    "defaultValue": 'NFGN-KBIQ-TGET'
                                },
                            }
                        },
                ],
        };
    }

    FetchDLCKey({publicCode, key}) {
        const httpRequest = new XMLHttpRequest()
        const constructedURL = 'http://dreamlo.com/pc/' + publicCode + "/redeem/" + key
        httpRequest.open("GET", constructedURL, false)
        httpRequest.send()

        httpRequest.onload = function () {
            if (httpRequest.readyState === httpRequest.DONE) {
                if (httpRequest.status === 200) {

                    if(httpRequest.responseText.includes("OK")) {
            
                        return "DLC Redeemed"
            
                    } else if(httpRequest.responseText == "ERROR|Code already used.") {
            
                        return "Code Used Before"
            
                    } else if (httpRequest.responseText == "ERROR|Unknown Code") {
            
                        return "Code Not Recognizable"
                    } 

                } else {

                    return "XMLHttpRequest Error"
                    }

            } else {

                    return "XMLHttpRequest Error"
            }
        }


    }
    
    fetchU({username}) {
        const xhttp = new XMLHttpRequest()
        xhttp.open("GET", 'https://snextapi.bluefalconhd.repl.co/users/$' + username, false)
        xhttp.send()
        

        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === xhttp.DONE) {

                    if(xhttp.responseText.includes("Cannot GET") == true) {
                        //means player cannot be fetched, return this.
                        return "Could not GET player '" + username + "'"
            
                    } else if(xhttp.responseText.includes("Something BLUE needs to tell me") == true) {
            
                        return username
            
                    } else {
                        
                        return "XMLHttpRequest Error"
                    }


                } else {

                    return "XMLHttpRequest Error"
                }
        }






    }
    
    saveToConsole({data,name}) {
      
        var obj = new Object()
        obj.name = name;
        obj.stuff = data;
        var jsonString = JSON.stringify(obj)
        return jsonString

    }
}

Scratch.extensions.register(new DevTools())
