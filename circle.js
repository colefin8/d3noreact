const types = [
  {
    name: "Normal",
    immunes: ["Ghost"],
    weaknesses: ["Rock", "Steel"],
    strengths: []
  },
  {
    name: "Fire",
    immunes: [],
    weaknesses: ["Fire", "Water", "Rock", "Dragon"],
    strengths: ["Grass", "Ice", "Bug", "Steel"]
  },
  {
    name: "Water",
    immunes: [],
    weaknesses: ["Water", "Grass", "Dragon"],
    strengths: ["Fire", "Ground", "Rock"]
  },
  {
    name: "Electric",
    immunes: ["Ground"],
    weaknesses: ["Electric", "Grass", "Dragon"],
    strengths: ["Water", "Flying"]
  },
  {
    name: "Grass",
    immunes: [],
    weaknesses: ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"],
    strengths: ["Water", "Ground", "Rock"]
  },
  {
    name: "Ice",
    immunes: [],
    weaknesses: ["Fire", "Water", "Ice", "Steel"],
    strengths: ["Grass", "Ground", "Flying", "Dragon"]
  },
  {
    name: "Fighting",
    immunes: ["Ghost"],
    weaknesses: ["Poison", "Flying", "Psychic", "Bug", "Fairy"],
    strengths: ["Normal", "Ice", "Rock", "Dark", "Steel"]
  },
  {
    name: "Poison",
    immunes: ["Steel"],
    weaknesses: ["Poison", "Ground", "Rock", "Ghost"],
    strengths: ["Grass", "Fairy"]
  },
  {
    name: "Ground",
    immunes: ["Flying"],
    weaknesses: ["Grass", "Bug"],
    strengths: ["Fire", "Electric", "Poison", "Rock", "Steel"]
  },
  {
    name: "Flying",
    immunes: [],
    weaknesses: ["Electric", "Rock", "Steel"],
    strengths: ["Grass", "Fighting", "Bug"]
  },
  {
    name: "Psychic",
    immunes: ["Dark"],
    weaknesses: ["Psychic", "Steel"],
    strengths: ["Fighting", "Poison"]
  },
  {
    name: "Bug",
    immunes: [],
    weaknesses: [
      "Fire",
      "Fighting",
      "Poison",
      "Flying",
      "Ghost",
      "Steel",
      "Fairy"
    ],
    strengths: ["Grass", "Psychic", "Dark"]
  },
  {
    name: "Rock",
    immunes: [],
    weaknesses: ["Fighting", "Ground", "Steel"],
    strengths: ["Fire", "Ice", "Flying", "Bug"]
  },
  {
    name: "Ghost",
    immunes: ["Normal"],
    weaknesses: ["Dark"],
    strengths: ["Psychic", "Ghost"]
  },
  {
    name: "Dragon",
    immunes: ["Fairy"],
    weaknesses: ["Steel"],
    strengths: ["Dragon"]
  },
  {
    name: "Dark",
    immunes: [],
    weaknesses: ["Fighting", "Dark", "Fairy"],
    strengths: ["Psychic", "Ghost"]
  },
  {
    name: "Steel",
    immunes: [],
    weaknesses: ["Fire", "Water", "Electric", "Steel"],
    strengths: ["Ice", "Rock", "Fairy"]
  },
  {
    name: "Fairy",
    immunes: [],
    weaknesses: ["Fire", "Poison", "Steel"],
    strengths: ["Fighting", "Dragon", "Dark"]
  }
];

const svg = d3
  .select("#svg-holder")
  .append("svg")
  .attr("width", "1000")
  .attr("height", "600");

svg
  .selectAll("path")
  .data(types)
  .enter()
  .append("path")
  .attr("id", d => {
    return `${d.name}`;
  })
  .attr("d", (d, i) => {
    // console.log(i * 20, (i + 1) * 20, d.name);
    return describeArc(20 * i, 20 * (i + 1));
  })
  .style("fill", "none");
// .style("stroke", "#AAAAAA");
const text = svg
  .selectAll("text")
  .data(types)
  .enter()
  .append("text")
  .attr("font-size", "22px");

text
  .selectAll("textPath")
  .data(types)
  .enter()
  .append("textPath")
  .attr("stroke", "black")
  .attr("xlink:href", d => {
    return `#${d.name}`;
  })
  .attr("startOffset", "20%")
  .text(d => d.name);

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(startAngle, endAngle) {
  console.log(startAngle, endAngle);
  var start = polarToCartesian(500, 300, 280, endAngle);
  var end = polarToCartesian(500, 300, 280, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    280,
    280,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y
  ].join(" ");

  return d;
}
