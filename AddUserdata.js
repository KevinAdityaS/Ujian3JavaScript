import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native'
import axios from 'axios'

export class AddUserdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : "",
	    email : "",
	    phone : "",
	    address : ""
    };
  }

  handleAdd(){

    axios.post(`http://192.168.0.106:4646/userdata/addUserdata`, this.state)

    .then( (response) => {
        alert(response.data);
        this.props.navigation.navigate("App");
    })

    .catch(function (error) {
        console.log(error);
    })

  }

  render() {
    return (
      <View>
        <Text style={styles.title}> Input Username </Text>
        <TextInput placeholder = "Username" onChangeText={(data)=>{this.setState({username:data})}}/>
        <Text style={styles.title}> Input E-mail </Text>
        <TextInput placeholder = "E-mail" onChangeText={(data)=>{this.setState({email:data})}}/>
        <Text style={styles.title}> Input Phone </Text>
        <TextInput placeholder = "Phone" onChangeText={(data)=>{this.setState({phone:data})}}/>
        <Text style={styles.title}> Input Address </Text>
        <TextInput placeholder = "Address" onChangeText={(data)=>{this.setState({address:data})}}/>
      
        <TouchableOpacity style = {styles.button} onPress = {this.handleAdd.bind(this)}><Text style={styles.title}>⭐Add Userdata⭐</Text></TouchableOpacity>
        
        <View style = {styles.dualbutton}>
          <TouchableOpacity onPress = {() =>{this.props.navigation.navigate("App")}} style = {styles.button}><Text style = {styles.title}>⭐View User⭐</Text></TouchableOpacity>
          <TouchableOpacity onPress = {() =>{this.props.navigation.navigate("AddUserdata")}} style = {styles.button}><Text style = {styles.title}>⭐Add User⭐</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default AddUserdata;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding : 10,
    marginTop: StatusBar.currentHeight || 0,
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 12,
  },

  button: {
    margin : 10,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    },

  dualbutton : {
    backgroundColor: "#DDDDDD",
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});