//global
var isNight = true;
var isImageLeft = true;

$(document).ready(function(){

});
function getIcon(role){
    //role will be werewolf... mason.. etc
    var iconHtml = '<img src="http://onenightultimate.com/wp-content/uploads/2015/08/' + role.replace(/ /g,'');
    iconHtml += (role == 'mason') ? '.png"/>' : '.jpg"/>';
    return iconHtml;
}
function addEntry(role){
    //timeOfDay will be either night or day
    //text will be each person's text
    var timeOfDay = (isNight) ? "night" : "day";
    var text = "this person's turn is over";
    var entryHtml = (isImageLeft) ? '<div class="' + timeOfDay + ' entries"><div class="image">' + getIcon(role) + '</div><div class="comments"><p>' + text + '</p></div></div>' : '<div class="' + timeOfDay + ' entries"><div class="comments"><p>' + text + '</p></div><div class="image">' + getIcon(role) + '</div></div>';
    isImageLeft = !isImageLeft;
    $('#content').append(entryHtml);
}
function dayChange(){
    //will be called to change all the css regarding day changes
    var changeDiv = "";
    if(isNight){
        var changeDiv = '<div class="dayChange day"><p>It is day yo</p></div>';
    }
    else{
        var changeDiv = '<div class="dayChange night"><p>It is night bruh</p></div>';
    }
    
    $('#content').append(changeDiv);
    $('h1').each(function(){
        if(isNight){
            $(this).removeClass("nightView");
        }
        else{
            $(this).addClass("nightView");
        }
    });
    $('p').each(function(){
        if(isNight){
            $(this).removeClass("nightView");
        }
        else{
            $(this).addClass("nightView");
        }
    });
    console.log(isNight);
    isNight = !isNight;
    if(isNight){
        $('body').css("background-image","url('http://img11.deviantart.net/2179/i/2013/195/d/5/dark_forest_by_calthyechild-d6dixhs.jpg'");
    }
    else{
    //    replace with ur backgrounds pls
        $('body').css("background-image","none");
    }
    isImageLeft = true;
}

