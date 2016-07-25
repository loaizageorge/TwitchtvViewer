
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
        $(".content-offline").append("<div class = row>");
       $(".content-offline").append("<div class = col-xs-4 >");
        $(".content-offline").append("<a href = "+channelInfo.url+"> "+streamer+" </a> ");
        $(".content-offline").append("<img src = "+channelInfo.logo+">");
        $(".content-offline").append("<p>Offline</p>");
        $(".content-offline").append("</div>");
        $(".content-offline").append("</div>");
         $(".content-offline").append("</div>");
        
        });
    
    
}

function onlineStream(data){
        $(".content-online").append("<div class = row>");
      $(".content-online").append("<div class = col-xs-4 >");
        $(".content-online").append("<a href = "+data.stream.channel.url+"> "+data.stream.channel.display_name+" </a> ");
        $(".content-online").append("<img src = "+data.stream.channel.logo+">");
        $(".content-online").append("<p>"+data.stream.channel.status+"</p>");
        $(".content-online").append("</div>");
        $(".content-online").append("</div>");
     $(".content-online").append("</div>");
    
    
}

function hideOnline(){
     $(".content-offline").hide();
}
     
   
