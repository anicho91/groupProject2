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
    
    $('.parkingDir').on('click', showParking);
    $('.weatherDir').on('click', showWeather);
    $('.watsonDir').on('click', showChat);
    $('.loginDir').on('click', showLogin);
})

