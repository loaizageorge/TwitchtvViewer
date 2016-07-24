$(document).ready(function(){
   var streamers = ["GalacticElliot","ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    //var streamers = ["freecodecamp","storbeck", "habathcx"]; 
   
    
    
    
    streamers.forEach(function(streamer){
    
    $.getJSON("https://api.twitch.tv/kraken/streams/"+streamer+"?callback=?",function(streamInfo){
        
        if(streamInfo.stream==null){
            offlineStream(streamer);
            console.log(streamer + "offline");
        }
        else{
            onlineStream(streamInfo);
            console.log(streamer+"online");
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
        $(".content").append("<div class = row>");
        $(".content").append("<div class = col-xs-4 content-center>");
        $(".content").append("<a href = "+channelInfo.url+"> "+streamer+" </a> ");
        $(".content").append("<img src = "+channelInfo.logo+">");
        $(".content").append("<p>Offline</p>");
        $(".content").append("</div>");
        $(".content").append("</div>");
        
        });
    
    
}

function onlineStream(data){
            $(".content").append("<div class = row>");
        $(".content").append("<div class = col xs-4 content-center>");
        $(".content").append("<a href = "+data.stream.channel.url+"> "+data.stream.channel.display_name+" </a> ");
        $(".content").append("<img src = "+data.stream.channel.logo+">");
        $(".content").append("<p>"+data.stream.channel.status+"</p>");
        $(".content").append("</div>");
        $(".content").append("</div>");
    
    
}

