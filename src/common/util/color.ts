const hexToRgb = (hexCode: string) => {
  // Remove the hash if it's there
  const regHexCode = hexCode.replace(/^#/, '');

  const r = parseInt(regHexCode.substring(0, 2), 16);
  const g = parseInt(regHexCode.substring(2, 4), 16);
  const b = parseInt(regHexCode.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
};

const shadeColor = (baseColor: string, amount: number) => {

  const isHex = baseColor.includes('#');
  const baseRGB = isHex ? hexToRgb(baseColor).match(/\d+(\.\d+)?/g) : baseColor.match(/\d+(\.\d+)?/g);
  if (!baseRGB) return 'rgb(0,0,0,)';

  const shadedColor = [
    Math.max(0, parseInt(baseRGB[0], 10) - amount),
    Math.max(0, parseInt(baseRGB[1], 10) - amount),
    Math.max(0, parseInt(baseRGB[2], 10) - amount),
  ];

  return `rgb(${shadedColor.join(',')})`;
};

const tintColor = (baseColor: string, amount: number) => {

  const isHex = baseColor.includes('#');
  const baseColorRGB = isHex ? hexToRgb(baseColor).match(/\d+(\.\d+)?/g) : baseColor.match(/\d+(\.\d+)?/g) as string[];

  if (!baseColorRGB) return 'rgb(0,0,0,)';

  const tintedColor = [
    Math.min(255, parseInt(baseColorRGB[0], 10) + amount),
    Math.min(255, parseInt(baseColorRGB[1], 10) + amount),
    Math.min(255, parseInt(baseColorRGB[2], 10) + amount),
  ];

  return `rgb(${tintedColor.join(',')})`;
};

export default { shadeColor, tintColor, hexToRgb };
