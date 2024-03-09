import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

import todoImage from '../../assets/Logo.png'
import { colors } from "../../theme/colors"

interface HeaderProps {
  onAddTask: () => void
  onTaskInputChange: (text: string) => void
}

export const Header = ({ onAddTask, onTaskInputChange }: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.imageLogo} source={todoImage} />

      <View style={styles.addTaskContainer}>
        <TextInput
          style={styles.inputTask} 
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors["gray-300"]}
          onChangeText={(text) => { onTaskInputChange(text)}}
        />

        <TouchableOpacity 
          style={styles.addTaskButton} 
          activeOpacity={0.9}
          onPress={onAddTask}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}