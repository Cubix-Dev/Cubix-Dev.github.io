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
                    blockType: Scratch.BlockType.REPORTER,
                },
                {
                    opcode: "getButtonIsDown",
                    text: "mouse button [MOUSE_BUTTON] down?",
                    blockType: Scratch.BlockType.BOOLEAN,
                    arguments: {
                        MOUSE_BUTTON: {
                            type: Scratch.ArgumentType.NUMBER,
                            menu: "mouseButton",
                            defaultValue: "0",
                        },
                    },
                },
                {
                    opcode: "fetchFrom",
                    text: "Fetch data from [URL]",
                    blockType: Scratch.BlockType.REPORTER,
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue:
                                "https://cube-enix.github.io/fetch_test.txt",
                        },
                    },
                },
                {
                    opcode: "pi",
                    text: "pi",
                    disableMonitor: true,
                    blockType: Scratch.BlockType.REPORTER,
                },
                {
                    opcode: "isExactly",
                    text: "is [A] exactly [B]",
                    blockType: Scratch.BlockType.BOOLEAN,
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "testsubject",
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "testSubject",
                        },
                    },
                },
                {
                    opcode: "containsExactly",
                    text: "[A] contains exactly [B]?",
                    blockType: Scratch.BlockType.BOOLEAN,
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "abc",
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "ABC",
                        },
                    },
                },
                {
                    opcode: "LTE",
                    text: "[A] <= [B]",
                    blockType: Scratch.BlockType.BOOLEAN,
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "0",
                        },
                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "50",
                        },
                    },
                },
                {
                    opcode: "GTE",
                    text: "[A] >= [B]",
                    blockType: Scratch.BlockType.BOOLEAN,
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "0",
                        },
                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "50",
                        },
                    },
                },
                {
                    opcode: "trueBlock",
                    text: "true",
                    blockType: Scratch.BlockType.BOOLEAN,
                },
                {
                    opcode: "falseBlock",
                    text: "false",
                    blockType: Scratch.BlockType.BOOLEAN,
                },
                {
                    opcode: "exponent",
                    text: "[A] ^ [B]",
                    blockType: Scratch.BlockType.REPORTER,
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "1",
                        },
                        B: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "2",
                        },
                    },
                },
                {
                    opcode: "ternaryOperator",
                    text: "if [A] then [B] else [C]",
                    disableMonitor: true,
                    blockType: Scratch.BlockType.REPORTER,
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.BOOLEAN,
                        },
                        B: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "TeleKiwi",
                        },
                        C: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "SheepTester",
                        },
                    },
                },
                {
                    opcode: "isbetween",
                    text: "Is [input] between [start] and [end]",
                    disableMonitor: true,
                    blockType: Scratch.BlockType.BOOLEAN,
                    arguments: {
                        input: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "5",
                        },
                        start: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "1",
                        },
                        end: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "10",
                        },
                    },
                },
                {
                    opcode: "getLetters",
                    text: "letters [START] to [END] of [STRING]",
                    disableMonitor: true,
                    blockType: Scratch.BlockType.REPORTER,
                    arguments: {
                        START: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "7",
                        },
                        END: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "10",
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello Test Subject",
                        },
                    },
                },
                {
                    opcode: "currentMillisecond",
                    text: "current millisecond",
                    blockType: Scratch.BlockType.REPORTER,
                },
                {
                    opcode: "clamp",
                    text: "Clamp [input] Min: [min] Max: [max]",
                    disableMonitor: true,
                    blockType: Scratch.BlockType.REPORTER,
                    arguments: {
                        input: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "5",
                        },
                        min: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "1",
                        },
                        max: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "10",
                        },
                    },
                },
                {
                    opcode: "reverse",
                    text: "Reverse Text [text]",
                    disableMonitor: true,
                    blockType: Scratch.BlockType.REPORTER,
                    arguments: {
                        text: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "foo",
                        },
                    },
                },
                {
                    opcode: "replace",
                    text: "replace [find] with [replace] in [text]",
                    disableMonitor: true,
                    blockType: Scratch.BlockType.REPORTER,
                    arguments: {
                        find: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "World",
                        },
                        replace: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "testSubject",
                        },
                        text: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello World!",
                        },
                    },
                },
                {
                    opcode: "userinput",
                    text: "input",
                    blockType: Scratch.BlockType.REPORTER,
                },
                {
                    opcode: "setuserinput",
                    text: formatMessage({
                        id: "sn.blocks.setinput",
                        default: "Set Input to [set]",
                        description: "Sets the users input",
                    }),
                    arguments: {
                        set: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello!",
                        },
                    },
                    blockType: Scratch.BlockType.COMMAND,
                },
                // {
                //     opcode: "mouseview",
                //     text: formatMessage({
                //         id: "sn.blocks.mouseview",
                //         default: "Mouse [view]",
                //         description: "Hide/Show the mouse",
                //     }),
                //     blockType: Scratch.BlockType.COMMAND,
                //     arguments: {
                //         viewoption: {
                //             type: Scratch.ArgumentType.NUMBER,
                //             menu: "mouseviewmenu",
                //             defaultValue: "0",
                //         },
                //     },
                // },
                // //l
                {
                    opcode: "comment",
                    text: formatMessage({
                        id: "sn.blocks.comment",
                        default: "// [note]",
                        description: "Organize your code by adding Notes!",
                    }),
                    blockType: Scratch.BlockType.COMMAND,
                    arguments: {
                        note: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello!",
                        },
                    },
                },
                {
                    opcode: "capitalize",
                    text: formatMessage({
                        id: "sn.blocks.cap",
                        default: "Capitalize [text]",
                        description: "Speak normally.",
                    }),
                    disableMonitor: true,
                    blockType: Scratch.BlockType.REPORTER,
                    arguments: {
                        text: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "caps",
                        },
                    },
                },
                {
                    opcode: "caps",
                    text: formatMessage({
                        id: "sn.blocks.cruisecontrol",
                        default: "Cap Lock [text]",
                        description: "CRUISE CONTROL!",
                    }),
                    disableMonitor: true,
                    blockType: Scratch.BlockType.REPORTER,
                    arguments: {
                        text: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "cruise control",
                        },
                    },
                },
                {
                    opcode: "I",
                    text: "i",
                    blockType: Scratch.BlockType.REPORTER,
                },
                {
                    opcode: "setI",
                    text: "set i to [A]",
                    blockType: Scratch.BlockType.COMMAND,
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "1",
                        },
                    },
                },
                {
                    opcode: "increaseI",
                    text: "increase i by [A]",
                    blockType: Scratch.BlockType.COMMAND,
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "1",
                        },
                    },
                },
                {
                    opcode: "decreaseI",
                    text: "decrease i by [A]",
                    blockType: Scratch.BlockType.COMMAND,
                    arguments: {
                        A: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: "1",
                        },
                    },
                },
            ],
            menus: {
                mouseButton: {
                    items: [
                        {
                            text: formatMessage({
                                id: "sn.blocks.mouseButton.primary",
                                default: "(0) primary",
                                description:
                                    "Dropdown item to select primary (usually left) mouse button",
                            }),
                            value: "0",
                        },
                        {
                            text: formatMessage({
                                id: "sn.blocks.mouseButton.middle",
                                default: "(1) middle",
                                description:
                                    "Dropdown item to select middle mouse button",
                            }),
                            value: "1",
                        },
                        {
                            text: formatMessage({
                                id: "sn.blocks.mouseButton.secondary",
                                default: "(2) secondary",
                                description:
                                    "Dropdown item to select secondary (usually right) mouse button",
                            }),
                            value: "2",
                        },
                    ],
                    acceptReporters: true,
                },
                mouseviewmenu: {
                    items: [
                        {
                            text: formatMessage({
                                id: "sn.blocks.mouseview.show",
                                default: "Show",
                                description: "Show the mouse onscreen",
                            }),
                            value: "0",
                        },
                        {
                            text: formatMessage({
                                id: "sn.blocks.mouseview.hide",
                                default: "Hide",
                                description: "Hide the mouse onscreen",
                            }),
                            value: "1",
                        },
                    ],
                    acceptReporters: true,
                },
            },
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
