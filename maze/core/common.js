(function ($) {
  "use strict";
  var canvas, ctx, img, imgPixels, model, paintOne,
      modelFormer, mazeCellProcessor, passMaze, MAZE_W,
      WALL, PROCCESED, EMPTY, COLOR, MAZE_H;
  /**
   * Constants
   * Canvas element width and height
   * Cell's status code
   * @type {number}
  */
  MAZE_W = 601;
  MAZE_H = 601;
  WALL = 1;
  EMPTY = 0;
  PROCCESED = 3;
  COLOR = '0,211,96,204'.split(',');
  model = [];

  mazeCellProcessor = function (x, y) {
    var k = 0;

    if (model[x][y] === EMPTY) {

      if (model[x - 1][y] !== EMPTY) { k++; }
      if (model[x][y - 1] !== EMPTY) { k++; }
      if (model[x + 1][y] !== EMPTY) { k++; }
      if (model[x][y + 1] !== EMPTY) { k++; }

      if (k === 4) { model[x][y] = PROCCESED; }

      if (k === 3) {
        model[x][y] = PROCCESED;

        if (model[x - 1][y] === EMPTY) { mazeCellProcessor(x - 1, y); }
        if (model[x][y - 1] === EMPTY) { mazeCellProcessor(x, y - 1); }
        if (model[x + 1][y] === EMPTY) { mazeCellProcessor(x + 1, y); }
        if (model[x][y + 1] === EMPTY) { mazeCellProcessor(x, y + 1); }
      }
    }
  };

  modelFormer = function (data) {
    var t = [], i;
    for (i = 0; i < data.length; i += 4) {
      data[i] === 255 ? t.push(EMPTY) : t.push(WALL);

      if (t.length + 1 > MAZE_W) {
        model.push(t);
        t = [];
      }
    }
  };

  passMaze = function () {
    var x, y;

    for (x = 1; x < model.length - 1; x++) {
      for (y = 1; y < model[x].length - 1; y++) {
        mazeCellProcessor(x, y);
      }
    }
  };

  paintOne = function (x, y) {
    var pxl;
    pxl = ctx.getImageData(x, y, 1, 1);
    pxl.data[0] = COLOR[0];  // R
    pxl.data[1] = COLOR[1];  // G
    pxl.data[2] = COLOR[2];  // B
    pxl.data[3] = COLOR[3];  // a
    ctx.putImageData(pxl, x, y);
  };

  //Render img from jpg format to canvas
  img =  $('<img/>').attr('src', "imgs/maze.jpg")[0];
  canvas = $('#maze');
  ctx = canvas[0].getContext("2d");
  /**
   * After original image load start maze's image
   * pixels process and build data model.
   */
  img.onload = function () {
    canvas.attr({'width': MAZE_W, 'height': MAZE_H});
    ctx.drawImage(img, 0, 0, MAZE_W, MAZE_H);
    imgPixels = ctx.getImageData(0, 0, MAZE_W, MAZE_H);
    modelFormer(imgPixels.data);
    passMaze();

    for (var x = 0; x < model.length; x++) {
      for (var y = 0; y < model[x].length; y++) {
        model[x][y] === EMPTY ? paintOne(x, y) : false;
      }
    }
  };
})(jQuery);