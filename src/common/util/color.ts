
const shadeColor = (baseColor: string, amount:number) => {

  const baseRGB = baseColor.match(/\d+(\.\d+)?/g);

  if (!baseRGB) return 'rgb(0,0,0,)';

  const shadedColor = [
    Math.max(0, parseInt(baseRGB[0], 10) - amount),
    Math.max(0, parseInt(baseRGB[1], 10) - amount),
    Math.max(0, parseInt(baseRGB[2], 10) - amount),
  ];

  return `rgb(${shadedColor.join(',')})`;
};

function tintColor(baseColor: string, amount: number) {

  const baseColorRGB = baseColor.match(/\d+(\.\d+)?/g) as string[];

  if (!baseColorRGB) return 'rgb(0,0,0,)';

  const tintedColor = [
    Math.min(255, parseInt(baseColorRGB[0], 10) + amount),
    Math.min(255, parseInt(baseColorRGB[1], 10) + amount),
    Math.min(255, parseInt(baseColorRGB[2], 10) + amount),
  ];

  return `rgb(${tintedColor.join(',')})`;
}

export default { shadeColor, tintColor };
