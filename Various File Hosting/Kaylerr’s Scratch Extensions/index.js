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

                       {
                            "opcode": "fetchpfp",
                            "blockType": "reporter",
                            "text": "Get [username]'s U Profile Picture",
                            "arguments": {
                                "username": {
                                    "type": "string",
                                    "defaultValue": 'TeleKiwi'
                                },
                            }
                        },

                       {
                            "opcode": "LoadPlayerData",
                            "blockType": "reporter",
                            "text": "Load the value of the [dataName] data",
                            "arguments": {
                                "dataName": {
                                    "type": "string",
                                    "defaultValue": 'High Score for KaPlam'
                                },
                            }
                        },

                      {
                            "opcode": "openWebpage",
                            "blockType": "command",
                            "text": "Open Webpage with URL: [url]",
                            "arguments": {
                                "url": {
                                    "type": "string",
                                    "defaultValue": 'https://youtube.com/kaylerr'
                                },
                            }
                        },

                      {
                            "opcode": "loadAdvertisement",
                            "blockType": "command",
                            "text": "load 5 second advertisement in new WebPage",
                        
                        },


                ]
        };
    }



    loadAdvertisement()
    {
        window.open("https://www.w3schools.com");
    }

    openWebpage({url})
    {
        window.open(url);
    }

    LoadPlayerData({dataName})
    {
        //blue needs to fix
    }

    fetchpfp({username})
    {
        //blue needs to fix his f*cking api
    }
    

    FetchDLCKey({key}) {

        
        //we can check this against the .txt imma create

        
		//var obj = fetch("https://cube-enix.github.io/Various%20File%20Hosting/Kaylerr%E2%80%99s%20Scratch%20Extensions/keys.txt").then(response => response.text());
        return "This feature is currently being developed.";
        // ^^ bad code
    }

    
    fetchU({username}) {
        
        return "This feature is currently being developed.";

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
