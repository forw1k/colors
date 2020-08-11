function hexFromRGB(r, g, b) {
    let hex = [r.toString(16), g.toString(16), b.toString(16)];
    $.each(hex, function (index, value) {
    if (value.length === 1) {
        hex[index] = "0" + value;
    }
    });
    return hex.join("").toUpperCase();
}

$(document).ready(function () {
    let myColor = 'color';

    $(function () {
    $("#red, #green, #blue").slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 100,
        slide: refreshTextColor,
        change: refreshTextColor,
    });
    $("#red").slider("value", 240);
    $("#green").slider("value", 240);
    $("#blue").slider("value", 255);
    });

    function refreshTextColor() {
    let red = $("#red").slider("value"),
        green = $("#green").slider("value"),
        blue = $("#blue").slider("value"),
        hex = hexFromRGB(red, green, blue);
    $("#area").css(myColor, "#" + hex);
    }

    $("#buttons")
    .children()
    .click(function (e) {
        $(".focus").removeClass("focus");
        $(this).addClass("focus");
        if (myColor === 'color') {
        myColor = 'background-color'
        } else {
        myColor = 'color'
        }
    });
});