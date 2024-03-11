import { useCallback, useMemo, useState } from "react"

import { Alert, FlatList, Image, Keyboard, Text, TouchableWithoutFeedback, View } from "react-native"

import { v4 as uuidV4 } from 'uuid'

import clipboardImg from '../../assets/Clipboard.png';

import { Header } from "../../components/Header"

import { styles } from "./styles"
import { TaskComponent } from "../../components/Task";

type Task = {
  id: string;
  task: string;
  done: boolean;
}

export const HomeScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState('');

  const taskConcluded = tasks.reduce((accumulator, task) => {
    if (task.done) {
      accumulator = accumulator + 1;
    }

    return accumulator;
  }, 0)


  const handleAddTask = useCallback(() => {
    if (taskInput === '') {
      return Alert.alert('ToDo', 'Informe a tarefa')
    } else {
      if (tasks.find(taskItem => taskItem.task.trim() === taskInput.trim()))  {
        return Alert.alert('ToDo', 'A tarefa já está na lista')
      }
  
      const taskData: Task = {
        id: uuidV4(),
        task: taskInput,
        done: false,
      }
  
      setTasks(oldState => [...oldState, taskData])
      setTaskInput('')
  
      Keyboard.dismiss()
    }
    
  }, [taskInput, tasks])

  const handleDoneAndDoTask = useCallback((taskId: string) => {
    const taskDone = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done
        }
      }

      return task
    });

    setTasks(taskDone);
  }, [tasks])

  const handleRemoveTask = useCallback((taskId: string, nameTask: string) => {
    Alert.alert(
      'ToDo', 
      `Deseja finalizar a tarefa: ${nameTask}?`,
      [
        {
          text: 'Sim',
          style: 'destructive',
          onPress: () => {
            const taskRemove = tasks.filter(task => task.id !== taskId)

            setTasks(taskRemove)
          }
        },
        {
          text: 'Não',
          style: 'cancel',
          onPress: () => null
        }
      ]
    )

    
  }, [tasks])

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.homeContainer}>
        <Header valueInput={taskInput} onAddTask={handleAddTask} onTaskInputChange={setTaskInput} />

        <View style={styles.homeContent}>
          <View style={styles.countTasksContainer}>
            <View style={styles.countCreatedTasksContainer}>
              <Text style={styles.countCreatedTaskText}>Criadas</Text>

              <View style={styles.countCreatedTaskTotalContainer}>
                <Text style={styles.countCreatedTaskTotalText}>{tasks.length}</Text>
              </View>
            </View>

            <View style={styles.countTasksDoneContainer}>
              <Text style={styles.countTasksDoneText}>Concluídas</Text>

              <View style={styles.countTasksDoneTotalContainer}>
                <Text style={styles.countTasksDoneTotalText}>{taskConcluded}</Text>
              </View>
            </View>
          </View>

          <View style={styles.listContainer}>
            <FlatList
              data={tasks}
              keyExtractor={(item) => item.id}
              renderItem={({ item: task}) => (
                <TaskComponent 
                  task={task}
                  onDoneAndDoTask={() => {
                    handleDoneAndDoTask(task.id)
                  }}
                  onRemoveTask={() => {
                    handleRemoveTask(task.id, task.task)
                  }}
                />
              )}
              ListEmptyComponent={() => (
                <View style={styles.emptyListContainer}>
                  <Image style={styles.emptyListImage} source={clipboardImg} />

                  <Text style={styles.emptyListText1}>
                    Você ainda não tem tarefas cadastradas
                  </Text>
                  
                  <Text style={styles.emptyListText2}>
                    Crie tarefas e organize seus itens a fazer
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}