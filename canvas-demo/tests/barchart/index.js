const data = [
  { name: "questions", value: 17 },
  { name: "schools", value: 25 },
  { name: "philosophers", value: 35 },
];

const chartWidth = 480;
const chartHeight = 300;
const margin = 15;

const containerWidth = chartWidth + margin * 2; // 容器宽度
const containerHeight = chartHeight + margin * 2; // 容器高度

const names = Array.from(data, (x) => x.name);
const values = Array.from(data, (x) => x.value);
const indices = Array.from(data, (_, i) => i);

const step = chartWidth / names.length;
const barWidth = step * 0.8;
const xs = Array.from(indices, (x) => x * step);
const y = chartHeight;

const vmax = Math.max(...values);
const barHeights = Array.from(values, (x) => (x / vmax) * chartHeight);
// 获得每一个条的颜色
const nameColor = {
  questions: "#5B8FF9",
  philosophers: "#61DDAA",
  schools: "#65789B",
};

const canvas = document.getElementById("canvas");

canvas.style.width = containerWidth + "px";
canvas.style.height = containerWidth + "px";
canvas.width = containerWidth * 2;
canvas.height = containerHeight * 2;

const context = canvas.getContext("2d");
context.scale(2, 2);
context.translate(margin, margin);

for (const index of indices) {
  const color = nameColor[names[index]];
  const x = xs[index];
  const barHeight = barHeights[index];
  const value = values[index];
  context.fillStyle = color;
  context.fillRect(x, y - barHeight, barWidth, barHeight);

  // 绘制值
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "white";
  context.font = "25px PingFangSC-Regular, sans-serif";
  context.fillText(value, x + barWidth / 2, y - barHeight / 2);
}
