$(function(){
    const showParking = function () {
        window.location.href = '/parking'
    }
    
    const showWeather = function () {
        window.location.href = '/weather'
    }
    
    const showChat = function () {
        window.location.href = '/chat'
    }
    
    const showLogin = function () {
        window.location.href = '/login'
    }

    $(function() {
        $('.nav-button').on("click",
            function() {
                $(".navbar").addClass("d-none");
                $('.nav-button').addClass("d-none");
                $('.nav-button2').removeClass("d-none");
            }
        )
        
    })

    $(function() {
        $('.nav-button2').on("click",
            function() {
                $(".navbar").removeClass("d-none");
                $('.nav-button2').addClass("d-none");
                $('.nav-button').removeClass("d-none");
            }
        )
        
    })

$(function(){
    $('.zoombtn').on("click",
    function(){
        $(".modal").removeClass("d-none");
    })

    $(".close").on("click",
    function(){
        $(".modal").addClass("d-none");
    })
})
    
    $('.parkingDir').on('click', showParking);
    $('.weatherDir').on('click', showWeather);
    $('.watsonDir').on('click', showChat);
    $('.loginDir').on('click', showLogin);
})

