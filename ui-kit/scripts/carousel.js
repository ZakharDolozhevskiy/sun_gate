export class Carousel {

  constructor($element) {
    Carousel.init($element);
  }

  static init($el) {
    this.$el = $el;
    this.selectSlide = 0;

    this.$slideHolder = this.$el.find('.slide-holder');
    this.$pagging = this.$el.find('.pagging');
    this.slideCount = this.$el.find('.gallery-content').length;
    this.slideWidth = this.$el.find('.gallery').width();

    Carousel.addPagination();
    Carousel.addEventListeners();
    Carousel.switchPagging();
  }

  static addPagination() {
    let tmpl = "<li><a href=\"#\" class=\"fa fa-circle-thin\"></a></li>";

    for (let i = 0; i < this.slideCount; i++) {
      $(tmpl).appendTo(this.$pagging);
    }
  }

  static addEventListeners() {
    this.$el.find('.next').on('click', () => Carousel.moveTo(this.selectSlide + 1));
    this.$el.find('.prev').on('click', () => Carousel.moveTo(this.selectSlide - 1));

    this.$pagging.on('click', 'li', function({currentTarget}) {
      this.$pagging.children().each(function(i, el) { currentTarget === el ? Carousel.moveTo(i) : false; });
    }.bind(this));
  }

  static moveTo(n) {
    if (n < 0) this.selectSlide = this.slideCount - 1;
    if (n > this.slideCount - 1) this.selectSlide = 0;
    else this.selectSlide = n;

    this.$slideHolder.animate({ marginLeft: -1 * this.selectSlide * this.slideWidth });

    Carousel.switchPagging();
  }

  static switchPagging() {
    this.$pagging.children().removeClass('active').eq(this.selectSlide).addClass('active');
  }
}
