var shape = shape || {};

shape.Cylinder = function(element) {
    var ctx;
    var canvas;
    var percent;

    this.init = function init(width, height) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
    };

    this.setFill = function(percent) {
        this.percent = percent;

        this.updateCylinder();
        //maximum is 150 - 130
    };

    this.setWidth = function(width) {
        this.canvas.width = width;

        this.updateCylinder();
    };

    this.setHeight = function(height) {
        this.canvas.height = height;

        this.updateCylinder();
    };

    this.updateCylinder = function() {
      this.ctx = this.canvas.getContext("2d");

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawCylinder(0, 0, this.canvas.width, this.canvas.height, this.percent);
    };

    this.drawCylinder = function(x, y, w, h, fillPercent) {
        'use strict';

        var i, xPos, yPos, pi = Math.PI,
            twoPi = 2 * pi,
            topH = 15,
            fill = (h - 2 * topH) * fillPercent;

        this.ctx.beginPath();

        for (i = 0; i < twoPi; i += 0.001) {
            xPos = (x + w / 2) - (w / 2 * Math.cos(i));
            yPos = (y + topH) + (topH * Math.sin(i));

            if (i === 0) {
                this.ctx.moveTo(xPos, yPos);
            } else {
                this.ctx.lineTo(xPos, yPos);
            }
        }

        this.ctx.moveTo(x, y + topH);
        this.ctx.lineTo(x, y + h - topH);

        for (i = 0; i < pi; i += 0.001) {
            xPos = (x + w / 2) - (w / 2 * Math.cos(i));
            yPos = (y + h - topH) + (topH * Math.sin(i));

            if (i === 0) {
                this.ctx.moveTo(xPos, yPos);
            } else {
                this.ctx.lineTo(xPos, yPos);
            }
        }

        this.ctx.moveTo(x + w, y + topH);
        this.ctx.lineTo(x + w, y + h - topH);

        this.ctx.stroke();

        //print filled part
        var fillLevel = y + topH + h - fill;

        this.ctx.beginPath();

        var firstX, firstY;

        for (i = 0; i < pi; i += 0.001) {
            xPos = (x + w / 2) - (w / 2 * Math.cos(i));
            yPos = (y + h - topH - fill) + (topH * Math.sin(i));

            if (i === 0) {
                this.ctx.moveTo(xPos, yPos);
                firstX = xPos;
                firstY = yPos;
            } else {
                this.ctx.lineTo(xPos, yPos);
            }
        }

        this.ctx.lineTo(x + w, y + h - topH - fill);
        this.ctx.lineTo(x + w, y + h - topH);

        for (i = 0; i < pi; i += 0.001) {
            xPos = (x + w / 2) - (w / 2 * Math.cos(i));
            yPos = (y + h - topH) + (topH * Math.sin(i));

            if (i === 0) {
                this.ctx.lineTo(xPos, yPos);
            } else {
                this.ctx.lineTo(xPos, yPos);
            }
        }

        this.ctx.lineTo(x, y + h - topH);
        this.ctx.lineTo(x, y + h - topH - fill);
        this.ctx.lineTo(firstX, firstY);

        this.ctx.fillStyle = "red";

        this.ctx.fill();
    };


    this.init(100, 200);

    element.appendChild(this.canvas);
}
