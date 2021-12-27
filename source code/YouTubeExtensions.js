(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};
 
    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
ext.playaudiofromyoutube = function(videoid,starttime,endtime){
function createFrame(vid,start,end) {
        var ifrm = document.createElement("iframe");
ifrm.width = 0;
ifrm.id = "youtube"
        ifrm.height = 0;
ifrm.src="https://www.youtube.com/embed/"+ vid +"?start="+start+"&end="+end+";autoplay=true"
        ifrm.frameBorder="0"
        ifrm.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        document.body.appendChild(ifrm);
    }
        createFrame(videoid,starttime,endtime)
};
ext.stopyoutubeaudio = function(){
function removeElement(elementId) {
    var getelement = document.getElementById(elementId);
    getelement.parentNode.removeChild(getelement);
}
removeElement("youtube")
};
 
 
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
[' ','play audio from youtube video ID: %s start time: %n end time: %n','playaudiofromyoutube'],
[' ','stop youtube audio','stopyoutubeaudio'],
        ],
        url: 'https://boomerscratch.github.io/javascripts/youtubeaudioextensiondocumentation.mp4'
    };
 
    // Register the extension
    ScratchExtensions.register('YouTube Extensions', descriptor, ext);
})({});
