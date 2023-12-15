var textString = document.getElementById("text_input").value;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var Dropdown = document.getElementById("ImageChoice");

CreateImage();
document.getElementById('button').addEventListener("click", () => {
    CreateImage();
})

function CreateImage() {
    var background = new Image();
    var value = Dropdown.value;
    background.src = "images_modified/JPEG/Kagia " + value + ".jpg";
    background.onload = function () {
        ctx.drawImage(background, 0, 0, c.width, c.height)
        ctx.font = "64px Calibri";
        drawStroked();
        //ctx.fillText(textString, 200, 650);
    };
}
function drawStroked() {
    textString = document.getElementById("text_input").value;
    const stringArray = textString.split("#")
    ctx.font = '64px Calibri';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 8;
    for (var i = 0; i < stringArray.length; i++) {
        var pos = 450 + (50 * i);
        var textWidth = ctx.measureText(stringArray[i]).width;
        var Position_H = (c.width / 2) - (textWidth / 2)
        ctx.strokeText(stringArray[i], Position_H, pos);
        ctx.fillStyle = 'white';
        ctx.fillText(stringArray[i], Position_H, pos);
    }


}
document.getElementById('download').addEventListener('click', function (e) {
    // Convert our canvas to a data URL
    let canvasUrl = c.toDataURL();
    // Create an anchor, and set the href value to our data URL
    const createEl = document.createElement('a');
    createEl.href = canvasUrl;

    // This is the name of our downloaded file
    createEl.download = "kagia-download";

    // Click the download button, causing a download, and then remove it
    createEl.click();
    createEl.remove();
});
