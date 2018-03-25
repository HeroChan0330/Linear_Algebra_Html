function Init(){
    $("li.naviContent").mousemove(function(){
        $(this).css("background-color","209af5");
    });
    $("li.naviContent").mouseout(function(){
        $(this).css("background-color","transparent");
    });
}