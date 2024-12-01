import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

import CustomView from '../../components/CustomView'
import UserContext from '@/ContextAPI/UserContext'

const Index = ({navigation}) => {
  const {userInformation={}} = useContext(UserContext)
return (
  <CustomView>
    <Button onPress={() =>navigation.navigate("Login")} title={"Logout"} color="#a49d83"/>
    <View style={styles.userInformationBox}>
      <Text style={styles.nametext}>Name : </Text>
      <Text style={styles.nametext}>{userInformation.name}</Text>
    </View>
  </CustomView>
)
}

export default Index

const styles = StyleSheet.create({
    tutorialText: {
        color: "white",
        fontSize: 30,
        textAlign: 'center',
        fontWeight: "bold",
        marginTop: 20, 
    },
    userInformationBox:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
  },
  nametext:{
      fontSize:"18px",
      color:"#a49d83"
  }
})
