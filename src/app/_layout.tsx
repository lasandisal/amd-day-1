import { Link, Slot, Stack } from "expo-router"
import {View, Text} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"
import "../global.css"
import { LoaderProvider } from "@/context/LoaderContext"
import { AuthProvider } from "@/context/AuthContext"

const RootLayout = () =>{
  // return <Stack screenOptions={{animation:"slide_from_right", headerStyle:{backgroundColor: "pink"}, headerTintColor: "black"}}>
  //   <Stack.Screen name = "index" options={{title: "Home"}}/>
  //   <Stack.Screen name = "about" options={{title: "About"}}/>
  //   <Stack.Screen name = "test/me" options={{title: "me"}}/>

  // </Stack>

  return(
    <LoaderProvider>
      <AuthProvider>
        <SafeAreaView className="flex-1">
          <Slot/>
        </SafeAreaView>
      </AuthProvider>
    </LoaderProvider>
  )


}

// const _layout = () =>{
//   return (
//     <View className="w-full flex-1 justify-center items-center">
//       {/* <Slot/> */}
//       <Stack></Stack>
//       <Text className="text-ld">Layout</Text>
//       <View className="bg-blue-500 w-full p-5">
//         <Link href={"/"}>Home</Link>
//         <Link href={"/about"}>About</Link>
//         <Link href={"/test/me"}>me</Link>
//       </View>
//     </View>
//   )
// }

export default RootLayout