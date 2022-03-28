class SingleGamepad {
    constructor(index) {
        this.id = null
        this.index = index
        this.currentMSecs = null
    }
    
    matches(gamepad) {
        return gamepad && this.index != null && gamepad.id == this.id && 
            gamepad.buttons.length == this.currentButtons.length && gamepad.axes.length == this.currentAxes.length
    }
    
    getGamepad(i) {
        var gamepads = navigator.getGamepads()
        if (gamepads == null || gamepads.length <= i || ! gamepads[i]) 
            return null
        return gamepads[i]
    }
    
    update(currentMSecs) {
        if (this.currentMSecs == currentMSecs)
            return
        
        var gamepad = this.getGamepad(this.index)
        
        if (gamepad == null) {
            this.id = null
            this.currentButtons = []
            this.previousButtons = []
            this.currentAxes = []
            this.previousAxes = []
            return
        }
        
        this.currentMSecs = currentMSecs
        
        if (!this.matches(gamepad)) {
            this.id = gamepad.id
        
            this.previousButtons = []
            for (var i=0;i<gamepad.buttons.length;i++) {
                this.previousButtons.push(false)
            }
            
            this.previousAxes = []
            for (var i=0;i<gamepad.axes.length;i++) {
                this.previousAxes.push(0)
            }
        }
        else {
            this.previousButtons = this.currentButtons
            this.previousAxes = this.previousAxes
        }
        
        this.currentButtons = []
        for (var i=0;i<gamepad.buttons.length;i++) {
            this.currentButtons.push(gamepad.buttons[i].pressed)
        }
        
        this.currentAxes = []
        for (var i=0;i<gamepad.axes.length;i++) {
            this.currentAxes.push(gamepad.axes[i])
        }
        console.log(this.currentButtons)
    }
    
    pressedReleased(currentMSecs,i,pr) {
        this.update(currentMSecs)
        
        if (i < this.currentButtons.length) {
            return this.currentButtons[i] != this.previousButtons[i] && this.currentButtons[i] == pr
        }
        
        return false
    }
    
    changedAxis(currentMSecs,i) {
        this.update(currentMSecs)
        
        if (i < this.currentAxes.length)
            return this.currentAxes[i] != this.previousAxes[i]
        
        return false
    }
    
    getButton(currentMSecs,i) {
        this.update(currentMSecs)
        console.log(""+currentMSecs+" "+i+this.currentButtons)
        if (i < this.currentButtons.length) {
            return this.currentButtons[i]
        }
        else {
            return false
        }
    }
    
    getAxis(currentMSecs,i) {
        this.update(currentMSecs)
        if (i < this.currentAxes.length)
            return this.currentAxes[i]
        else
            return false
    }
}

class ScratchGamepad {
    constructor(runtime) {
        this.id = null
        this.runtime = runtime
        this.gamepads = []
        for (var i=0;i<4;i++)
            this.gamepads.push(new SingleGamepad(i))
    }
    
    getInfo() {
        return {
            "id": "SNGamepad",
            "name": "SNext Gamepad",
            "blockIconURI": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 224.245 224.245' style='enable-background:new 0 0 224.245 224.245;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M176,68.122c6.617,0,12-5.383,12-12s-5.383-12-12-12s-12,5.383-12,12S169.383,68.122,176,68.122z M176,52.122 c2.205,0,4,1.793,4,4c0,2.207-1.795,4-4,4s-4-1.793-4-4C172,53.915,173.795,52.122,176,52.122z'/%3E%3Cpath d='M176,84.122c-6.617,0-12,5.383-12,12s5.383,12,12,12s12-5.383,12-12S182.617,84.122,176,84.122z M176,100.122 c-2.205,0-4-1.793-4-4c0-2.207,1.795-4,4-4s4,1.793,4,4C180,98.329,178.205,100.122,176,100.122z'/%3E%3Cpath d='M152,64.122c-6.617,0-12,5.383-12,12s5.383,12,12,12s12-5.383,12-12S158.617,64.122,152,64.122z M152,80.122 c-2.205,0-4-1.793-4-4c0-2.207,1.795-4,4-4s4,1.793,4,4C156,78.329,154.205,80.122,152,80.122z'/%3E%3Cpath d='M188,76.122c0,6.618,5.383,12,12,12s12-5.383,12-12s-5.383-12-12-12S188,69.505,188,76.122z M204,76.122 c0,2.207-1.795,4-4,4s-4-1.793-4-4c0-2.207,1.795-4,4-4S204,73.915,204,76.122z'/%3E%3Cpath d='M223.876,78.56c0.041-0.813,0.124-1.615,0.124-2.438c0-26.469-21.533-48-48-48c-12.147,0-23.222,4.572-31.685,12.038 c-0.066-0.003-0.122-0.038-0.19-0.038H80c-0.104,0-0.19,0.051-0.292,0.059C71.241,32.703,60.158,28.122,48,28.122 c-26.467,0-48,21.531-48,48c0,1.057,0.091,2.091,0.159,3.131c-0.086,0.375-0.178,0.751-0.149,1.154l6.574,92.043 c0.932,13.051,12.336,23.672,25.42,23.672h3.992c13.012,0,25.442-9.945,28.299-22.641l8.985-39.933 c3.66,4.01,8.877,6.574,14.72,6.574c9.658,0,17.737-6.883,19.596-16h8.808c1.859,9.117,9.938,16,19.596,16 c5.953,0,11.247-2.667,14.914-6.808l9.037,40.168c2.858,12.695,15.288,22.64,28.299,22.64h3.992 c13.082,0,24.486-10.617,25.42-23.672l6.574-92.043C224.284,79.744,224.124,79.131,223.876,78.56z M68.031,120.429L56.49,171.724 c-2,8.89-11.385,16.398-20.494,16.398h-3.992c-8.976,0-16.801-7.285-17.44-16.242l-4.773-66.824 c8.773,11.556,22.613,19.066,38.208,19.066c7.16,0,13.935-1.62,20.045-4.443C68.042,119.83,68,119.97,68,120.122 C68,120.227,68.029,120.324,68.031,120.429z M72.433,107.722c-6.766,5.244-15.229,8.4-24.432,8.4c-22.057,0-40-17.945-40-40 s17.942-40,39.999-40s40,17.945,40,40c0,10.502-4.1,20.042-10.743,27.186C75.403,104.497,73.803,106.006,72.433,107.722z M88,132.122c-6.302,0-11.428-4.898-11.907-11.079l1.544-6.861c0.12-0.208,0.213-0.434,0.345-0.634 c1.523-1.222,2.969-2.53,4.332-3.926c1.7-0.926,3.618-1.499,5.687-1.499c6.617,0,12,5.383,12,12S94.617,132.122,88,132.122z M116.404,116.122h-8.808c-1.765-8.659-9.167-15.21-18.177-15.857C93.575,93.163,96,84.93,96,76.122 c0-10.454-3.397-20.109-9.092-28h50.185c-5.696,7.891-9.093,17.546-9.093,28c0,8.807,2.425,17.041,6.582,24.143 C125.571,100.912,118.17,107.464,116.404,116.122z M136,132.122c-6.617,0-12-5.383-12-12s5.383-12,12-12 c2.068,0,3.986,0.574,5.686,1.498c1.362,1.396,2.809,2.704,4.332,3.926c0.293,0.444,0.532,0.924,0.765,1.407l1.2,5.334 C147.892,126.827,142.56,132.122,136,132.122z M209.682,171.881c-0.641,8.956-8.465,16.241-17.44,16.241h-3.992 c-9.109,0-18.494-7.508-20.494-16.398l-11.698-51.995c6.083,2.793,12.823,4.394,19.943,4.394c15.758,0,29.724-7.666,38.48-19.429 L209.682,171.881z M176,116.122c-9.204,0-17.666-3.156-24.432-8.4c-1.37-1.716-2.97-3.225-4.824-4.414 C140.1,96.164,136,86.624,136,76.122c0-22.055,17.943-40,40-40s40,17.946,40,40C216,98.177,198.057,116.122,176,116.122z'/%3E%3Cpath d='M72,64.122H60v-12c0-2.211-1.791-4-4-4H40c-2.209,0-4,1.789-4,4v12H24c-2.209,0-4,1.789-4,4v16c0,2.211,1.791,4,4,4h12 v12c0,2.211,1.791,4,4,4h16c2.209,0,4-1.789,4-4v-12h12c2.209,0,4-1.789,4-4v-16C76,65.911,74.209,64.122,72,64.122z M36,80.122 h-8v-8h8V80.122z M52,96.122h-8v-8h8V96.122z M52,80.122h-8v-8h8V80.122z M52,64.122h-8v-8h8V64.122z M68,80.122h-8v-8h8V80.122z '/%3E%3Crect x='104' y='60.122' width='16' height='8'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E",
            "menuIconURI": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 224.245 224.245' style='enable-background:new 0 0 224.245 224.245;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M176,68.122c6.617,0,12-5.383,12-12s-5.383-12-12-12s-12,5.383-12,12S169.383,68.122,176,68.122z M176,52.122 c2.205,0,4,1.793,4,4c0,2.207-1.795,4-4,4s-4-1.793-4-4C172,53.915,173.795,52.122,176,52.122z'/%3E%3Cpath d='M176,84.122c-6.617,0-12,5.383-12,12s5.383,12,12,12s12-5.383,12-12S182.617,84.122,176,84.122z M176,100.122 c-2.205,0-4-1.793-4-4c0-2.207,1.795-4,4-4s4,1.793,4,4C180,98.329,178.205,100.122,176,100.122z'/%3E%3Cpath d='M152,64.122c-6.617,0-12,5.383-12,12s5.383,12,12,12s12-5.383,12-12S158.617,64.122,152,64.122z M152,80.122 c-2.205,0-4-1.793-4-4c0-2.207,1.795-4,4-4s4,1.793,4,4C156,78.329,154.205,80.122,152,80.122z'/%3E%3Cpath d='M188,76.122c0,6.618,5.383,12,12,12s12-5.383,12-12s-5.383-12-12-12S188,69.505,188,76.122z M204,76.122 c0,2.207-1.795,4-4,4s-4-1.793-4-4c0-2.207,1.795-4,4-4S204,73.915,204,76.122z'/%3E%3Cpath d='M223.876,78.56c0.041-0.813,0.124-1.615,0.124-2.438c0-26.469-21.533-48-48-48c-12.147,0-23.222,4.572-31.685,12.038 c-0.066-0.003-0.122-0.038-0.19-0.038H80c-0.104,0-0.19,0.051-0.292,0.059C71.241,32.703,60.158,28.122,48,28.122 c-26.467,0-48,21.531-48,48c0,1.057,0.091,2.091,0.159,3.131c-0.086,0.375-0.178,0.751-0.149,1.154l6.574,92.043 c0.932,13.051,12.336,23.672,25.42,23.672h3.992c13.012,0,25.442-9.945,28.299-22.641l8.985-39.933 c3.66,4.01,8.877,6.574,14.72,6.574c9.658,0,17.737-6.883,19.596-16h8.808c1.859,9.117,9.938,16,19.596,16 c5.953,0,11.247-2.667,14.914-6.808l9.037,40.168c2.858,12.695,15.288,22.64,28.299,22.64h3.992 c13.082,0,24.486-10.617,25.42-23.672l6.574-92.043C224.284,79.744,224.124,79.131,223.876,78.56z M68.031,120.429L56.49,171.724 c-2,8.89-11.385,16.398-20.494,16.398h-3.992c-8.976,0-16.801-7.285-17.44-16.242l-4.773-66.824 c8.773,11.556,22.613,19.066,38.208,19.066c7.16,0,13.935-1.62,20.045-4.443C68.042,119.83,68,119.97,68,120.122 C68,120.227,68.029,120.324,68.031,120.429z M72.433,107.722c-6.766,5.244-15.229,8.4-24.432,8.4c-22.057,0-40-17.945-40-40 s17.942-40,39.999-40s40,17.945,40,40c0,10.502-4.1,20.042-10.743,27.186C75.403,104.497,73.803,106.006,72.433,107.722z M88,132.122c-6.302,0-11.428-4.898-11.907-11.079l1.544-6.861c0.12-0.208,0.213-0.434,0.345-0.634 c1.523-1.222,2.969-2.53,4.332-3.926c1.7-0.926,3.618-1.499,5.687-1.499c6.617,0,12,5.383,12,12S94.617,132.122,88,132.122z M116.404,116.122h-8.808c-1.765-8.659-9.167-15.21-18.177-15.857C93.575,93.163,96,84.93,96,76.122 c0-10.454-3.397-20.109-9.092-28h50.185c-5.696,7.891-9.093,17.546-9.093,28c0,8.807,2.425,17.041,6.582,24.143 C125.571,100.912,118.17,107.464,116.404,116.122z M136,132.122c-6.617,0-12-5.383-12-12s5.383-12,12-12 c2.068,0,3.986,0.574,5.686,1.498c1.362,1.396,2.809,2.704,4.332,3.926c0.293,0.444,0.532,0.924,0.765,1.407l1.2,5.334 C147.892,126.827,142.56,132.122,136,132.122z M209.682,171.881c-0.641,8.956-8.465,16.241-17.44,16.241h-3.992 c-9.109,0-18.494-7.508-20.494-16.398l-11.698-51.995c6.083,2.793,12.823,4.394,19.943,4.394c15.758,0,29.724-7.666,38.48-19.429 L209.682,171.881z M176,116.122c-9.204,0-17.666-3.156-24.432-8.4c-1.37-1.716-2.97-3.225-4.824-4.414 C140.1,96.164,136,86.624,136,76.122c0-22.055,17.943-40,40-40s40,17.946,40,40C216,98.177,198.057,116.122,176,116.122z'/%3E%3Cpath d='M72,64.122H60v-12c0-2.211-1.791-4-4-4H40c-2.209,0-4,1.789-4,4v12H24c-2.209,0-4,1.789-4,4v16c0,2.211,1.791,4,4,4h12 v12c0,2.211,1.791,4,4,4h16c2.209,0,4-1.789,4-4v-12h12c2.209,0,4-1.789,4-4v-16C76,65.911,74.209,64.122,72,64.122z M36,80.122 h-8v-8h8V80.122z M52,96.122h-8v-8h8V96.122z M52,80.122h-8v-8h8V80.122z M52,64.122h-8v-8h8V64.122z M68,80.122h-8v-8h8V80.122z '/%3E%3Crect x='104' y='60.122' width='16' height='8'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E",
            "blocks": [{
                        "opcode": "buttonPressedReleased",
                        "blockType": "hat",
                        "text": "button number [b] [pr] of gamepad [i]",
                        "arguments": {
                            "b": {
                                "type": "number",
                                "defaultValue": "1"
                            },
                            "pr": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "pressReleaseMenu"
                            },
                            "i": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "padMenu"
                            },
                        },
                    },
                    {
                        "opcode": "buttonDown",
                        "blockType": "Boolean",
                        "text": "button number [b] of gamepad [i] is down",
                        "arguments": {
                            "b": {
                                "type": "number",
                                "defaultValue": "1"
                            },
                            "i": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "padMenu"
                            },
                        },                    
                    },
                    {
                        "opcode": "axisMoved",
                        "blockType": "hat",
                        "text": "anolog axis [b] of gamepad [i] moved",
                        "arguments": {
                            "b": {
                                "type": "number",
                                "defaultValue": "1"
                            },
                            "i": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "padMenu"
                            },
                        },
                    },
                    {
                        "opcode": "axisValue",
                        "blockType": "reporter",
                        "text": "axis [b] of pad [i] value",
                        "arguments": {
                            "b": {
                                "type": "number",
                                "defaultValue": "1"
                            },
                            "i": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "padMenu"
                            },
                        },                    
                    },
                  
            ],
            "menus": {
                "pressReleaseMenu": [{text:"press",value:1}, {text:"release",value:0}],
                "padMenu": {
                            acceptReporters: true, 
                            items: [{text:"1",value:1}, {text:"2",value:2}, {text:"3",value:3}, {text:"4",value:4}],
                }
            }            
        };
    }
    
    buttonPressedReleased({b,pr,i}) {
        return this.gamepads[i-1].pressedReleased(this.runtime.currentMSecs,b-1,pr)
    }

    axisMoved({b,i}) {
        return this.gamepads[i-1].changedAxis(this.runtime.currentMSecs,b-1)
    }
    
    axisValue({b,i}) {
        return this.gamepads[i-1].getAxis(this.runtime.currentMSecs,b-1)
    }
    
    buttonDown({b,i}) {
        return this.gamepads[i-1].getButton(this.runtime.currentMSecs,b-1)
    }
}

(function() {
    var extensionInstance = new ScratchGamepad(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
