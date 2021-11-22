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

 