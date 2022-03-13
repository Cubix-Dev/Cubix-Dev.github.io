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
                            "text": "get [username]'s U-sername",
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
                            }
                        },
                ],
        };
    }

    FetchDLCKey({publicCode, key}) {

        var url = "http://dreamlo.com/pc/" + publicCode + "/redeem/" + key
        var thing;
        fetch(url).then(response => thing(response.text))
        return thing
        
        


    }
    
    fetchU({username}) {

                return fetch("https://snextapi.bluefalconhd.repl.co/users/$").then(response => response.text())
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
