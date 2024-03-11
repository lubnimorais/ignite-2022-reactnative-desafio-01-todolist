import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    height: 64,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 8,

    paddingVertical: 12,
    paddingHorizontal: 8,
  },

  taskDoneButton: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },

  taskText: {
    marginLeft: 8,

    fontSize: 14,
    color: `${colors["gray-100"]}`,
    lineHeight: 14
  },

  taskDoneText: {
    marginLeft: 8,

    fontSize: 14,
    color: `${colors["gray-300"]}`,
    lineHeight: 14,
    textDecorationLine: 'line-through'
  },

  taskRemoveButton: {
    width: 32,
    height: 32,

    alignItems: 'center',
    justifyContent: 'center'
  }
})