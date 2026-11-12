import {View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useLoader } from '@/hooks/useLoader';
import { login } from '@/services/auth.service';

const loginScreen = () => {
  const router = useRouter()

  const {showLoader, hideLoader} = useLoader()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = async ()=>
{
  try{
    showLoader()
    await login(email, password)
    router.replace('/home')
  }catch(error){
    console.error("Login failed", error)
  } finally{
    hideLoader()
  }
}  
return(
    <View className ='flex-1 w-full'>
      <Text>Register Screen</Text>

      <View>
        <TextInput value={email} onChangeText={setEmail}/>
        <TextInput value={password} onChangeText={setPassword}/>
        <TouchableOpacity onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity onPress={() => {
        router.back()
      }}>
        <Text>Go to Login</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default loginScreen;