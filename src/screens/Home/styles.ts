import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,

    backgroundColor: "#272727"
  },

  homeContent: {
    paddingHorizontal: 24,

    marginTop: 52,
  },

  countTasksContainer: {
    width: '100%',
    height: 19,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  countCreatedTasksContainer: {
    flexDirection: 'row',
  },

  countCreatedTaskText: {
    fontSize: 14,
    fontWeight: '700',
    color: `${colors.blue}`
  },

  countCreatedTaskTotalContainer: {
    paddingVertical: 2,
    paddingHorizontal: 8,

    backgroundColor: `${colors["gray-400"]}`,

    borderRadius: 999,

    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 8
  },

  countCreatedTaskTotalText: {
    fontSize: 12,
    fontWeight: '700',
    color: `${colors["gray-200"]}`
  },

  countTasksDoneContainer: {
    flexDirection: 'row',
  },

  countTasksDoneText: {
    fontSize: 14,
    fontWeight: '700',
    color: `${colors.purple}`
  },

  countTasksDoneTotalContainer: {
    paddingVertical: 2,
    paddingHorizontal: 8,

    backgroundColor: `${colors["gray-400"]}`,

    borderRadius: 999,

    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 8
  },

  countTasksDoneTotalText: {
    fontSize: 12,
    fontWeight: '700',
    color: `${colors["gray-200"]}`
  }
})