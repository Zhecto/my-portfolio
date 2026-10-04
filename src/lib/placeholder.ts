export const placeholder = (
  width: number,
  height: number,
  label: string,
  color = '#d0bcff',
) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'><rect width='100%' height='100%' fill='${color}'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='${Math.round(width / 16)}' fill='#1d1b20'>${label}</text></svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};