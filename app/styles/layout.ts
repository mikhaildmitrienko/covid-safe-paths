import { Dimensions } from 'react-native';

import * as Spacing from './spacing';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const baseScreenPadding = Spacing.xSmall;

export const xxSmallWidth = 0.05 * screenWidth;
export const mediumWidth = 0.4 * screenWidth;
export const largeWidth = 0.6 * screenWidth;

export const xxSmallHeight = 0.03 * screenHeight;
export const smallHeight = 0.05 * screenHeight;
export const mediumHeight = 0.45 * screenHeight;

export const baseHorizontalMargin = Spacing.xSmall;
export const horizontalMarginSmall = Spacing.xxxSmall;
export const horizontalMarginMedium = Spacing.medium;

export const baseFullWidthWithMargin = screenWidth - baseHorizontalMargin * 2;
export const fullWidthWithSmallMargin = screenWidth - horizontalMarginSmall * 2;
export const fullWidthWithMediumMargin =
  screenWidth - horizontalMarginMedium * 2;
