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
                            "text": "save [dataValue] to console as [dataName]",
                            "arguments": {
                                "dataValue": {
                                    "type": "data",
                                    "defaultValue": "6819"
                                },
                                "dataName": {
                                    "type": "string",
                                    "defaultValue": 'local high score'
                                },
                            }
                        },

                        {
                            "opcode": "FetchDLCKey",
                            "blockType": "reporter",
                            "text": "Redeem DLC Key: [key] on the Cube-Enix Dreamlo Servers",
                            "arguments": {
                                "key": {
                                    "type": "string",
                                    "defaultValue": 'NFGN-KBIQ-TGET'
                                },
                            }
                        },
                ],
        };
    }
    

    FetchDLCKey({key}) {

        
        //we can check this against the .txt imma create

        function customSplit(str, maxLength){
            if(str.length <= maxLength)
                return str;
            var reg = new RegExp(".{1," + maxLength + "}","g");
            var parts = str.match(reg);
            parts.join('\n');

            for (let index = 0; index < parts.length; index++) {
                if(key == parts[index]) {
                    return "Key accepted.";
                } else {
                    return "finding new key i guess";
                                }
                
            }
        }

        
		fetch("https://cube-enix.github.io/Various%20File%20Hosting/Kaylerr%E2%80%99s%20Scratch%20Extensions/keys.txt").then(response => response.text())
customSplit(response.text, 15);
    }

    
    fetchU({username}) {
        
        return "Nothing.";

    }
    
    saveToConsole({dataValue, dataName}) {
      
        var obj = new Object()
        obj.name = dataName;
        obj.stuff = dataValue;
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