import { Platform } from 'react-native';

export const generateBoxShadowStyle = (
  xOffset = 0,
  yOffset = 2,
  shadowColorIos = '#000',
  shadowOpacity = 0.23,
  shadowRadius = 2.62,
  elevation = 4,
  shadowColorAndroid = '#000'
) => {
  let styles = {
    shadowColor: shadowColorAndroid,
    shadowOffset: { width: xOffset, height: yOffset },
    shadowOpacity,
    shadowRadius,
    elevation,
  };

  if (Platform.OS === 'ios') {
    styles.shadowColor = shadowColorIos;
    styles.shadowOffset = { width: xOffset, height: yOffset };
    styles.shadowOpacity = shadowOpacity;
    styles.shadowRadius = shadowRadius;
  }

  if (Platform.OS === 'android') {
    styles.elevation = elevation;
    styles.shadowColor = shadowColorAndroid;
  }

  return styles;
};
