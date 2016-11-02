(function() {
    const createOne = (o = {}) => {
        o.x = Math.round(Math.random() * 100);
        o.y = Math.round(Math.random() * 100);
        o.r = Math.round(5 - 0.5 + Math.random() * (30 - 5 + 1));
        return o;
    };

    const dataset = [];

    for (let i=0; i <= 100; i++) {
        dataset.push(createOne());
    }

    const margin = { top: 20, right: 20, bottom: 60, left: 60 };
    const w = 640 - margin.left - margin.right;
    const h = 480 - margin.top - margin.bottom;

    const cx = d3.scale.linear()
        .domain([0, d3.max(dataset, d => d.x)])
        .range([0, w]);

    const cy = d3.scale.linear()
        .domain([0, d3.max(dataset, d => d.y)])
        .range([h, 0]);

    const clr = d3.scale.quantile()
        .domain([
            0,
            d3.max(dataset, d => d.r) / 1.5,
            d3.max(dataset, d => d.r)
        ])
        .range(['red','yellow','green']);

    const xAxis = d3.svg.axis()
        .scale(cx)
        .orient('bottom')
        .tickPadding(5)
        .innerTickSize(10)
        .outerTickSize(10);

    const yAxis = d3.svg.axis()
        .scale(cy)
        .orient('left');

    const stepUpdate = (s, d) => {
        s
            .transition()
            .delay( d => d.r * 10)
            .duration(d)
            .attr('fill', d => clr(d.r))
            .transition()
            .delay( d => d.x * 10)
            .duration(d)
            .attr('cy', d => cy(d.y))
            .attr('cx', d => cx(d.x))
            .transition()
            .delay( d => d.y * 10)
            .duration(d)
            .attr('r', d => d.r);
    };

    const regularUpdate = (s, d) => {
        s
            .transition()
            .duration(d)
            .attr('fill', d => clr(d.r))
            .attr('cy', d => cy(d.y))
            .attr('cx', d => cx(d.x))
            .attr('r', d => d.r);
    };

    const svg = d3.select('#egg-head-charts')
        .attr('width',  w + margin.right + margin.left)
        .attr('height', h + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const tooltip = svg.append('text')
        .attr('class', 'tooltip')
        .style('opacity', 0)
        .attr('width', 100)
        .attr('height', 50);

    const showTooltip = function (d) {
        const cx = +this.getAttribute('cx');
        const cy = +this.getAttribute('cy');

        tooltip
            .text(`d: ${d.r * 2}`)
            .style('opacity', 0)
            .attr('x', cx + d.r)
            .attr('y', cy + d.r)
            .transition()
            .duration(400)
            .style('opacity', 1)
    };

    svg.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', `translate(0, ${h + 30})`)
        .call(xAxis);

    svg.append('g')
        .attr('class', 'axis  axis--y')
        .attr('transform', `translate(-30, 0)`)
        .call(yAxis);

    svg.selectAll('circle')
        .data(dataset)
        .enter().append('circle')
        .attr('class', 'bubble')
        .on('click', showTooltip)
        .attr('fill', d => clr(d.r))
        .attr('cx', d => cx(d.x))
        .attr('cy', d => cy(d.y))
        .attr('r',  d => d.r);

    btn.onclick = () => {
        svg.selectAll('circle')
            .filter(d => d.r > 15)
            .each(createOne)
            .call(stepUpdate, 500);

        svg.selectAll('circle')
            .filter(d => d.r < 15)
            .each(createOne)
            .call(regularUpdate, 200);
    };

})();