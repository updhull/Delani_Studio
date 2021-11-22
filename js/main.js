$(document).ready(function(){
    $("#image").click(function(){
        $("#design").toggle();
        $("#design").click(function(){
            $(".four").toggle();
        });
       
    });
    $(document).ready(function(){
        $("#image1").click(function(){
            $("#development").toggle();
            $("#development").click(function(){
                $(".five").toggle();
            });
        });
    $(document).ready(function(){
        $("#image2").click(function(){
            $("#management").toggle();
            $("#management").click(function(){
                $(".six").toggle();
            });
            

        });
    });
});
});
// Portfolio overlays
$(document).ready(function(){
    $(".work1").mouseover(function(){
        $("#ten").show();
    });
    $(".work1").mouseout(function(){
        $("#ten").hide();
    });

    $(".work2").mouseover(function(){
        $("#eleven").show();
    });
    $(".work2").mouseout(function(){
        $("#eleven").hide();
    });
    $(".work3").mouseover(function(){
        $("#twelve").show();
    });
    $(".work3").mouseout(function(){
        $("#twelve").hide();
    });
    $(".work4").mouseover(function(){
        $("#thirteen").show();
    });
    $(".work4").mouseout(function(){
        $("#thirteen").hide();
    });
    $(".work5").mouseover(function(){
        $("#fourteen").show();
    });
    $(".work5").mouseout(function(){
        $("#fourteen").hide();
    });
    $(".work6").mouseover(function(){
        $("#fifteen").show();
    });
    $(".work6").mouseout(function(){
        $("#fifteen").hide();
    });
    $(".work7").mouseover(function(){
        $("#sixteen").show();
    });
    $(".work7").mouseout(function(){
        $("#sixteen").hide();
    });
    $(".work8").mouseover(function(){
        $("#seventeen").show();
    });
    $(".work8").mouseout(function(){
        $("#seventeen").hide();
    });
});



