import { fetchNews } from '@/services/news.service';
import { useEffect, useState } from 'react';
import {View, Text, FlatList, Image} from 'react-native';

const NewsScreen = () => {

  const [newsData, setNewsData] = useState([]);

  const fetchNewsData = async () =>{

    try{
      const res = await fetchNews()
      setNewsData(res.articles)
    }catch(error){
      console.error(error)
      setNewsData([])
    }
    
  }

  useEffect(() =>{
    fetchNewsData()
  }, [])

  return(
    <View className='flex-1 w-full'>
      <FlatList data={newsData} renderItem={({item, index} : any) => 
        <View className='bg-gray-200 my-2'>
          <Image
          source={{uri: item.urlToImage}}
          className='h-48 w-full'
          resizeMode='cover'
          />
        <Text>{item.title}</Text>
        <Text>{item.content}</Text>
        {/* No need to loop or map, faltlist handles it */}
        </View>}/>
    </View>
  )
}

export default NewsScreen;