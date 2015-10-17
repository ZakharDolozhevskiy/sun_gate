// modules:
import {Carousel} from './carousel.js';
import {addTabs} from './tabs.js';
import * as slider from './slider.js';

// initialization
new Carousel($('.gallery-holder'));
addTabs($('.tabs-holder'));

$('.slider-1').slider();
$('.slider-2').slider();
$('.slider-3').slider();
$('.slider-4').slider();


