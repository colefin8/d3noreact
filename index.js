const data = [
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
  101,
  103,
  107,
  109,
  113,
  127,
  131,
  137,
  139,
  149,
  151,
  157,
  163,
  167,
  173,
  179,
  181,
  191,
  193,
  197,
  199
];
for (let i = 0; i < data.length; i++) {
  d3.select(".column")
    .append("div")
    .classed("box", true);
}

d3.selectAll(".box")
  .data(data)
  .text((d, i) => {
    return d;
  })
  .attr("style", "width: 0px")
  .on("mouseenter", function() {
    d3.select(this).style("background-color", "#f5f5f5");
  })
  .on("mouseout", function() {
    d3.select(this).style("background-color", "tan");
  });

update();

function update() {
  d3.selectAll(".box")
    .transition()
    .ease(d3.easeLinear)
    .duration(5000)
    .attr("style", (d, i) => {
      console.log(d);
      return `width: ${d * 7}px`;
    });
}
