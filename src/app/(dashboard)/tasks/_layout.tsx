import {Stack} from 'expo-router';

const TasksLayout = () => {
  return(
    <Stack
    screenOptions={{
      headerShown: false
    }}>

      <Stack.Screen name='index'/>
      <Stack.Screen name='form'/>

    </Stack>
  )
}

export default TasksLayout;