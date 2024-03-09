import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center'
  },

  taskDoneButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  taskText: {
    flex: 1,

    marginLeft: 8,

    fontSize: 14,
    color: `${colors["gray-100"]}`,
    lineHeight: 14
  },

  taskRemoveButton: {}
})