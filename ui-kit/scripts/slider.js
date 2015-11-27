$.fn.slider = function () {
  let $parent = $(this),
      parentOffSet = $parent.position().left,
      parentWidth = $parent.width();

  this.on('mousedown','.toggle', function(e) {
    let $this = $(this),
        toggleOffset = e.pageX - $this.position().left,
        toggleWidth = $this.width();

    move(e);

    $(document).on('mousemove', move);
    $(document).on('mouseup', () => $(document).off('mousemove', move));

    function move(e) {
      let val = e.pageX - toggleOffset - parentOffSet,
          max = parentWidth - toggleWidth;

      if (val < 0) val = 0;
      if (val > max) val = max;

      $parent.find('.p-bar-loader').width(val + toggleWidth);
      $this.css({left: val});
    }
  });
};