import { Link, Slot, useLocalSearchParams } from "expo-router"
import {View, Text} from "react-native"

const SelectedItem = () =>{
  const params = useLocalSearchParams() 
  console.log(params.id) // 1234, hello
  // params.hello [hello].tsx

  return (
    <View>
      <Text>SelectedItem</Text>
    </View>
  )
}

export default SelectedItem