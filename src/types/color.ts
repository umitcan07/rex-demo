type RGBColor = `rgb(${number}, ${number}, ${number})`;
type RGBAColor = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEXColor = `#${string}`;

export type Color = RGBColor | RGBAColor | HEXColor;