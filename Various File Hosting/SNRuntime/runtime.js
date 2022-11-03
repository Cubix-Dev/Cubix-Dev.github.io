/**made by the beautiful Venigo */
const formatMessage = require('format-message');
const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
// const Cast = require('../../util/cast');

/**
 * Class for Runtime blocks
 * @constructor
 */
class runt {
    constructor(runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runt;
        this.md5HashApi = "https://api.hashify.net/hash/md5/hex?value="; // costumes want MD5 hashes for asset IDs and just in general ig
        this.getImageSizeApi = "https://pm-bapi.vercel.app/api/getSize?url=" // costumes want their image size so they dont break lol
        this.generateMd5Hash = (hashing) => {
            return new Promise((resolve, _) => {
                fetch(this.md5HashApi + String(hashing)).then(res => {
                    res.json().then(json => {
                        if (!json.Digest) {
                            console.warn("MD5 hash could not be generated. Fallback is resolving with random number.");
                            resolve(Math.round(Math.random() * 99999999999)); // fallback to generating random numbers incase it is deemed good enough
                            return
                        }
                        resolve(String(json.Digest));
                    }).catch(() => {
                        console.warn("MD5 hash could not be generated. Fallback is resolving with random number.");
                        resolve(Math.round(Math.random() * 99999999999)); // fallback to generating random numbers incase it is deemed good enough
                    })
                }).catch(() => {
                    console.warn("MD5 hash could not be generated. Fallback is resolving with random number.");
                    resolve(Math.round(Math.random() * 99999999999)); // fallback to generating random numbers incase it is deemed good enough
                })
            })
        }
        this.getImageSize = (imageUrl) => {
            return new Promise((resolve, _) => {
                fetch(this.getImageSizeApi + encodeURIComponent(String(imageUrl))).then(res => {
                    res.json().then(json => {
                        resolve(json);
                    }).catch(() => {
                        resolve({ width: 480, height: 360 });
                    })
                }).catch(() => {
                    resolve({ width: 480, height: 360 });
                })
            })
        }
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo() {
        return {
            id: 'snrun',
            name: 'Runtime',
            color1: '#777777',
            color2: '#555555',
            blocks: [
                {
                    opcode: 'addCostumeUrl',
                    text: formatMessage({
                        id: 'jgRuntime.blocks.addCostumeUrl',
                        default: 'add costume from [URL]',
                        description: 'Adds a costume to the current sprite using the image at the URL. Returns the costume name.'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        URL: {
                            type: ArgumentType.STRING,
                            defaultValue: 'https://en.scratch-wiki.info/w/images/thumb/ScratchCat-Small.png/200px-ScratchCat-Small.png'
                        }
                    }
                },
                {
                    opcode: 'deleteCostume',
                    text: formatMessage({
                        id: 'jgRuntime.blocks.deleteCostume',
                        default: 'delete costume at index [COSTUME]',
                        description: 'Deletes a costume at the specified index.'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        COSTUME: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'setStageSize',
                    text: formatMessage({
                        id: 'jgRuntime.blocks.setStageSize',
                        default: 'set stage width: [WIDTH] height: [HEIGHT]',
                        description: 'Sets the width and height of the stage.'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        WIDTH: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 480
                        },
                        HEIGHT: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 360
                        }
                    }
                },
                {
                    opcode: 'turboModeEnabled',
                    text: formatMessage({
                        id: 'jgRuntime.blocks.turboModeEnabled',
                        default: 'turbo mode enabled?',
                        description: 'Block that returns whether Turbo Mode is enabled on the project or not.'
                    }),
                    disableMonitor: false,
                    blockType: BlockType.BOOLEAN
                },
                {
                    opcode: 'amountOfClones',
                    text: formatMessage({
                        id: 'jgRuntime.blocks.amountOfClones',
                        default: 'clone count',
                        description: 'Block that returns the amount of clones that currently exist.'
                    }),
                    disableMonitor: false,
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'getStageWidth',
                    text: formatMessage({
                        id: 'jgRuntime.blocks.getStageWidth',
                        default: 'stage width',
                        description: 'Block that returns the width of the stage.'
                    }),
                    disableMonitor: false,
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'getStageHeight',
                    text: formatMessage({
                        id: 'jgRuntime.blocks.getStageHeight',
                        default: 'stage height',
                        description: 'Block that returns the height of the stage.'
                    }),
                    disableMonitor: false,
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: 'setMaxFrameRate',
                    text: formatMessage({
                        id: 'jgRuntime.blocks.setMaxFrameRate',
                        default: 'set max framerate to: [FRAMERATE]',
                        description: 'Sets the max allowed framerate.'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        FRAMERATE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 30
                        }
                    }
                },
                {
                    opcode: 'getMaxFrameRate',
                    text: formatMessage({
                        id: 'jgRuntime.blocks.getMaxFrameRate',
                        default: 'max framerate',
                        description: 'Block that returns the amount of FPS allowed.'
                    }),
                    disableMonitor: false,
                    blockType: BlockType.REPORTER
                }
            ]
        };
    }
    addCostumeUrl(args, util) {
        return new Promise((resolve, reject) => {
            // console.warn('Runtime Block "add costume" is currently broken. Please avoid using it until the block is updated.');
            const Asset = vm.runtime.storage.Asset;
            const AssetType = vm.runtime.storage.AssetType;
            const URL = String(args.URL);
            // const COSTUME_SIZE_X = 480; // this will be changed in the future to the ACTUAL image size
            // const COSTUME_SIZE_Y = 360; // this will be changed in the future to the ACTUAL image size
            try {
                if (util.target.isSprite) {
                    const sprite = util.target.sprite;
                    const COSTUMES_CURRENTLY_IN_THE_SPRITE = sprite.costumes.length;
                    const LAST_SKIN_ID = sprite.costumes[sprite.costumes.length - 1].skinId
                    const COSTUME_NAME = "runtime_" + String(encodeURIComponent(URL)).replace(/[^A-Za-z0-9]/gmi, "_").substring(0, 600) + String(10000 + (Math.random() * 99999)) + String(((COSTUMES_CURRENTLY_IN_THE_SPRITE + LAST_SKIN_ID) * 3) + 11);
                    // this.generateMd5Hash(COSTUME_NAME).then(GENERATED_MD5 => {
                    const fetchedImageUrl = String(URL).startsWith("data:image/") ? String(URL) : "https://api.allorigins.win/raw?url=" + encodeURIComponent(URL)
                    fetch(fetchedImageUrl).then(req => {
                        if (req.headers.get("Content-Type") != "image/png" && req.headers.get("Content-Type") != "image/jpeg") return console.warn('Format', req.headers.get("Content-Type"), 'is not supported for costumes');
                        if (req.status == 200) {
                            this.getImageSize(fetchedImageUrl).then(IMAGE_SIZE => {
                                const COSTUME_SIZE_X = IMAGE_SIZE.width;
                                const COSTUME_SIZE_Y = IMAGE_SIZE.height;
                                req.blob().then(blob => {
                                    blob.arrayBuffer().then(arrayBuffer => {
                                        const UINT8ARRAY_COSTUME_DATA = new Uint8Array(arrayBuffer, 0, arrayBuffer.byteLength);
                                        const CONTENT_TYPE = req.headers.get("Content-Type");
                                        const IMAGE_CONTENT_TYPE = /*CONTENT_TYPE == "image/png" ? */"ImageBitmap";// : "ImageVector";
                                        const FILE_EXTENSION = CONTENT_TYPE == "image/png" ? "png" : "jpg";
                                        const ASSET = vm.runtime.storage.createAsset(AssetType[IMAGE_CONTENT_TYPE], FILE_EXTENSION, UINT8ARRAY_COSTUME_DATA, null, true);
                                        const GENERATED_MD5 = ASSET.assetId;
                                        const ROTATION_CENTER = {
                                            x: Math.round(COSTUME_SIZE_X) / 2,
                                            y: Math.round(COSTUME_SIZE_Y) / 2
                                        }
                                        const SKIN_ID = vm.renderer.createBitmapSkin(UINT8ARRAY_COSTUME_DATA, 1, [
                                            ROTATION_CENTER.x,
                                            ROTATION_CENTER.y
                                        ]);
                                        const costumeObject = {
                                            asset: ASSET,
                                            assetId: ASSET.assetId,
                                            bitmapResolution: 1,
                                            dataFormat: FILE_EXTENSION,
                                            md5: GENERATED_MD5 + "." + FILE_EXTENSION,
                                            name: COSTUME_NAME,
                                            rotationCenterX: ROTATION_CENTER.x,
                                            rotationCenterY: ROTATION_CENTER.y,
                                            size: [
                                                COSTUME_SIZE_X,
                                                COSTUME_SIZE_Y
                                            ],
                                            skinId: SKIN_ID
                                        }
                                        sprite.addCostumeAt(costumeObject, COSTUMES_CURRENTLY_IN_THE_SPRITE);
                                        resolve(COSTUME_NAME)
                                    })
                                })
                            })
                        } else {
                            console.warn("Failed to fetch costume");
                        }
                    })
                    // })
                }
            } catch (e) {
                console.warn(e);
            }
        })
    }
    deleteCostume(args, util) {
        const index = (Number(args.COSTUME) ? Number(args.COSTUME) : 1) - 1;
        if (index < 0) return;
        vm.deleteCostume(index);
    }
    setStageSize(args, util) {
        let width = Number(args.WIDTH) || 480;
        let height = Number(args.HEIGHT) || 360;
        if (width <= 0) width = 1;
        if (height <= 0) height = 1;
        if (vm) vm.setStageSize(width, height);
    }
    turboModeEnabled() {
        return vm.runtime.turboMode;
    }
    amountOfClones() {
        return vm.runtime._cloneCounter;
    }
    getStageWidth() {
        return vm.runtime.stageWidth;
    }
    getStageHeight() {
        return vm.runtime.stageHeight;
    }
    getMaxFrameRate() {
        return vm.runtime.frameLoop.framerate;
    }
    setMaxFrameRate(args, util) {
        let frameRate = Number(args.FRAMERATE) || 1;
        if (frameRate <= 0) frameRate = 1;
        if (vm) vm.runtime.frameLoop.setFramerate(frameRate);
    }
}

module.exports = runt;
