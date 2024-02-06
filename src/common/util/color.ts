const hexToRgb = (hexCode: string) => {
  // Remove the hash if it's there
  const regHexCode = hexCode.replace(/^#/, '');

  const r = parseInt(regHexCode.substring(0, 2), 16);
  const g = parseInt(regHexCode.substring(2, 4), 16);
  const b = parseInt(regHexCode.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
};

const shadeColor = (baseColor: string, amount: number): string => {
  const isRGBA = baseColor.startsWith('rgba');
  const baseColorRGB = baseColor.match(/\d+(\.\d+)?/g)?.map(Number) ?? [];

  const alpha = isRGBA ? baseColorRGB.pop() : 1;
  const shadedColor = baseColorRGB.map((color) => Math.max(0, color - (color * (amount / 100))));

  return isRGBA ? `rgba(${shadedColor.join(',')},${alpha})` : `rgb(${shadedColor.join(',')})`;
};

const tintColor = (baseColor: string, amount: number): string => {
  const isRGBA = baseColor.startsWith('rgba');
  const baseColorRGB = baseColor.match(/\d+(\.\d+)?/g)?.map(Number) ?? [];
  const alpha = isRGBA ? baseColorRGB.pop() : 1;
  const tintedColor = baseColorRGB.map((color) => Math.min(255, color + ((255 - color) * (amount / 100))));

  return isRGBA ? `rgba(${tintedColor.join(',')},${alpha})` : `rgb(${tintedColor.join(',')})`;
};


export default { shadeColor, tintColor, hexToRgb };
