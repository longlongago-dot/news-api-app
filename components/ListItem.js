import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,  Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    itemContainer:{
      height: 100,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      flexDirection: "row",
    },
  
    leftContainer:{
      width: 100,
    },
  
    rightContainer:{
      flex: 1,
      padding: 10,
      justifyContent: "space-between"
    },
  
    Text:{
      fontSize:16,
    },
    subText:{
      fontSize:12,
      color:"gray",
    }
});

const ListItem = ({imageUrl, title, author, onPress, }) => {
    return(
      <TouchableOpacity style={styles.container}onPress={onPress} > 
        <View style={styles.itemContainer}>
          <View style={styles.leftContainer}>
            {!!imageUrl && (<Image
              style={{ width: 100,height: 100}}
              source={{ uri: imageUrl }}
            />)}
          </View>
          <View style={styles.rightContainer}>
            <Text numberOfLines={3} style={styles.Text} > {title} </Text>
            <Text style={styles.subText}> {author} </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
}

export default ListItem;
