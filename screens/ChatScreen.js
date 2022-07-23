import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Avatar } from 'react-native-elements';

//route prop gets all paraemnters from the navigation object
const ChatScreen = ({ navigation, route }) => {

    useLayoutEffect(() => {
      navigation.setOptions({
        title: "Chat",
        headerBackTitleVisible: false,
        headerTitleAlign: "left",
        headerTitle: () => (
            <View 
            style={{
            flexDirection: "row",
            alignItems: "center",
            }}
            >
             <Avatar rounded />
             </View>
            ),
        });
        }, [navigation])
            
  return (
    <View>
      <Text>Chat Screen</Text>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})