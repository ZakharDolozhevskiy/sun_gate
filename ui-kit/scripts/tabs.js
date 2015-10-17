export function addTabs($el) {
  let $controls = $el.find('.tabset'),
      $tabs = $el.find('.tab');

  $controls.on('click','li', function(e) {
    e.preventDefault();
    $controls.children().each(function (i, el) { e.currentTarget === el ? activateTab(i) : false; });
  });

  function activateTab(n) {
    $tabs.removeClass('active').animate({ opacity: 0 })
      .eq(n).addClass('active').animate({ opacity: 1 });
  }
}