﻿function Graph(width, height) {

    var canvas = document.getElementById('lawer');
    canvas.width = width || 300;
    canvas.height = height || 300;
    var context = canvas.getContext("2d");

    this.fillRect = function (color) {
        context.fillStyle = color || "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
    };

    this.line = function (x1, y1, x2, y2, color) {
        context.beginPath();
        context.strokeStyle = color || "black";
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    };

    this.circle = function (x, y, r, color) {
        context.beginPath();
        context.strokeStyle = color || "black";
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.stroke();
    };
	
    //закрашенное тело
    this.rect = function (x, y, width, height, color) { 
        context.beginPath();
        context.strokeStyle = color || "black";
        context.fillStyle = color || "black";
        context.fillRect(x, y, width, height);
        context.rect(x, y, width, height);
        context.stroke();
    };

    //прозрачное тело
    this.rect1 = function (x, y, width, height, color) {
        context.beginPath();
        context.strokeStyle = color || "black";
        context.rect(x, y, width, height);
        context.stroke();
    };

    this.fillSmallRect = function (x, y, width, height, color) {
        context.beginPath();
        context.strokeStyle = color || "black";
        context.fillStyle   = color || "black";
        context.fillRect(x, y, width, height);
        context.stroke();
    };

    this.text = function (text, x, y, color) {
        context.fillStyle = color || "black";
        context.font = "15px Georgia";
        context.fillText(text, x, y);
    };

    this.sprite = function (img, sx, sy, swidth, sheight, x, y, width, height) {
        context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
    };
	
	
    this.sprite1 = function (img2,  x, y, width, height) {
        context.drawImage(img2,  x, y, width, height);
    };

}