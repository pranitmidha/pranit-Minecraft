var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;
playerx = 10;
playery = 10;
player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Image) {
        player_object = Image;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: playery,
            left: playerx
        });
        canvas.add(player_object)
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Image) {
        image_object = Image;
        image_object.scaleToWidth(block_image_width);
        image_object.scaleToHeight(block_image_height);
        image_object.set({
            top: playery,
            left: playerx
        });
        canvas.add(image_object)
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == "80") {
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keypressed == "77") {
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keypressed == "38") {
        up();
    }
    if (keypressed == "40") {
        down();
    }

    if (keypressed == "37") {
        left();
    }

    if (keypressed == "39") {
        right();

    }

    if (keypressed == "84") {
        new_image("trunk.jpg");

    }
    if (keypressed == "85") {
        new_image("unique.png");
    }
    if (keypressed == "87") {
        new_image("wall.jpg");
    }
    if (keypressed == "89") {
        new_image("yellow_wall.png");
    }
    if (keypressed == "82") {
        new_image("roof.jpg");

    }
    if (keypressed == "76") {
        new_image("light_green.png");
    }
    if (keypressed == "71") {
        new_image("ground.png");
    }
    if (keypressed == "68") {
        new_image("dark_green.png");
    }
    if (keypressed == "67") {
        new_image("cloud.jpg");
    }

    function up() {
        if (playery >= 0) {
            playery = playery - 10;
            console.log("When up arrow is pressed, x = " + playerx + " | y = " + playery);
            canvas.remove(player_object);
           player_update();
        }
    }

    function down() {
        if (playery <= 900) {
            playery = playery + 10;
            console.log("When down arrow is pressed, x = " + playerx + " | y = " + playery);
            canvas.remove(player_object);
            player_update();
            
        }
    }

    function left() {
        if ( playerx>= -60) {
            playerx = playerx - 10;
            console.log("When left arrow is pressed, x = " + playerx + " | y = " + playery);
            canvas.remove(player_object);
            player_update();
           
        }
    }

    function right() {
        if (playerx <= 900) {
            playerx = playerx + 10;
            console.log("When right arrow is pressed, x = " + playerx + " | y = " + playery);
            canvas.remove(player_object);
            player_update();
            
        }
    }
}