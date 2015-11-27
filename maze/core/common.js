(function ($) {
  "use strict";
  var canvas, ctx, img, imgPixels, model, paintOne, attachLoader,
      modelFormer, mazeCellProcessor, passMaze, start_btn, oneHandAlgorithm,
      MAZE_W, WALL, PROCESSED, EMPTY, COLOR, MAZE_H;
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
  PROCESSED = 2;
  COLOR = [0, 211, 96, 204]; // RGBa format
  model = [];

  /**
   * Algorithm that check neighbors and call again if neighbors have EMPTY
   * no processed item
   * @param x integer
   * @param y integer
   */
  mazeCellProcessor = function (x, y) {
    var k = 0;

    if (model[x][y] === EMPTY) {

      if (model[x - 1][y] !== EMPTY) { k++; }
      if (model[x][y - 1] !== EMPTY) { k++; }
      if (model[x + 1][y] !== EMPTY) { k++; }
      if (model[x][y + 1] !== EMPTY) { k++; }

      if (k === 4) { model[x][y] = PROCESSED; }

      if (k === 3) {
        model[x][y] = PROCESSED;

        if (model[x - 1][y] === EMPTY) { mazeCellProcessor(x - 1, y); }
        if (model[x][y - 1] === EMPTY) { mazeCellProcessor(x, y - 1); }
        if (model[x + 1][y] === EMPTY) { mazeCellProcessor(x + 1, y); }
        if (model[x][y + 1] === EMPTY) { mazeCellProcessor(x, y + 1); }
      }
    }
  };
  /**
   * Processed data with colors and form model
   * @param data Array with pixels colors in RGBa format
   */
  modelFormer = function (data) {
    var t = [], i;
    for (i = 0; i < data.length; i += 4) {
      data[i] === 255 ? t.push(EMPTY) : t.push(WALL);
      // Row should't be larger then maze width
      if (t.length + 1 > MAZE_W) {
        model.push(t);
        t = [];
      }
    }
  };
  /**
   * Processed model and render the solution way on the image
   */
  passMaze = function () {
    var x, y;
    // Adding loader to the button
    attachLoader(true);
    setTimeout(function () {
      for (x = 1; x < model.length - 1; x++) {
        for (y = 1; y < model[x].length - 1; y++) {
          mazeCellProcessor(x, y);
        }
      }
      //apply model changes to view
      model.forEach(function (row, i) {
        row.forEach(function (pxl, j) {
          pxl === EMPTY ? paintOne(j, i) : false;
        });
      });
      // Detach loader img after maze prossed
      attachLoader();
    }, 100);
  };
  /**
   * Get pixel in the page and apply the color in RGBa format
   * @param x integer
   * @param y integer
   */
  paintOne = function (x, y) {
    var pxl;
    pxl = ctx.getImageData(x, y, 1, 1);
    pxl.data[0] = COLOR[0];  // R
    pxl.data[1] = COLOR[1];  // G
    pxl.data[2] = COLOR[2];  // B
    pxl.data[3] = COLOR[3];  // a
    ctx.putImageData(pxl, x, y);
  };
  /**
   * Loader image attach function
   */
  attachLoader = function(flag) {
    flag ? start_btn.addClass('action').text(' ') :
           start_btn.removeClass('action').text('Done').attr('disabled', 'disabled');
  };
  //Render img from jpg format to canvas
  img =  $('<img/>').attr('src', "imgs/maze.jpg")[0];
  start_btn = $('.start');
  canvas = $('#maze');
  // Get canvas context and add event listener to init button
  ctx = canvas[0].getContext("2d");
  start_btn.click(passMaze);
  /**
   * After original image load start maze's image
   * pixels process and build data model.
   */
  img.onload = function () {
    canvas.attr({'width': MAZE_W, 'height': MAZE_H});
    ctx.drawImage(img, 0, 0, MAZE_W, MAZE_H);
    imgPixels = ctx.getImageData(0, 0, MAZE_W, MAZE_H);
    modelFormer(imgPixels.data);
    // show init button
    start_btn.show();
  };
})(jQuery);