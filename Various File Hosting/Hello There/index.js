// I Rewrote the input code -Electro
// It now Supports all charactors and capatalization (I believe, it worked when i tested it)
var input = "";
document.addEventListener("keydown", function onEvent(event) {
    const key = event.key;
    if (key.length === 1) {
        input += key;
    } else if (key === "Backspace") {
        input = input.substring(0, input.length - 1);
    }
});

// eslint-disable-next-line max-len
const icon = "data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='317.61173' height='336.51742' viewBox='0,0,317.61173,336.51742'%3E%3Cg transform='translate(-89.54157,3.9139)'%3E%3Cg data-paper-data='%7B&quot;isPaintingLayer&quot;:true%7D' fill-rule='nonzero' stroke-dasharray='' stroke-dashoffset='0' style='mix-blend-mode: normal'%3E%3Cpath d='M385.52804,232.3679c-18.1111,115.13253 -110.22209,100.23867 -199.30013,89.93689c-89.07803,-10.30178 -105.7696,-39.00865 -87.7784,-120.15569c17.99119,-81.14704 75.65419,-139.43685 168.36185,-137.42357c92.70766,2.0133 136.82778,52.50981 118.71668,167.64237z' fill='%23f7aa32' stroke='none' stroke-width='1.99937' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10'/%3E%3Cpath d='M347.39478,298.56145c20.19613,19.27598 -71.21112,46.90954 -167.64235,27.34081c-96.43125,-19.56873 -92.81868,-63.47147 -88.49791,-85.61994c4.32078,-22.14845 76.99304,-44.79057 138.86255,-27.34079c61.86952,17.44976 82.07302,59.13266 117.2777,85.61992z' fill='%23fbede4' stroke='none' stroke-width='1.99937' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10'/%3E%3Cpath d='M178.25554,154.92661c-1.52485,12.62396 -10.11627,22.56351 -21.22963,22.0285c-11.11338,-0.53499 -22.37658,-11.70243 -19.01549,-23.96591c3.73071,-13.61204 14.83991,-20.69263 21.22963,-22.02852c15.90269,-3.32472 20.71534,9.89291 19.01549,23.96591z' fill='%232c2c2b' stroke='none' stroke-width='1.99937' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10'/%3E%3Cpath d='M212.81606,209.44352c-1.85692,12.57941 -9.55549,20.7659 -22.2712,20.7659c-12.71572,0 -22.73073,-10.3115 -23.02384,-23.02384c-0.27454,-11.90665 10.96367,-21.05718 23.67938,-21.05718c12.71572,0 23.08052,13.39152 21.61564,23.31515z' fill='%232c2c2b' stroke='none' stroke-width='1.99937' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10'/%3E%3Cpath d='M224.36115,242.44085c-18.51671,1.93399 -40.42222,10.18475 -36.69425,-20.86535c-8.01216,26.27727 -20.93921,19.55223 -32.37728,16.54838' fill='none' stroke='%232c2c2b' stroke-width='12' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='4'/%3E%3Cpath d='M264.33676,163.52421c-1.52485,12.62396 -10.11627,22.56351 -21.22963,22.0285c-11.11338,-0.53499 -22.37658,-11.70243 -19.01549,-23.96591c3.73071,-13.61204 14.83991,-20.69263 21.22963,-22.02852c15.90269,-3.32472 20.71534,9.89291 19.01549,23.96591z' fill='%232c2c2b' stroke='none' stroke-width='1.99937' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10'/%3E%3Cpath d='M250.33124,66.03688l-90.32227,34.09517c2.92391,-22.9295 16.99139,-65.61526 40.07678,-71.7793c23.08539,-6.16404 39.45593,18.76505 50.24551,37.68411z' fill='%23f7aa32' stroke='none' stroke-width='18' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='4'/%3E%3Cpath d='M320.91424,73.81298c16.67649,-9.62325 37.99012,-29.35639 57.42344,-13.75769c19.43333,15.59867 11.00373,52.42941 5.38343,78.95722z' fill='%23f7aa32' stroke='none' stroke-width='18' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='4'/%3E%3Cg stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10'%3E%3Cpath d='M407.15331,145.93797l-7.81183,22.34009l-294.4823,-51.62432l7.81183,-22.34009l10.51681,1.84365c5.78439,1.01403 11.68923,-1.50744 13.12138,-5.60308l5.20784,-14.89326c14.06135,-40.21233 63.90174,-67.82965 119.34213,-69.96564l1.43215,-4.09564c1.30185,-3.72301 7.20611,-6.24459 12.46481,-5.32271l53.63776,9.40299c5.25812,0.92178 8.81942,5.10229 7.51743,8.8257l-1.43215,4.09564c47.49826,20.57672 72.86162,62.95824 58.80026,103.17057l-4.55691,13.03175c-1.43215,4.09564 2.12901,8.27655 7.9134,9.29059z' fill='%23f4ba48'/%3E%3Cg fill='%23b58024'%3E%3Cpath d='M348.00683,139.52094l-178.79332,-31.34342c-3.15533,-0.55315 -4.73792,-2.41116 -3.9567,-4.64529c0.78123,-2.23413 3.40536,-3.35469 6.56069,-2.80154l178.79274,31.34332c3.15533,0.55315 4.73792,2.41116 3.9567,4.64529c-0.78123,2.23413 -3.40536,3.35469 -6.56011,2.80164'/%3E%3Cpath d='M326.66792,40.9415c-3.15533,-0.55315 -4.73792,-2.41116 -3.9567,-4.64529l5.20784,-14.89326c0.78123,-2.23413 3.40536,-3.35469 6.56069,-2.80154c3.15533,0.55315 4.73792,2.41116 3.9567,4.64529l-5.20784,14.89326c-0.78123,2.23413 -3.40536,3.35469 -6.56069,2.80154'/%3E%3Cpath d='M253.04735,28.03542c-3.15533,-0.55315 -4.73792,-2.41116 -3.9567,-4.64529l5.20784,-14.89326c0.78123,-2.23413 3.40536,-3.35469 6.56069,-2.80154c3.15533,0.55315 4.73792,2.41116 3.9567,4.64529l-5.20784,14.89326c-0.78123,2.23413 -3.40536,3.35469 -6.56069,2.80154'/%3E%3Cpath d='M283.34766,53.10554c-3.15533,-0.55315 -4.73792,-2.41116 -3.9567,-4.64529l15.62366,-44.68018c0.78123,-2.23413 3.40536,-3.35469 6.56069,-2.80154c3.15533,0.55315 4.73792,2.41116 3.9567,4.64529l-15.62366,44.68018c-0.65093,1.8615 -3.40536,3.35469 -6.56069,2.80154'/%3E%3Cpath d='M360.80815,34.2814c13.30225,9.84024 23.06362,21.82544 29.1489,34.74678v0l-63.18813,3.54389l34.03923,-38.29068z'/%3E%3Cpath d='M227.23972,10.86614l4.87499,45.11255l-53.55354,-24.0089v0c13.8971,-9.41875 30.42863,-16.79467 48.67854,-21.10365z'/%3E%3C/g%3E%3Cg fill='none' font-family='sans-serif' font-weight='normal' font-size='12' text-anchor='start'/%3E%3Cg fill='none' font-family='sans-serif' font-weight='normal' font-size='12' text-anchor='start'/%3E%3Cg fill='none' font-family='sans-serif' font-weight='normal' font-size='12' text-anchor='start'/%3E%3Cg fill='none' font-family='sans-serif' font-weight='normal' font-size='12' text-anchor='start'/%3E%3Cg fill='none' font-family='sans-serif' font-weight='normal' font-size='12' text-anchor='start'/%3E%3Cg fill='none' font-family='sans-serif' font-weight='normal' font-size='12' text-anchor='start'/%3E%3Cg fill='none' font-family='sans-serif' font-weight='normal' font-size='12' text-anchor='start'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

// --> i is variable commonly used for counters. In lua for example it is used in for loops `for i, v in pairs() do `
var i = 1;

// --> console.log support for eval blocks and eval in object blocks
var output = undefined;
function function_log(x) {
    output = x;
}

class HighClass {
    constructor(runtime, extensionId) {
		this.runtime = runtime;
	}
   
    getInfo() {
        return {
            id: "hc",
            name: "HighClass",
            blockIconURI: icon,
            menuIconURI: icon,
            docsURI: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            color1: "#ff964c",
            color2: "#fd8a5e",
            blocks: [
                {
                    opcode: "getLastKeyPressed",
                    text: "last input",
                    disableMonitor: true,
                    blockType: "reporter",
                },
                {
                    opcode: "fetchFrom",
                    text: "Fetch data from [URL]",
                    blockType: "reporter",
                    arguments: {
                        URL: {
                            type: "string",
                            defaultValue:
                                "https://cube-enix.github.io/fetch_test.txt",
                        },
                    },
                },
                {
                    opcode: "pi",
                    text: "pi",
                    disableMonitor: true,
                    blockType: "reporter",
                },
                {
                    opcode: "isExactly",
                    text: "is [A] exactly [B]",
                    blockType: "reporter",
                    arguments: {
                        A: {
                            type: "string",
                            defaultValue: "testsubject",
                        },
                        B: {
                            type: "string",
                            defaultValue: "testSubject",
                        },
                    },
                },
                {
                    opcode: "containsExactly",
                    text: "[A] contains exactly [B]?",
                    blockType: "reporter",
                    arguments: {
                        A: {
                            type: "string",
                            defaultValue: "abc",
                        },
                        B: {
                            type: "string",
                            defaultValue: "ABC",
                        },
                    },
                },
                {
                    opcode: "LTE",
                    text: "[A] <= [B]",
                    blockType: "reporter",
                    arguments: {
                        A: {
                            type: "number",
                            defaultValue: "0",
                        },
                        B: {
                            type: "number",
                            defaultValue: "50",
                        },
                    },
                },
                {
                    opcode: "GTE",
                    text: "[A] >= [B]",
                    blockType: "reporter",
                    arguments: {
                        A: {
                            type: "number",
                            defaultValue: "0",
                        },
                        B: {
                            type: "number",
                            defaultValue: "50",
                        },
                    },
                },
                {
                    opcode: "trueBlock",
                    text: "true",
                    blockType: "reporter",
                },
                {
                    opcode: "falseBlock",
                    text: "false",
                    blockType: "reporter",
                },
                {
                    opcode: "exponent",
                    text: "[A] ^ [B]",
                    blockType: "reporter",
                    arguments: {
                        A: {
                            type: "number",
                            defaultValue: "1",
                        },
                        B: {
                            type: "number",
                            defaultValue: "2",
                        },
                    },
                },
                {
                    opcode: "ternaryOperator",
                    text: "if [A] then [B] else [C]",
                    disableMonitor: true,
                    blockType: "reporter",
                    arguments: {
                        A: {
                            type: "reporter",
                        },
                        B: {
                            type: "string",
                            defaultValue: "TeleKiwi",
                        },
                        C: {
                            type: "string",
                            defaultValue: "SheepTester",
                        },
                    },
                },
                {
                    opcode: "isbetween",
                    text: "Is [input] between [start] and [end]",
                    disableMonitor: true,
                    blockType: "reporter",
                    arguments: {
                        input: {
                            type: "number",
                            defaultValue: "5",
                        },
                        start: {
                            type: "number",
                            defaultValue: "1",
                        },
                        end: {
                            type: "number",
                            defaultValue: "10",
                        },
                    },
                },
                {
                    opcode: "getLetters",
                    text: "letters [START] to [END] of [STRING]",
                    disableMonitor: true,
                    blockType: "reporter",
                    arguments: {
                        START: {
                            type: "number",
                            defaultValue: "7",
                        },
                        END: {
                            type: "number",
                            defaultValue: "10",
                        },
                        STRING: {
                            type: "string",
                            defaultValue: "Hello Test Subject",
                        },
                    },
                },
                {
                    opcode: "currentMillisecond",
                    text: "current millisecond",
                    blockType: "reporter",
                },
                {
                    opcode: "clamp",
                    text: "Clamp [input] Min: [min] Max: [max]",
                    disableMonitor: true,
                    blockType: "reporter",
                    arguments: {
                        input: {
                            type: "number",
                            defaultValue: "5",
                        },
                        min: {
                            type: "number",
                            defaultValue: "1",
                        },
                        max: {
                            type: "number",
                            defaultValue: "10",
                        },
                    },
                },
                {
                    opcode: "reverse",
                    text: "Reverse Text [text]",
                    disableMonitor: true,
                    blockType: "reporter",
                    arguments: {
                        text: {
                            type: "string",
                            defaultValue: "foo",
                        },
                    },
                },
                {
                    opcode: "replace",
                    text: "replace [find] with [replace] in [text]",
                    disableMonitor: true,
                    blockType: "reporter",
                    arguments: {
                        find: {
                            type: "string",
                            defaultValue: "World",
                        },
                        replace: {
                            type: "string",
                            defaultValue: "testSubject",
                        },
                        text: {
                            type: "string",
                            defaultValue: "Hello World!",
                        },
                    },
                },
                {
                    opcode: "userinput",
                    text: "input",
                    blockType: "reporter",
                },
                {
                    opcode: "setuserinput",
                    text: "Set Input to [set]",
                    arguments: {
                        set: {
                            type: "string",
                            defaultValue: "Hello!",
                        },
                    },
                    blockType: "command",
                },
                // {
                //     opcode: "mouseview",
                //     text: formatMessage({
                //         id: "sn.blocks.mouseview",
                //         default: "Mouse [view]",
                //         description: "Hide/Show the mouse",
                //     }),
                //     blockType: "command",
                //     arguments: {
                //         viewoption: {
                //             type: "number",
                //             menu: "mouseviewmenu",
                //             defaultValue: "0",
                //         },
                //     },
                // },
                // //l
                {
                    opcode: "comment",
                    text: "// [note]",
                    blockType: "command",
                    arguments: {
                        note: {
                            type: "string",
                            defaultValue: "Hello!",
                        },
                    },
                },
                {
                    opcode: "capitalize",
                    text: "Capitalize [text]",
                    disableMonitor: true,
                    blockType: "reporter",
                    arguments: {
                        text: {
                            type: "string",
                            defaultValue: "caps",
                        },
                    },
                },
                {
                    opcode: "caps",
                    text: "Cap Lock [text]",
                    disableMonitor: true,
                    blockType: "reporter",
                    arguments: {
                        text: {
                            type: "string",
                            defaultValue: "cruise control",
                        },
                    },
                },
                {
                    opcode: "I",
                    text: "i",
                    blockType: "reporter",
                },
                {
                    opcode: "setI",
                    text: "set i to [A]",
                    blockType: "command",
                    arguments: {
                        A: {
                            type: "number",
                            defaultValue: "1",
                        },
                    },
                },
                {
                    opcode: "increaseI",
                    text: "increase i by [A]",
                    blockType: "command",
                    arguments: {
                        A: {
                            type: "number",
                            defaultValue: "1",
                        },
                    },
                },
                {
                    opcode: "decreaseI",
                    text: "decrease i by [A]",
                    blockType: "command",
                    arguments: {
                        A: {
                            type: "number",
                            defaultValue: "1",
                        },
                    },
                },
            ],
            menus: {},
        };
    }

    decreaseI(args, utils) {
        i -= args.A;
    }

    increaseI(args, utils) {
        i += args.A;
    }

    setI(args, utils) {
        i = args.A;
    }

    I(args, utils) {
        return i;
    }

    capitalize(args, utils) {
        return args.text.charAt(0).toUpperCase() + args.text.slice(1);
    }

    caps(args, utils) {
        return args.text.toUpperCase();
    }

    containsExactly({ A, B }) {
        return A.contains(B);
    }

    replace(args, utils) {
        return args.text.replace(args.find, args.replace);
    }

    reverse(args, utils) {
        return args.text.split("").reverse().join("");
    }

    getLetters(args, utils) {
        return args.STRING.slice(
            Math.max(1, args.START) - 1,
            Math.min(args.STRING.length, args.END)
        ); // --> Not sure if I defined the args correctly but its fine
    }

    currentMillisecond() {
        return Date.now() % 1000;
    }

    ternaryOperator({ A, B, C }) {
        return A ? B : C;
    }

    isbetween({ input, start, end }) {
        if (input > start && input < end) {
            return true;
        } else {
            return false;
        }
    }

    customCursor(args, utils) {
        console.log("Attempting");
        document.body.style.cursor = args.STRING;
    }

    getLastKeyPressed(args, util) {
        return util.ioQuery("keyboard", "getLastKeyPressed");
    }

    getButtonIsDown(args, util) {
        const button = Cast.toNumber(args.MOUSE_BUTTON);
        return util.ioQuery("mouse", "getButtonIsDown", [button]);
    }

    mouseview(args, util) {
        const option = Cast.toNumber(args.viewoption);
        // code for hiding and showing mouse goes here (idk how to do it)
    }

    fetchFrom({ URL }) {
        return fetch(URL)
            .then((res) => res.text())
            .catch((err) => "");
    }

    pi() {
        return Math.PI;
    }

    isExactly({ A, B }) {
        return A === B;
    }

    LTE({ A, B }) {
        return A <= B;
    }

    GTE({ A, B }) {
        return A >= B;
    }

    trueBlock() {
        return true;
    }

    falseBlock() {
        return false;
    }

    exponent({ A, B }) {
        return Math.pow(A, B);
    }

    userinput() {
        return input;
    }

    setuserinput({ set }) {
        input = set;
    }

    clamp({ input, min, max }) {
        return Math.min(Math.max(input, min), max);
    }

    comment() {
        return;
    }

    getdirection({ x1, y1, x2, y2 }) {
        var p1 = { x: x1, y: y1 };
        var p2 = { x: x2, y: y2 };
        var angleDeg = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
        return (angleDeg - 90) * -1;
    }

    getdistance({ x1, y1, x2, y2 }) {
        let y = x2 - x1;
        let x = y2 - y1;
        return Math.sqrt(x * x + y * y);
    }

    Eval({ JS }) {
        var evaluate = 0;
        var output = undefined;
        JS = JS.replace("console.log", "function_log");
        try {
            evaluate = eval(JS);
            if (output != undefined) {
                return output;
            }
            if (evaluate != undefined) {
                return evaluate;
            }
            return "undefined";
        } catch (err) {
            return err;
        }
    }

    objsetvalue({ obj, name, value }) {
        eval(
            `
            const object = ${obj}
            object.${name} = "${value}"
            function_log(object)
            `
        );
        return JSON.stringify(output);
    }

    objgetvalue({ obj, name }) {
        eval(
            `
            const object = ${obj}
            function_log(object.${name})
            `
        );
        return output;
    }
}


(function() {
    var extensionClass = HighClass;
    if (typeof window === "undefined" || !window.vm) {
	console.log("Sandboxed mode detected, Load unsandboxed.");
    } else {
        var extensionInstance = new extensionClass(window.vm.extensionManager.runtime);
        var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance);
        window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName);
		console.log("Unsandboxed mode detected. Good.");
    };
})()

const miiicon = "data:image/png;base64,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"
// Define the audio object so we can edit it from several different functions
var audio
 class snap {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */

    getInfo () {
        return {
            id: 'snap',
            name: 'Snap',
            blockIconURI: miiicon,
            menuIconURI: miiicon,
            docsURI: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            color1: '#77b8e8',
            color2: '#009bde',
            blocks: [
                {
                    opcode: 'playsound',
                    text: 'Play Sound from URL [url]',
                    blockType: "command",
                    arguments: {
                        url: {
                            type: "string",
                            defaultValue: 'https://vgmsite.com/soundtracks/pokemon-black-and-white/ircnaryc/501%20What.mp3'
                        }
                    }
                },
                {
                    opcode: 'stopsound',
                    text: 'Stop Sound',
                    blockType: "command"
                },
                {
                    opcode: 'audioTime',
                    text: 'Current Timestamp',
                    blockType: "reporter"
                },
                {
                    opcode: 'lengthAudio',
                    text: 'Audio Duration',
                    blockType: "reporter"
                },
                {
                    opcode: 'loopAudio',
                    text: 'Set looped for sound to [checked]',
                    blockType: "command",
                    arguments: {
                        checked: {
                            type: "boolean",
                            defaultValue: true
                        }
                    }
                }
            ]
        }
    }

    playsound (args, utils) {
        // --> Now before I begin I've never done this before so expect bugs 
        // --> make sure they're playing an mp3
        var ext = args.url.charAt(args.url.length - 3) + args.url.charAt(args.url.length - 2) +  args.url.charAt(args.url.length - 1) + args.url.charAt(args.url.length)
        if(ext = '.mp3') {
            if(audio !== undefined) {
                audio.pause()
            }
            audio = new Audio(args.url)
            audio.type = 'audio/mp3';
            try {
                audio.play()
                console.log('playing');
            } catch {
                console.log("Theres been an error loading audio")
            }
        } else {
            console.log("Theres been an error loading audio. (Is it an audio?)")
        }
    }
    stopsound (args, utils) {
        audio.pause()
    }
    audioTime (args, utils) {
        return audio.currentTime
    }
    lengthAudio (args, utils) {
        return audio.duration
    }
    loopAudio (args, utils) {
        audio.loop = args.checked
    }
}

(function() {
    var extensionClass = snap;
    if (typeof window === "undefined" || !window.vm) {
	console.log("Sandboxed mode detected, Load unsandboxed.");
    } else {
        var extensionInstance = new extensionClass(window.vm.extensionManager.runtime);
        var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance);
        window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName);
		console.log("Unsandboxed mode detected. Good.");
    };
})()
