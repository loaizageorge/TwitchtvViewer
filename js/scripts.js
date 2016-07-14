$(document).ready(function(){
    
    $.getJSON('https://api.twitch.tv/kraken/streams/eleaguetv?callback=?',function(data){
        console.log(data.stream.game);
    });
});