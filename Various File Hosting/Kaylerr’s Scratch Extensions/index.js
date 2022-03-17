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
        return fetch(url).then(response => response.text)
        
        


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

(function() {
    var extensionClass = DevTools;
    if (typeof window === "undefined" || !window.vm) {
        Scratch.extensions.register(new extensionClass());
        console.log("Sandboxed mode detected, performance may suffer because of the extension being sandboxed.");
    } else {
        var extensionInstance = new extensionClass(window.vm.extensionManager.runtime);
        var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance);
        window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName);
        console.log("Unsandboxed mode detected.");
    };
})()