import { Image, Text, TouchableOpacity, View } from "react-native"

import noCheckImage from '../../assets/no-check.png';
import checkImage from '../../assets/check.png';

import { styles } from "./styles"

interface Task {
  task: string;
  done: boolean
}

interface TaskComponentProps {
  task: Task;
}

export const TaskComponent = ({ task }: TaskComponentProps) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity style={styles.taskDoneButton} activeOpacity={0.7}>
        {task.done ? (
          <Image source={checkImage} />
        ) : (
          <Image source={noCheckImage} />
        )}
        <Text style={styles.taskText}>{task.task}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.taskRemoveButton}></TouchableOpacity>
    </View>
  )
}