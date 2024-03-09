import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native"
import { styles } from "./styles"
import { Header } from "../../components/Header"
import { useCallback } from "react"

export const HomeScreen = () => {
  const handleAddTask = useCallback(() => {
    console.log('add task');
  }, [])

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.homeContainer}>
        <Header onAddTask={handleAddTask} />

        <View style={styles.homeContent}>
          <View style={styles.countTasksContainer}>
            <View style={styles.countCreatedTasksContainer}>
              <Text style={styles.countCreatedTaskText}>Criadas</Text>

              <View style={styles.countCreatedTaskTotalContainer}>
                <Text style={styles.countCreatedTaskTotalText}>0</Text>
              </View>
            </View>

            <View style={styles.countTasksDoneContainer}>
              <Text style={styles.countTasksDoneText}>Concluídas</Text>

              <View style={styles.countTasksDoneTotalContainer}>
                <Text style={styles.countTasksDoneTotalText}>0</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}