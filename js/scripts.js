$(document).ready(function(){
    var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var titles = [];
    var descriptions =[];
    var logoUrls = [];
    var urls = [];
    var user  = streamers[0];
    
    
    streamers.forEach(function(streamer){
    
    $.getJSON("https://api.twitch.tv/kraken/streams/"+streamer+"?callback=?",function(data){
        alert(streamer);
        //console.log(data.stream);
        //var spaghetti = JSON.stringify(data.stream);
        //$("#streamer").html(data.stream.channel.display_name);
        //$("#description").html(data.stream.channel.status);
        
    });
});

});