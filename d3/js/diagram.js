(function() {
  'use strict';
  const padding = 50;
  const width  = 700 - padding * 2;
  const height = 525 - padding * 2;

  // Sunrise and sun set times for dates in 2011. I have picked the 1st
  // and 15th day of every month, plus other important dates like equinoxes
  // and solstices and dates around the standard time/DST transition.

  const data = [
    {date: new Date(2011, 0, 1), sunrise: [7, 51], sunset: [16, 42]},
    {date: new Date(2011, 0, 15), sunrise: [7, 48], sunset: [16, 58]},
    {date: new Date(2011, 1, 1), sunrise: [7, 33], sunset: [17, 21]},
    {date: new Date(2011, 1, 15), sunrise: [7, 14], sunset: [17, 41]},
    {date: new Date(2011, 2, 1), sunrise: [6, 51], sunset: [18, 0]},
    {date: new Date(2011, 2, 12), sunrise: [6, 32], sunset: [18, 15]},
    {date: new Date(2011, 2, 13), sunrise: [7, 30], sunset: [19, 16]},
    {date: new Date(2011, 2, 14), sunrise: [7, 28], sunset: [19, 18]},
    {date: new Date(2011, 2, 14), sunrise: [7, 26], sunset: [19, 19]},
    {date: new Date(2011, 2, 20), sunrise: [7, 17], sunset: [19, 25]},
    {date: new Date(2011, 3, 1), sunrise: [6, 54], sunset: [19, 41]},
    {date: new Date(2011, 3, 15), sunrise: [6, 29], sunset: [19, 58]},
    {date: new Date(2011, 4, 1), sunrise: [6, 3], sunset: [20, 18]},
    {date: new Date(2011, 4, 15), sunrise: [5, 44], sunset: [20, 35]},
    {date: new Date(2011, 5, 1), sunrise: [5, 30], sunset: [20, 52]},
    {date: new Date(2011, 5, 15), sunrise: [5, 26], sunset: [21, 1]},
    {date: new Date(2011, 5, 21), sunrise: [5, 26], sunset: [21, 3]},
    {date: new Date(2011, 6, 1), sunrise: [5, 30], sunset: [21, 3]},
    {date: new Date(2011, 6, 15), sunrise: [5, 41], sunset: [20, 57]},
    {date: new Date(2011, 7, 1), sunrise: [5, 58], sunset: [20, 40]},
    {date: new Date(2011, 7, 15), sunrise: [6, 15], sunset: [20, 20]},
    {date: new Date(2011, 8, 1), sunrise: [6, 35], sunset: [19, 51]},
    {date: new Date(2011, 8, 15), sunrise: [6, 51], sunset: [19, 24]},
    {date: new Date(2011, 8, 23), sunrise: [7, 1], sunset: [19, 9]},
    {date: new Date(2011, 9, 1), sunrise: [7, 11], sunset: [18, 54]},
    {date: new Date(2011, 9, 15), sunrise: [7, 28], sunset: [18, 29]},
    {date: new Date(2011, 10, 1), sunrise: [7, 51], sunset: [18, 2]},
    {date: new Date(2011, 10, 5), sunrise: [7, 57], sunset: [17, 56]},
    {date: new Date(2011, 10, 6), sunrise: [6, 58], sunset: [16, 55]},
    {date: new Date(2011, 10, 7), sunrise: [6, 59], sunset: [16, 54]},
    {date: new Date(2011, 10, 15), sunrise: [7, 10], sunset: [16, 44]},
    {date: new Date(2011, 11, 1), sunrise: [7, 31], sunset: [16, 33]},
    {date: new Date(2011, 11, 15), sunrise: [7, 44], sunset: [16, 32]},
    {date: new Date(2011, 11, 22), sunrise: [7, 49], sunset: [16, 35]},
    {date: new Date(2011, 11, 31), sunrise: [7, 51], sunset: [16, 41]}
  ];

  const months = d3.scaleBand()
    .domain(["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])
    .range([0, width - 1]);

  const date = d3.scaleTime()
    .domain([new Date(2011, 0, 1), new Date(2011, 11, 31)])
    .range([0, width]);

  const hours = d3.scaleTime()
    .domain([new Date(2011, 0, 1), new Date(2011, 0, 2)])
    .range([0, height]);

  const applyAxisX = orient => {
    const axis = orient === 'top' ? d3.axisTop() : d3.axisBottom();
    axis.scale(months).tickSizeOuter(0);
    return axis
  };

  const applyPath = (selection, d) =>
    selection.datum(data)
      .append('path')
      .attr('class', 'line')
      .attr('d', d);

  const yAxisLabel = d => {
    if (d == 12) { return "noon"; }
    if (d < 12) { return d; }
    return (d - 12);
  };

  const svg = d3.select('svg-diagram')
    .attr('width', width + padding * 2)
    .attr('height', height + padding * 2)
    .append('g')
      .attr('transform', `translate(${padding},${padding})`);

  const sunrise = d3.area()
    .x(d => date(d.date))
    .y0(hours(hours.domain()[0]))
    .y1(d => hours(new Date(2011, 0, 1, d.sunrise[0], d.sunrise[1])));

  const sunset = d3.area()
    .x(d => date(d.date))
    .y0(d => hours(new Date(2011, 0, 1, d.sunset[0], d.sunset[1])))
    .y1(hours(hours.domain()[1]));

  svg
    .append('g')
    .attr('class', 'axis')
    .call(applyAxisX('top'));

  svg
    .append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${height - 1})`)
    .call(applyAxisX('bottom'));

  svg
    .selectAll('.axisLeftY')
      .data(d3.range(5, 22))
      .enter()
    .append('text')
      .attr('class', 'axisLeftY')
      .attr('text-anchor', 'end')
      .text(yAxisLabel)
      .attr('dy', 3)
      .attr('x', -7)
      .attr('y', d => hours(new Date(2011, 0, 1, d)));

  svg
    .selectAll('.axisRightY')
    .data(d3.range(5, 22))
    .enter()
    .append('text')
    .attr('class', 'axisRightY')
    .attr('text-anchor', 'start')
    .text(yAxisLabel)
    .attr('dy', 3)
    .attr('x', width + 7)
    .attr('y', d => hours(new Date(2011, 0, 1, d)));

  svg
    .selectAll('.h-line')
    .data(d3.range(5, 22))
    .enter()
      .append('line')
      .attr('class', 'h-line')
      .attr('x1', -5)
      .attr('y1', d => hours(new Date(2011, 0, 1, d)) + 0.5)
      .attr('x2', width + 5)
      .attr('y2', d => hours(new Date(2011, 0, 1, d)) + 0.5);

  svg
    .append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', 'lightyellow');

  svg
    .call(applyPath, sunrise);

  svg
    .call(applyPath, sunset);

  svg
    .append('line')
    .attr('class', 'mid-line')
    .attr('x1', 0)
    .attr('y1', height / 2 + 0.5)
    .attr('x2', width)
    .attr('y2', height / 2 + 0.5);
})();