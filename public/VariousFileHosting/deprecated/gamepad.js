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

    vibrate(d, s, w) {
        var gamepad = this.getGamepad(this.index)
        if (gamepad) {
            gamepad.vibrationActuator.playEffect('dual-rumble', {
                startDelay: 10,
                duration: d,
                weakMagnitude: w,
                strongMagnitude: s,
            });
        }
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
            "id": "Gamepad",
            "name": "Gamepad",
            "blockIconURI": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHdpZHRoPSIxMDBweCIKICAgaGVpZ2h0PSIxMDBweCIKICAgdmlld0JveD0iMCAwIDEwMCAxMDAiCiAgIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHNvZGlwb2RpOmRvY25hbWU9IkNvbnRyb2xsZXIuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMiAoZTg2Yzg3MDgsIDIwMjEtMDEtMTUpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhODQwIj48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzODM4IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iNjQwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI0ODAiCiAgIGlkPSJuYW1lZHZpZXc4MzYiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iNi42OSIKICAgaW5rc2NhcGU6Y3g9IjUwIgogICBpbmtzY2FwZTpjeT0iNTAiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIC8+CjxwYXRoCiAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgY2xpcC1ydWxlPSJldmVub2RkIgogICBkPSJNOTAuNDM5LDc0LjA3OGMtMi44ODcsMi4wOTItNy4zOTYsMS45MzctMTAuMTcyLTAuNzAzICBjLTIuOTQ2LTIuODAxLTQuNzcyLTYuMTkxLTcuNTM2LTkuNTc4Yy0xLjMxMS0xLjYwNC0yLjU1NC0yLjUxLTUuNTItMS41MzJjLTUuODI3LDEuOTI1LTEyLjEyMiwyLjM4NS0xOC4xNjcsMi4yNTEgIGMtNC45MjEtMC4wMzktMTAuNDQtMC4yNTctMTYuMjY4LTIuMTc5Yy0yLjk2NS0wLjk3OS00LjIwOC0wLjA3NC01LjUxOCwxLjUzMmMtMi43NjUsMy4zODYtNC41OSw2Ljc3NC03LjUzNyw5LjU3NyAgYy0yLjc3NCwyLjYzOC03LjI4NCwyLjc5NS0xMC4xNzIsMC43MDFjLTQuMTE1LTIuOTgxLTUuMDUtNS41MjEtMy45OTktOS41MDJjMS42NTEtNi4yNTcsNC44NjEtMTguNzk3LDYuNDU0LTI1LjA3ICBjMy4xNjgtMTIuNDcyLDYuMDI0LTE0LjUwNCwxNy4yMTctMTUuMDUyYzIuNTg3LTAuMTI2LDUuOTY2LTAuMTQzLDguMTE5LDMuMzZjMC45NTIsMS41NSwyLjU2NiwxLjMwMiw0LjA3OSwxLjI5OWgxNy4xNSAgYzEuNTE0LDAuMDAzLDMuMTI1LDAuMTgxLDQuMDgtMS4zNjljMi4xNTEtMy41MDMsNS41MjktMy40ODgsOC4xMTctMy4zNjFjMTEuMTkzLDAuNTQ5LDE0LjA2MywyLjU3NiwxNy4yMTgsMTUuMDUzICBjMi4xMTMsOC4zNjQsNC4wNTYsMTYuMjA5LDYuNDU0LDI1LjA2OUM5NS41MTUsNjguNTUsOTQuNTU1LDcxLjA5Niw5MC40MzksNzQuMDc4eiBNMzYuMTU5LDQxLjkyMWgtNC40OTh2LTQuNDk4ICBjMC0xLjMyNC0xLjA3NC0yLjM5OC0yLjM5OC0yLjM5OGgtMS44NjVjLTEuMzI1LDAtMi4zOTgsMS4wNzQtMi4zOTgsMi4zOTh2NC40OThoLTQuNDk4Yy0xLjMyNCwwLTIuMzk4LDEuMDczLTIuMzk4LDIuMzk4djEuODY1ICBjMCwxLjMyNCwxLjA3NCwyLjM5OCwyLjM5OCwyLjM5OGg0LjQ5OHY0LjQ5OWMwLDEuMzI0LDEuMDc0LDIuMzk2LDIuMzk4LDIuMzk2aDEuODY1YzEuMzI0LDAsMi4zOTgtMS4wNzIsMi4zOTgtMi4zOTZ2LTQuNDk5aDQuNDk4ICBjMS4zMjQsMCwyLjM5Ny0xLjA3NCwyLjM5Ny0yLjM5OFY0NC4zMkMzOC41NTYsNDIuOTk1LDM3LjQ4Myw0MS45MjEsMzYuMTU5LDQxLjkyMXogTTY5Ljg5MywzNC45MTMgIGMtMi40ODcsMC00LjUwNiwyLjAxOC00LjUwNiw0LjUwNmMwLDIuNDg3LDIuMDE5LDQuNTA0LDQuNTA2LDQuNTA0YzIuNDg4LDAsNC41MDctMi4wMTcsNC41MDctNC41MDQgIEM3NC4zOTksMzYuOTMxLDcyLjM4MSwzNC45MTMsNjkuODkzLDM0LjkxM3ogTTYzLjMzMyw0Ni4xODdjLTIuNDg2LDAtNC41MDQsMi4wMTctNC41MDQsNC41MDRjMCwyLjQ4OCwyLjAxOCw0LjUwNiw0LjUwNCw0LjUwNiAgYzIuNDg4LDAsNC41MDYtMi4wMTgsNC41MDYtNC41MDZDNjcuODM5LDQ4LjIwNCw2NS44MjEsNDYuMTg3LDYzLjMzMyw0Ni4xODd6IE03Ni40NTMsNDYuMTg3Yy0yLjQ5LDAtNC41MDQsMi4wMTctNC41MDQsNC41MDQgIGMwLDIuNDg4LDIuMDE0LDQuNTA2LDQuNTA0LDQuNTA2YzIuNDg4LDAsNC41MDQtMi4wMTgsNC41MDQtNC41MDZDODAuOTU3LDQ4LjIwNCw3OC45NDEsNDYuMTg3LDc2LjQ1Myw0Ni4xODd6IgogICBpZD0icGF0aDgzMyIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MSIgLz4KPC9zdmc+Cg==",
            "menuIconURI": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHdpZHRoPSIxMDBweCIKICAgaGVpZ2h0PSIxMDBweCIKICAgdmlld0JveD0iMCAwIDEwMCAxMDAiCiAgIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHNvZGlwb2RpOmRvY25hbWU9IkNvbnRyb2xsZXIuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMiAoZTg2Yzg3MDgsIDIwMjEtMDEtMTUpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhODQwIj48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzODM4IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iNjQwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI0ODAiCiAgIGlkPSJuYW1lZHZpZXc4MzYiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iNi42OSIKICAgaW5rc2NhcGU6Y3g9IjUwIgogICBpbmtzY2FwZTpjeT0iNTAiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkxheWVyXzEiIC8+CjxwYXRoCiAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgY2xpcC1ydWxlPSJldmVub2RkIgogICBkPSJNOTAuNDM5LDc0LjA3OGMtMi44ODcsMi4wOTItNy4zOTYsMS45MzctMTAuMTcyLTAuNzAzICBjLTIuOTQ2LTIuODAxLTQuNzcyLTYuMTkxLTcuNTM2LTkuNTc4Yy0xLjMxMS0xLjYwNC0yLjU1NC0yLjUxLTUuNTItMS41MzJjLTUuODI3LDEuOTI1LTEyLjEyMiwyLjM4NS0xOC4xNjcsMi4yNTEgIGMtNC45MjEtMC4wMzktMTAuNDQtMC4yNTctMTYuMjY4LTIuMTc5Yy0yLjk2NS0wLjk3OS00LjIwOC0wLjA3NC01LjUxOCwxLjUzMmMtMi43NjUsMy4zODYtNC41OSw2Ljc3NC03LjUzNyw5LjU3NyAgYy0yLjc3NCwyLjYzOC03LjI4NCwyLjc5NS0xMC4xNzIsMC43MDFjLTQuMTE1LTIuOTgxLTUuMDUtNS41MjEtMy45OTktOS41MDJjMS42NTEtNi4yNTcsNC44NjEtMTguNzk3LDYuNDU0LTI1LjA3ICBjMy4xNjgtMTIuNDcyLDYuMDI0LTE0LjUwNCwxNy4yMTctMTUuMDUyYzIuNTg3LTAuMTI2LDUuOTY2LTAuMTQzLDguMTE5LDMuMzZjMC45NTIsMS41NSwyLjU2NiwxLjMwMiw0LjA3OSwxLjI5OWgxNy4xNSAgYzEuNTE0LDAuMDAzLDMuMTI1LDAuMTgxLDQuMDgtMS4zNjljMi4xNTEtMy41MDMsNS41MjktMy40ODgsOC4xMTctMy4zNjFjMTEuMTkzLDAuNTQ5LDE0LjA2MywyLjU3NiwxNy4yMTgsMTUuMDUzICBjMi4xMTMsOC4zNjQsNC4wNTYsMTYuMjA5LDYuNDU0LDI1LjA2OUM5NS41MTUsNjguNTUsOTQuNTU1LDcxLjA5Niw5MC40MzksNzQuMDc4eiBNMzYuMTU5LDQxLjkyMWgtNC40OTh2LTQuNDk4ICBjMC0xLjMyNC0xLjA3NC0yLjM5OC0yLjM5OC0yLjM5OGgtMS44NjVjLTEuMzI1LDAtMi4zOTgsMS4wNzQtMi4zOTgsMi4zOTh2NC40OThoLTQuNDk4Yy0xLjMyNCwwLTIuMzk4LDEuMDczLTIuMzk4LDIuMzk4djEuODY1ICBjMCwxLjMyNCwxLjA3NCwyLjM5OCwyLjM5OCwyLjM5OGg0LjQ5OHY0LjQ5OWMwLDEuMzI0LDEuMDc0LDIuMzk2LDIuMzk4LDIuMzk2aDEuODY1YzEuMzI0LDAsMi4zOTgtMS4wNzIsMi4zOTgtMi4zOTZ2LTQuNDk5aDQuNDk4ICBjMS4zMjQsMCwyLjM5Ny0xLjA3NCwyLjM5Ny0yLjM5OFY0NC4zMkMzOC41NTYsNDIuOTk1LDM3LjQ4Myw0MS45MjEsMzYuMTU5LDQxLjkyMXogTTY5Ljg5MywzNC45MTMgIGMtMi40ODcsMC00LjUwNiwyLjAxOC00LjUwNiw0LjUwNmMwLDIuNDg3LDIuMDE5LDQuNTA0LDQuNTA2LDQuNTA0YzIuNDg4LDAsNC41MDctMi4wMTcsNC41MDctNC41MDQgIEM3NC4zOTksMzYuOTMxLDcyLjM4MSwzNC45MTMsNjkuODkzLDM0LjkxM3ogTTYzLjMzMyw0Ni4xODdjLTIuNDg2LDAtNC41MDQsMi4wMTctNC41MDQsNC41MDRjMCwyLjQ4OCwyLjAxOCw0LjUwNiw0LjUwNCw0LjUwNiAgYzIuNDg4LDAsNC41MDYtMi4wMTgsNC41MDYtNC41MDZDNjcuODM5LDQ4LjIwNCw2NS44MjEsNDYuMTg3LDYzLjMzMyw0Ni4xODd6IE03Ni40NTMsNDYuMTg3Yy0yLjQ5LDAtNC41MDQsMi4wMTctNC41MDQsNC41MDQgIGMwLDIuNDg4LDIuMDE0LDQuNTA2LDQuNTA0LDQuNTA2YzIuNDg4LDAsNC41MDQtMi4wMTgsNC41MDQtNC41MDZDODAuOTU3LDQ4LjIwNCw3OC45NDEsNDYuMTg3LDc2LjQ1Myw0Ni4xODd6IgogICBpZD0icGF0aDgzMyIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MSIgLz4KPC9zdmc+Cg==",
            "color1":'#8a45b5',
            "color2":'#ca91ed',
            "color3":'#5a0c8a',
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
                    // {
                    //     "opcode": "axisMoved",
                    //     "blockType": "hat",
                    //     "text": "anolog axis [b] of gamepad [i] moved",
                    //     "arguments": {
                    //         "b": {
                    //             "type": "number",
                    //             "defaultValue": "1"
                    //         },
                    //         "i": {
                    //             "type": "number",
                    //             "defaultValue": "1",
                    //             "menu": "padMenu"
                    //         },
                    //     },
                    // },
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
                    {
                        "opcode": "vibrate",
                        "blockType": "command",
                        "text": "Vibrate gamepad [i] for [d] ms with high magnitude [s], low magnitude [w]",
                        "arguments": {
                            "i": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "padMenu"
                            },
                            "d": {
                                "type": "number",
                                "defaultValue": "200"
                            },
                            "s": {
                                "type": "number",
                                "defaultValue": "1",
                            },
                            "w": {
                                "type": "number",
                                "defaultValue": "1",
                            },
                        },                    
                    },
                    {
                        "opcode": "connectedPads",
                        "blockType": "reporter",
                        "text": "Connected Pads",
                        "arguments": {
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

    vibrate({i, d, s, w}) {
        this.gamepads[i-1].vibrate(d,Math.min(Math.max(s, 0), 1),Math.min(Math.max(w, 0), 1))
    }

    connectedPads() {
        var connected = navigator.getGamepads()
        var count = 0
        for (let i = 0; i < connected.length; i++) {
            if (connected[i]!=null) {count++}
        }
        return count
    }
}

(function() {
    var extensionInstance = new ScratchGamepad(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
