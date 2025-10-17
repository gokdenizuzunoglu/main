const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 320;
canvas.height = 320;

ctx.fillStyle = "red";
ctx.begin();
ctx.arc(160, 160, 100, 0, 2*Math.PI);
ctx.fill();

ctx.fillStyle = "white";
ctx.fillText("BM101 Lab'a Selamlar!", 80, 150);
