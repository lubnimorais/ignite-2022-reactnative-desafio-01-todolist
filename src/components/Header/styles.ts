import { StyleSheet } from "react-native";

import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 173,

    backgroundColor: `${colors["gray-700"]}`,

    alignItems: 'center',
    justifyContent: 'center'
  },

  imageLogo: {
    marginTop: 100,
    marginBottom: 35,
  },

  addTaskContainer: {
    paddingHorizontal: 20,

    flexDirection: 'row',
  },

  inputTask: {
    flex: 1,

    backgroundColor: `${colors["gray-500"]}`,

    paddingHorizontal: 16,
    paddingVertical: 11.5,

    borderRadius: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: `${colors["gray-700"]}`,

    marginRight: 4,

    fontSize: 16,
    color: `${colors["gray-300"]}`
  },

  addTaskButton: {
    width: 52,
    height: 52,

    backgroundColor: `${colors["blue-dark"]}`,

    borderRadius: 6,
    
    alignItems: 'center',
    justifyContent: 'center'
  },

  addButtonText: {
    color: `${colors["gray-100"]}`,
  }
})