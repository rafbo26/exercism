//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const value = (colors) => {
  let col = colors.map((color) => {
    return COLORS.indexOf(color);
  });
  return parseInt(col.join(''), 10);
};
