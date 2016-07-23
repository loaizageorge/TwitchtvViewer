$(document).ready(function(){
   // var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var streamers = ["freecodecamp","storbeck", "habathcx"]; 
    var titles = [];
    var descriptions =[];
    var logoUrls = [];
    var urls = [];
    var user  = streamers[0];
    
    
    streamers.forEach(function(streamer){
    
    $.getJSON("https://api.twitch.tv/kraken/streams/freecodecamp?callback=?",function(streamInfo){
        
        if(streamInfo.stream==null){
            offlineStream(streamer);
        }
        else{
            onlineStream(streamInfo);
        }
        
       
       
        
        
        
    });
        
         //console.log(data.stream);
        //var spaghetti = JSON.stringify(data);
        //$("#streamer").html(data.stream.channel.display_name);
        //$("#description").html(data.stream.channel.status);
       
});
   

});

function offlineStream(streamer){
    $.getJSON("https://api.twitch.tv/kraken/channels/"+streamer+"?callback=?",function(channelInfo){
        
        //console.log(JSON.stringify(channelInfo));
        //console.log(channelInfo.logo);
        //$(".content").append("<h3>"+channelInfo.+"</h3>")
        $(".content").append("<a href = "+channelInfo.url+"> "+streamer+" </a> ");
        $(".content").append("<img src = "+channelInfo.logo+">");
        
        });
    
    
}

function onlineStream(data){
    
}

