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
                            "blockType": "reporter",
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
                            "blockType": "reporter",
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
                                "Value": {
                                    "type": "data",
                                    "defaultValue": 'upgrade'
                                },
                            }
                        },

                        {
                            "opcode": "",
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
                                "Value": {
                                    "type": "data",
                                    "defaultValue": 'upgrade'
                                },
                            }
                        },
                ],
        };
    }

    FetchDLCKey({publicCode, key}) {
        const httpRequest = new XMLHttpRequest();
        const constructedURL = "http://dreamlo.com/pc/" + publicCode + "/redeem/" + key;
        httpRequest.open("GET", constructedURL, false);
        httpRequest.send();

        xhr.onload = function () {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200) {

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
        };


    }
    
    fetchU({username}) {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://snextapi.bluefalconhd.repl.co/users/$" + username, false);
        xhttp.send();

        xhr.onload = function () {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200) {

                    if(xhttp.responseText.includes("Cannot GET")) {
                        //means player cannot be fetched, return this.
                        return "Could not GET player '" + username + "'"
            
                    } else if(xhttp.responseText.includes("Something BLUE needs to tell me")) {
            
                        return username
            
                    } else {
                        
                        return "XMLHttpRequest Error"
                    }


                } else {

                    return "XMLHttpRequest Error"
                }

            } else {

                    return "XMLHttpRequest Error"
                }
        };

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
