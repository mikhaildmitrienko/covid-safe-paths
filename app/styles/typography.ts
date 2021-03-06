import { TextStyle } from 'react-native';

import * as Colors from './colors';

// Font Sizes
export const tiny = 11;
export const smallest = 12;
export const smaller = 13;
export const small = 15;
export const medium = 17;
export const large = 19;
export const larger = 22;
export const largest = 28;
export const huge = 52;

// Line Heights
export const smallestLineHeight = 16;
export const smallerLineHeight = 20;
export const smallLineHeight = 24;
export const mediumLineHeight = 28;
export const largeLineHeight = 32;
export const largestLineHeight = 40;
export const hugeLineHeight = 52;

// Font Weights
export const lighterWeight = '200';
export const lightWeight = '300';
export const baseWeight = '400';
export const heavyWeight = '500';
export const heaviestWeight = '700';

// Font Families
export const baseFontFamily = 'IBMPlexSans';
export const boldFontFamily = 'IBMPlexSans-Bold';
export const monospaceFontFamily = 'IBMPlexMono';

export const bold: TextStyle = {
  fontFamily: boldFontFamily,
  fontWeight: heavyWeight,
};

export const monospace: TextStyle = {
  fontFamily: monospaceFontFamily,
};

// Standard Font Types
export const tinyFont: TextStyle = {
  lineHeight: smallestLineHeight,
  fontSize: tiny,
};

export const smallFont: TextStyle = {
  lineHeight: smallLineHeight,
  fontSize: small,
};

export const mediumFont: TextStyle = {
  lineHeight: mediumLineHeight,
  fontSize: medium,
};

export const largeFont: TextStyle = {
  lineHeight: largestLineHeight,
  fontSize: large,
};

export const largestFont: TextStyle = {
  lineHeight: largestLineHeight,
  fontSize: largest,
};

export const hugeFont: TextStyle = {
  lineHeight: hugeLineHeight,
  fontSize: huge,
};

// Headers
export const header1: TextStyle = {
  ...hugeFont,
  ...bold,
  color: Colors.violetText,
};

export const header2: TextStyle = {
  ...largestFont,
  ...bold,
  color: Colors.violetText,
};

export const title: TextStyle = {
  ...largeFont,
  fontWeight: heaviestWeight,
  color: Colors.primaryText,
};

// Content
export const mainContent: TextStyle = {
  ...mediumFont,
  color: Colors.primaryText,
};

export const secondaryContent: TextStyle = {
  ...mediumFont,
  color: Colors.secondaryText,
  lineHeight: mediumLineHeight,
};

export const tertirayContent: TextStyle = {
  ...smallFont,
  color: Colors.tertiaryText,
  lineHeight: smallLineHeight,
};

export const description: TextStyle = {
  ...smallFont,
  color: Colors.primaryText,
  lineHeight: smallerLineHeight,
};

export const disclaimer: TextStyle = {
  ...smallFont,
  ...monospace,
  color: Colors.secondaryText,
};

export const label: TextStyle = {
  ...smallFont,
  color: Colors.primaryText,
};

export const error: TextStyle = {
  color: Colors.defaultRed,
  fontSize: smaller,
  fontWeight: heavyWeight,
};

// Tappables
export const tappableListItem: TextStyle = {
  ...mediumFont,
  color: Colors.violetText,
};

// Buttons
export const buttonText: TextStyle = {
  fontSize: large,
  fontWeight: heavyWeight,
};

export const buttonTextDark: TextStyle = {
  ...buttonText,
  color: Colors.primaryViolet,
};

export const buttonTextLight: TextStyle = {
  ...buttonText,
  color: Colors.white,
};
