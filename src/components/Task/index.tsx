import { Image, Text, TouchableOpacity, View } from "react-native"

import noCheckImage from '../../assets/no-check.png';
import checkImage from '../../assets/check.png';
import trashImage from '../../assets/trash.png';

import { styles } from "./styles"

interface Task {
  task: string;
  done: boolean
}

interface TaskComponentProps {
  task: Task;
  onDoneAndDoTask: () => void;
  onRemoveTask: () => void
}

export const TaskComponent = ({ task, onDoneAndDoTask, onRemoveTask }: TaskComponentProps) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity 
        style={styles.taskDoneButton} 
        activeOpacity={0.7}
        onPress={onDoneAndDoTask}
      >
        {task.done ? (
          <Image source={checkImage} width={24} height={24} />
        ) : (
          <Image source={noCheckImage} width={24} height={24} />
        )}

        <Text style={task.done ? styles.taskDoneText : styles.taskText}>{task.task}</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.taskRemoveButton} 
        activeOpacity={0.7} 
        onPress={onRemoveTask}
      >
        <Image source={trashImage} />
      </TouchableOpacity>
    </View>
  )
}