/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontWeight, TypoVariant } from '@interfaces/index';
import { colors } from './colors';

export const variantStyle: Record<TypoVariant, any> = {
  [TypoVariant.Paragraph1]: { color: colors.text.primary },
  [TypoVariant.Paragraph2]: { color: colors.text.secondary },
};

export const fontWeightStyle: Record<FontWeight, any> = {
  [FontWeight.Regular]: { fontFamily: 'Poppins-Regular' },
  [FontWeight.Medium]: { fontFamily: 'Poppins-Medium' },
  [FontWeight.SemiBold]: { fontFamily: 'Poppins-SemiBold' },
  [FontWeight.Bold]: { fontFamily: 'Poppins-Bold' },
};
