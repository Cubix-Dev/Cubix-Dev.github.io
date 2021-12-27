//the following script is by ShipMasterKyle. i did not make this script. i am only hosting it on this server for testing purposes and i will delete this as soon as this test has served it's purpose.

class SNVideo {
    getInfo(){
        return {
            "id": "SNVideo",
            "name": "Video Player",
            "blocks": [{
                "opcode": "play", //This will be the ID code for the block
                "blockType": "command",
                "text": "Play video [id] with embed size [x] , [y]",
                "arguments":{
                    "id": {
                        "type": "string",
                        "defaultValue": "YouTube Video ID",
                    },
                    "x": {
                        "type": "number",
                        "defaultValue": "480"
                    },
                    "y": {
                        "type": "number",
                        "defaultValue": "360"
                    }
                },
            ],
            "menus": {
            }
        };
      play({id,x,y}) {
          var ifrm = document.createElement("iframe");
          ifrm.width = x;
          ifrm.height = y;
          ifrm.id = "youtube"
          ifrm.src="https://www.youtube.com/embed/"+ id
          ifrm.frameBorder="0"
          ifrm.allow="autoplay"
          document.body.appendChild(ifrm);
      };
    }
}
Scratch.extensions.register(new SNVideo());

// (function(ext) {
//     // Cleanup function when the extension is unloaded
//     ext._shutdown = function() {};
 
//     // Status reporting code
//     // Use this to report missing hardware, plugin or unsupported browser
//     ext._getStatus = function() {
//         return {status: 2, msg: 'Ready'};
//     };
// ext.playaudiofromyoutube = function(videoid,starttime,endtime){
// function createFrame(vid,start,end) {
        
// ifrm.width = 0;
// ifrm.id = "youtube"
//         ifrm.height = 0;
// ifrm.src="https://www.youtube.com/embed/"+ vid +"?start="+start+"&end="+end+";autoplay=true"
//         ifrm.frameBorder="0"
//         ifrm.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//         document.body.appendChild(ifrm);
//     }
//         createFrame(videoid,starttime,endtime)
// };
// ext.stopyoutubeaudio = function(){
// function removeElement(elementId) {
//     var getelement = document.getElementById(elementId);
//     getelement.parentNode.removeChild(getelement);
// }
// removeElement("youtube")
// };
 
 
//     // Block and block menu descriptions
//     var descriptor = {
//         blocks: [
// [' ','play audio from youtube video ID: %s start time: %n end time: %n','playaudiofromyoutube'],
// [' ','stop youtube audio','stopyoutubeaudio'],
//         ],
//         url: 'https://boomerscratch.github.io/javascripts/youtubeaudioextensiondocumentation.mp4'
//     };
 
//     // Register the extension
    
// })({});
