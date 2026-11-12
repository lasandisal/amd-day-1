import {View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { register } from '@/services/auth.service';
import { useLoader } from '@/hooks/useLoader';

const registerScreen = () => {

  const router = useRouter()

  const { showLoader, hideLoader } = useLoader()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async () => {
    try{
      showLoader()
      const res = await register(email, password)
      router.replace('/(auth)/login')
    }catch(error){
      console.error(error)
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
        <TouchableOpacity onPress={handleRegister}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => {
        router.back()
      }}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default registerScreen;