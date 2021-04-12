$.get("https://5dc588200bbd050014fb8ae1.mockapi.io/assessment", function(data, status){

    //console.log(data);

    var template = $('#exercise-1').html();

    var context = {
        "project" : "Exercise 1",
        "names" : data
    }

    var templateScript = Handlebars.compile(template);
    var html = templateScript(context);

    $(document.body).append(html);

    $("div.moreInfo").toggle();

    $("li").click(function (){
        $( this ).find("div.moreInfo").toggle();
    s})
});
