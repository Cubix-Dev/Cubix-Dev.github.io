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
        return 
    }
    
    saveToConsole({data,name}) {
        var parsed = JSON.parse(data)
        if (name in parsed) {
            var out = parsed[name]
            var t = typeof(out)
            if (t == "string" || t == "number")
                return out
            if (t == "boolean")
                return t ? 1 : 0
            return JSON.stringify(out)
        }
        else {
            return ""
        }
    }
}

Scratch.extensions.register(new DevTools())
