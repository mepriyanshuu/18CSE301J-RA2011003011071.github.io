const data = [
    { Name_of_the_States: 'Kolkata', r_by_p: 686},

        { Name_of_the_States: 'Hyderabad', r_by_p: 1437},
    { Name_of_the_States: 'Lucknow', r_by_p: 232},
    { Name_of_the_States: 'Mumbai', r_by_p: 264},
    { Name_of_the_States: 'Ahemdabad', r_by_p: 2327},
        { Name_of_the_States: 'Delhi', r_by_p: 6121},
    { Name_of_the_States: 'Bangalore', r_by_p: 5221},

    { Name_of_the_States: 'Chennai', r_by_p: 2334},



  ];

  const width = 854;
  const height = 480;
  const margin = { top: 50, bottom: 50, left: 50, right: 50 };

  const svg = d3.select('#d3-container')
    .append('svg')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr("viewBox", [0, 0, width, height]);

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, 9000])
    .range([height - margin.bottom, margin.top])

  svg
    .append("g")
    .attr("fill", 'royalblue')
    .selectAll("rect")
    .data(data)
    .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d.r_by_p))
      .attr('title', (d) => d.r_by_p)
      .attr("class", "rect")
      .attr("height", d => y(0) - y(d.r_by_p))
      .attr("width", x.bandwidth());

  function yAxis(g) {
    g.attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr("font-size", '20px')
  }

  function xAxis(g) {
    g.attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat(i => data[i].Name_of_the_States))
      .attr("font-size", '20px')
  }

  svg.append("text")
  .attr("class", "x label")
  .attr("text-anchor", "middle")
  .attr("transform", "translate(" + (width / 2) + "," + (height + margin.bottom -52) + ")")
  .text("Name of the City");

  svg.append("text")
  .attr("class", "y label")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90) translate(" + (-height/2) + "," + (-margin.left + 20) + ")")
  .text("Frieght recieved(in tonne)");


  svg.append("g").call(xAxis);
  svg.append("g").call(yAxis);
  svg.node();
