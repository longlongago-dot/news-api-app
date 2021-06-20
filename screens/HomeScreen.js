import React, {useState , useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants';
import axios from 'axios';

const URL = `https://newsapi.org/v2/top-headlines?country=jp&apikey=${Constants.manifest.extra.newsApiKey}`;

export default function HomeScreen(props){
  const {navigation} = props;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
      fetchArticles();
    },  [] );


  const fetchArticles = async () => {
    try{
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch(error){
      console.error(error);
    }
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => props.navigation.navigate('Article', {article: item})}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
