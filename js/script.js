



$(document).ready(function(){

    VanillaTilt.init(document.querySelector(".glassmorphic-card"), {
        max: 15,
        speed: 200,
        glare: true,
        "max-glare": 1,
    });


    $('button').click(function(e){
        e.preventDefault();
        const v = $('#s').val();
        $(".avatar").attr("src",`https://joeschmoe.io/api/v1/${v}`);
        $("#s").trigger('reset');
        $(".msg").text(`Hii ${v}`)
        // $(".avatar-container").append(`<a href="https://joeschmoe.io/api/v1/${v}">Download</a>`);
    });



});

