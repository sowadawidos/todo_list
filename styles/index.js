import { Platform, StyleSheet } from 'react-native';
import { colors } from '../theme';

export const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_COLOR,
  },
  headerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButtonsBox: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskTextBox: {
    width: 270,
  },
  taskText: {
    fontWeight: Platform.OS === 'android' ? '700' : '600',
  },
  mainPageBox: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_COLOR,
  },
  taskBox: {
    padding: 15,
    flex: 1,
  },
  inputBox: {
    height: 200,
    padding: 15,
  },
  loader: {
    textAlign: 'center',
    marginBottom: 5,
  },
});
