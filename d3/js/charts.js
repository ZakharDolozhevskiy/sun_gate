(function(d3) {
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width  = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  const x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1, .5); // .1 / .5 - inner and outer padding

  const y = d3.scale.linear()
      .range([height, 0]);

  const c = d3.scale.quantile()
      .range(['red', 'purple', 'blue']);

  const xAxis = d3.svg.axis()
      .scale(x)
      .innerTickSize(-height)
      .orient('bottom');

  const yAxis = d3.svg.axis()
    .scale(y)
    .innerTickSize(-width)
    .orient('left')
    .ticks(20, '%');

  const type = d => Object.assign(d, { frequency: +d.frequency });

  const chart = d3.select('#svg')
    .attr('width', width + margin.left  + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

  d3.tsv('./src/data.tsv', type, (err, data) => {
    if (err) return null;

    x.domain(data.map(d => d.letter));
    c.domain([0, d3.max(data, d => d.frequency) / 5, d3.max(data, d => d.frequency)]);
    y.domain([0, d3.max(data, d => d.frequency) * 1.2]);

    chart.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', `translate(0, ${height})`)
        .call(xAxis);

    chart.append('g')
        .attr('class', 'axis axis--y')
        .call(yAxis)
      .append('text')
        .attr("y", 6)
        .attr("dy", ".71em")
        .attr('transform', `rotate(-90)`)
        .style('text-anchor', 'end')
        .text('Frequency');

    const bar = chart.selectAll('.bar')
      .data(data)
      .enter().append('rect')
        .on('mouseenter', function() { d3.select(this).classed('active', true) })
        .on('mouseleave', function() { d3.select(this).classed('active', false) })
        .attr('class', 'bar')
        .attr('width', x.rangeBand())
        .attr('transform', d => `translate(${x(d.letter)}, 0)`)
        .attr('y', d => y(d.frequency))
        .attr('fill', d => c(d.frequency))
        .attr('height', d => height - y(d.frequency));
  });
})(window.d3);