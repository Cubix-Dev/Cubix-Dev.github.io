const formatMessage = require('format-message');
const Swal = require('sweetalert2');
const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const Cast = require('../../util/cast');


class DevTools {
    constructor() {
    }
    
// hosted link: https://cube-enix.github.io/Various%20File%20Hosting/Kiwi/index.js


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
                            "opcode": "alertUser",
                       text: formatMessage({
                        id: 'sn.blocks.sweetalert',
                        default: 'Alert Message [title] with description [desc] type: [type]',
                        description: 'Block that returns the last key that was pressed'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        title: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Welcome Back!'
                        },
                        desc: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Hello testSubject!'
                        },
                        types: {
                            type: ArgumentType.STRING,
                            defaultValue: 'success'
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



    loadAd()
    {
        open('https://www.codexworld.com', '_blank')
    }

    alertUser({url})
    {
                Swal.fire({
            title: args.title,
            text: args.desc,
            icon: args.types,
            confirmButtonText: 'Cool'
          })
    }

    LoadPlayerData({dataName})
    {
        
        //const xhttp = new XMLHttpRequest();
        //xhttp.open('POST', "https://snext-eservice-database.simple21.repl.co/users/snext/" + player);
        //xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        //xhttp.send();
        //xhttp.onreadystatechange = function() {
          //  if (xhttp.readyState == xhttp.DONE) {
            //    return xhttp.responseText
            //}
        //}

        // xhttp.send(JSON.stringify({
        // "username": username,
        // "password": password
    // }));
    }

    fetchpfp({username})
    {
        //blue needs to fix his f*cking api
    }
    

    FetchDLCKey({key}) {

        
        //we can check this against the .txt imma create

        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                return xhr.responseText
            }
        }
        xhr.open('POST', 'https://snext-eservice-database.simple21.repl.co/');
        xhr.send();
        // ^^ bad code
    }

    
    fetchU({username}) {

            if (XMLHttpRequest)
            {// code for IE7+, Firefox, Chrome, Opera, Safari
                var xmlhttp = new XMLHttpRequest();
            }
            else
            {// code for IE6, IE5
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange=function()
            {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
                {
                    return xmlhttp.responseText;
                }
            }
            xmlhttp.open("POST", "https://snext-eservice-database.simple21.repl.co/users/snext/" + username, false);
            xmlhttp.send();    
        }
        // return "This feature is currently being developed.";
    
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
