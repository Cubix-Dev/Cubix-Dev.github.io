class DevTools {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "SNextDevTools",
            "name": "SNextDevTools",
            "blocks": [
                        {
                            "opcode": "fetchUName",
                            "blockType": "reporter",
                            "text": "get player's U-sername",
                            "arguments": {
                            }
                        },
                        {
                            "opcode": "fetchUiD",
                            "blockType": "reporter",
                            "text": "get player's U-serID",
                            "arguments": {
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
                ],
        };
    }
    
    
    fetchUName() {

        return "[Cube-Enix] Kaylerr"
        
    }
    fetchUiD() {

        return "0CAB2EA61A4257519FA021939D1388E6"

    }

    saveToConsole({data,name}) {
        return "Saved " + data + "to console with the '" + name + "' distinguishing key."  
    }
}

Scratch.extensions.register(new DevTools())
