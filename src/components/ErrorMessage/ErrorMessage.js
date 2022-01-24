import { Text, StyleSheet, View } from 'react-native';
import { fontSizes, spacing } from '../../constants/sizes';

export const ErrorMessage = ({ errorColor, handleErrorOnClick }) => {
  return (
    <View style={[styles(errorColor).errorWrapper]}>
      <Text style={[styles(errorColor).text]}>Enter valid City</Text>
      <Text onPress={handleErrorOnClick}>X</Text>
    </View>
  );
};

const styles = (errorColor) =>
  StyleSheet.create({
    text: {
      fontSize: fontSizes.sm,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: '#000',
    },
    errorWrapper: {
      position: 'absolute',
      top: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: spacing.sm,
      backgroundColor: errorColor,
      zIndex: 5,
      width: '100%',
    },
  });
