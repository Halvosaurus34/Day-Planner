//setting time and date
$('#top-date').text(moment().format("MMM Do YYYY"))
$('#top-time').text(moment().format('LT'))

//reloading time and date every second
setInterval(function( ){
$('#top-date').text(moment().format("MMM Do YYYY"))
$('#top-time').text(moment().format('LT'))
}, 1000)

//setting values to local storage
$('#text1').val(localStorage.text1)
$('#text2').val(localStorage.text2)
$('#text3').val(localStorage.text3)
$('#text4').val(localStorage.text4)
$('#text5').val(localStorage.text5)
$('#text6').val(localStorage.text6)
$('#text7').val(localStorage.text7)
$('#text8').val(localStorage.text8)
$('#text9').val(localStorage.text9)

//saving input values
$('#save1').on('click', function(){
    localStorage.text1 = $('#text1').val()
})

$('#save2').on('click', function(){
    localStorage.text2 = $('#text2').val()
})

$('#save3').on('click', function(){
    localStorage.text3 = $('#text3').val()
})

$('#save4').on('click', function(){
    localStorage.text4 = $('#text4').val()
})

$('#save5').on('click', function(){
    localStorage.text5 = $('#text5').val()
})

$('#save6').on('click', function(){
    localStorage.text6 = $('#text6').val()
})

$('#save7').on('click', function(){
    localStorage.text7 = $('#text7').val()
})

$('#save8').on('click', function(){
    localStorage.text8 = $('#text8').val()
})

$('#save9').on('click', function(){
    localStorage.text9 = $('#text9').val()
})

if (moment().hour() == 9 ) {
    $('#text1').attr('style', 'background-color: lightgreen;')
}

if (moment().hour() > 9 ) {
    $('#text1').attr('style', 'background-color: lightgrey;')
}

if (moment().hour() < 9 ) {
    $('#text1').attr('style', 'background-color: lightsalmon;')
}


if (moment().hour() == 10 ) {
    $('#text2').attr('style', 'background-color: lightgreen;')
}

if (moment().hour() > 10 ) {
    $('#text2').attr('style', 'background-color: lightgrey;')
}

if (moment().hour() < 10 ) {
    $('#text2').attr('style', 'background-color: lightsalmon;')
}

if (moment().hour() == 11 ) {
    $('#text3').attr('style', 'background-color: lightgreen;')
}

if (moment().hour() > 11 ) {
    $('#text3').attr('style', 'background-color: lightgrey;')
}

if (moment().hour() < 11 ) {
    $('#text3').attr('style', 'background-color: lightsalmon;')
}

if (moment().hour() == 12 ) {
    $('#text4').attr('style', 'background-color: lightgreen;')
}

if (moment().hour() > 12 ) {
    $('#text4').attr('style', 'background-color: lightgrey;')
}

if (moment().hour() < 12 ) {
    $('#text4').attr('style', 'background-color: lightsalmon;')
}

if (moment().hour() == 13 ) {
    $('#text5').attr('style', 'background-color: lightgreen;')
}

if (moment().hour() > 13 ) {
    $('#text5').attr('style', 'background-color: lightgrey;')
}

if (moment().hour() < 13 ) {
    $('#text5').attr('style', 'background-color: lightsalmon;')
}

if (moment().hour() == 14 ) {
    $('#text6').attr('style', 'background-color: lightgreen;')
}

if (moment().hour() > 14 ) {
    $('#text6').attr('style', 'background-color: lightgrey;')
}

if (moment().hour() < 14 ) {
    $('#text6').attr('style', 'background-color: lightsalmon;')
}

if (moment().hour() == 15 ) {
    $('#text7').attr('style', 'background-color: lightgreen;')
}

if (moment().hour() > 15 ) {
    $('#text7').attr('style', 'background-color: lightgrey;')
}

if (moment().hour() < 15 ) {
    $('#text7').attr('style', 'background-color: lightsalmon;')
}

if (moment().hour() == 16 ) {
    $('#text8').attr('style', 'background-color: lightgreen;')
}

if (moment().hour() > 16 ) {
    $('#text8').attr('style', 'background-color: lightgrey;')
}

if (moment().hour() < 16 ) {
    $('#text8').attr('style', 'background-color: lightsalmon;')
}

if (moment().hour() == 17 ) {
    $('#text9').attr('style', 'background-color: lightgreen;')
}

if (moment().hour() > 17 ) {
    $('#text9').attr('style', 'background-color: lightgrey;')
}

if (moment().hour() < 17 ) {
    $('#text9').attr('style', 'background-color: lightsalmon;')
}