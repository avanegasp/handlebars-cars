var source = $('#template_person').html();
var template = Handlebars.compile(source);


var cars =[
            { "name": "Jaguar XE 2.0", "imageUrl": "https://s3.amazonaws.com/makeitreal/cars/jaguar-xe.jpg", "released": 2014, "power": 200, "weight": 1530, "turbo": true, "speed": 237 },
            { "name": "BMW 650i xDrive Cabrio", "imageUrl": "https://s3.amazonaws.com/makeitreal/cars/bmw-6.jpg", "released": 2015, "power": 450, "weight": 1955, "turbo": true, "speed": 250 },
            { "name": "Audi S6 4.0 TFSI quattro", "imageUrl": "https://s3.amazonaws.com/makeitreal/cars/audi-s6.jpg", "released": 2014, "power": 450, "weight": 1870, "turbo": true, "speed": 250 },
            { "name": "Mini Countryman Cooper", "imageUrl": "https://s3.amazonaws.com/makeitreal/cars/mini-countryman.jpg", "released": 2014, "power": 122, "weight": 1240, "turbo": false, "speed": 191 },
            { "name": "Volvo V40 D3 Summum", "imageUrl": "https://s3.amazonaws.com/makeitreal/cars/volvo-v40.jpg", "released": 2015, "power": 150, "weight": 1337, "turbo": true, "speed": 190 }
          ];


var html = template({'car':cars});

$('.container').html(html);
