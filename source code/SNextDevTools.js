
Raw Blame
  
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
                            "text": "get player U profile",
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
    
    
    fetchU() {
        return "This feature does nothing currently, due to callbacks needing to be developed."
    }
    
    saveToConsole({data,name}) {
        return "Saved " + data + "to console with the '" + name + "' distinguishing key."  
    }
}

Scratch.extensions.register(new DevTools())
