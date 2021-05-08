import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native'
import axios from 'axios'

export class UpdateUserdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : this.props.route.params.id,
      username : this.props.route.params.username,
	    email : this.props.route.params.email,
	    phone : this.props.route.params.phone,
	    address : this.props.route.params.address
    };
  }

  handleUpdate(){
    axios.put(`http://192.168.0.106:4646/userdata/updateUserdata/${this.state.id}`, this.state)

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
        <Text style={styles.title}> Update Username </Text>
        <TextInput value = {this.state.username} placeholder = "Username" onChangeText={(data)=>{this.setState({username : data})}}/>
        <Text style={styles.title}> Update E-mail </Text>
        <TextInput value = {this.state.email} placeholder = "E-mail" onChangeText={(data)=>{this.setState({email : data})}}/>
        <Text style={styles.title}> Update Phone </Text>
        <TextInput value = {this.state.phone} placeholder = "Phone" onChangeText={(data)=>{this.setState({phone : data})}}/>
        <Text style={styles.title}> Update Address </Text>
        <TextInput value = {this.state.address} placeholder = "Address" onChangeText={(data)=>{this.setState({address : data})}}/>
      
        <TouchableOpacity style = {styles.button} onPress = {this.handleUpdate.bind(this)}><Text style={styles.title}>⭐Update Userdata⭐</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.button} onPress={()=>{this.props.navigation.replace("App")}}><Text style={styles.title}>⭐Cancel⭐</Text></TouchableOpacity> 
      </View>
    );
  }
}

export default UpdateUserdata;

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