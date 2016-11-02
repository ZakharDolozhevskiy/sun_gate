(function($, _, window) {
    'use strict';
    let data = null;

    const width = 640;
    const height = 480;

    const path = d3.select('#svg-lines')
      .attr('width', width)
      .attr('height', height)
        .append('g')
        .append('path');

    const update = key => {
        const d = data[key];
        const dates = d.map(d => d.date);
        const count = d.map(d => d.count);

        const x = d3.time.scale()
            .domain(d3.extent(dates))
            .range([0, width]);

        const y = d3.scale.linear()
            .domain(d3.extent(count))
            .range([height, 0]);

        const line = d3.svg.area() // line
            .interpolate('bundle')
            .x(d => x(d.date))
            .y0(d => y(0))
            .y1(d => y(d.count));

        path.datum(d)
            .transition()
            .duration(400)
            .attr('d', line)
    };

    window.update = update;

    $.getJSON('//jsbin.com/vegaqi/1.js', function (json) {
        data = json;

        _.keys(data).forEach(function (subject) {
            data[subject].forEach(function (d) {
                d.date = d3.time.format("%Y%m%d").parse(d.date);
            });
        });

        update('math');
    });
})(jQuery, _, window);