var showCars = function() {
    var source = $('#template_cars').html();
    var template = Handlebars.compile(source);

    $.getJSON("https://s3.amazonaws.com/makeitreal/cars.json").done(function (cars){
      $(".cars").html(template({car:cars}))
  });
};


$('button').on('click', function(){
    showCars()
     $(this).hide();
});
