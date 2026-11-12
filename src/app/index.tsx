// import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Alert, KeyboardAvoidingView, Platform} from 'react-native';
// import { useState } from 'react';
// import "../global.css"

// // can't use html tags, use pre defined tags from react-native
// // div - View
// // h1, h2, p - Text
// // text must be inside the Text tag
// // css - can't
// // web - flex
// // flex box default for all react native tags
// // web - flex row
// // mobile - flex col

// // const index = () => {
// //   return(
// //     <View style={{
// //       backgroundColor: "red"
// //     }}>
// //       <Text>Hello, World!</Text>
// //     </View>
// //   )
// // }

// ///////////////////////////////////////////////////////////////////////////////

// const index = ()=>{
//   const [data, setData] = useState("")
//   const handleButtonPress = ()=>{
//     if (data.trim() === ""){
//       Alert.alert("Error","Please enter something")
//     } else{
//       Alert.alert("Success", "You entered: " + data)
//     }
//   }
//   return(
//     <KeyboardAvoidingView 
//     behavior={
//       Platform.OS === "ios" ? "padding" : "height"}
//       style={styles.container}
//     >
//     <View style={styles.container}>
//       <ScrollView style={{
//         width: "100%"
//       }}>
//       <Text style={styles.myText}>Hello</Text>
//       <TextInput value={data} onChangeText={setData}></TextInput>
//       <TouchableOpacity onPress={()=>{handleButtonPress()}}>
//         <Text>Click Me</Text>
//       </TouchableOpacity>
//       <Image source={{
//         uri: "https://images.unsplash.com/photo-1682685790910-1e3f5c7b8d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
//       }}
//       width={320}
//       height={500}
//       />
//       </ScrollView>
//     </View>
//     </KeyboardAvoidingView>
//   )
// }

// const styles = StyleSheet.create({
//   container:{
//     backgroundColor: "pink",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   }, 
//   myText:{
//     fontSize: 50,
//     color: "black"
//   }
// })

// export default index;

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Day 2

import { Redirect } from 'expo-router';

export default function Index() {
  
  return <Redirect href="/(auth)/login" />;
}


