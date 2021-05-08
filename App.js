import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, Alert } from 'react-native'
import axios from 'axios'

export default class App extends Component {

  constructor(props){
      super(props);
      this.state = {
          data : [],
          uname : "",
          mail : "",
          phonenum : "",
          addrs : ""
      };
  }

  componentDidMount(){

    this.getDataUsername();

  }

  componentDidUpdate(){

    this.getDataUsername();
    
  }

  getDataUsername = () => {

      axios.get('http://192.168.0.106:4646/userdata/${this.state.uname}')

      .then( (response) => {
          let data = response.data;
          this.setState({data : data});
      })

      .catch(function (error){
          console.log(error);
      })

  }

  getDataEmail = () => {

    axios.get('http://192.168.0.106:4646/userdata/${this.state.mail}')

    .then( (response) => {
        let data = response.data;
        this.setState({data : data});
    })

    .catch(function (error){
        console.log(error);
    })

  }

  getDataPhone = () => {

    axios.get('http://192.168.0.106:4646/userdata/${this.state.phonenum}')

    .then( (response) => {
        let data = response.data;
        this.setState({data : data});
    })

    .catch(function (error){
        console.log(error);
    })

  }

  getDataAddress = () => {

    axios.get('http://192.168.0.106:4646/userdata/${this.state.addrs}')

    .then( (response) => {
        let data = response.data;
        this.setState({data : data});
    })

    .catch(function (error){
        console.log(error);
    })

  }

  deleteData = (id) => {

      console.log(id);
      axios.delete('http://192.168.0.106:4646/userdata/deleteUserdata/${id}')

      .then( (response) => {
          alert(response.data)
      })

      .catch(function (error){
          console.log(error);
      })

  }

  // Item = ({ author }) => (
  //     <View style = {styles.item}>
  //         <Text style = {styles.title}>{author}</Text>
  //     </View>
  // );

  renderItem = ({ item }) => (
      <View style = {{borderWidth : 2, borderColor : "blue", marginTop : 5}}>
          <Text style = {styles.title}>❄Username: {item.username}</Text>
          <Text style = {styles.title}>❄Email: {item.email}</Text>
          <Text style = {styles.title}>❄Phone: {item.phone}</Text>
          <Text style = {styles.title}>❄Address: {item.address}</Text>
          <TouchableOpacity onPress = {() => {this.props.navigation.navigate("UpdateUserdata", item)}} style={styles.button}><Text style = {styles.title}>⭐Update User⭐</Text></TouchableOpacity>
          <TouchableOpacity onPress = {() => {Alert.alert('Are you sure want to delete this item ?', 'Your action cannot be undone.',[
              {text : 'NO', onPress : () => console.warn('NO Pressed'), style : 'cancel'},
              {text : 'YES', onPress : () => this.deleteData(item.id)},
          ])}} style = {styles.button}><Text style = {styles.title}>⭐Delete User⭐</Text></TouchableOpacity>
      </View>
  )

  render() {
      return (
          <SafeAreaView style = {styles.container}>
              <TouchableOpacity onPress = {() =>{this.props.navigation.navigate("AddUserdata")}} style = {styles.button}><Text style = {styles.title}>⭐Add User⭐</Text></TouchableOpacity>
              <TextInput TextInput placeholder = "Search a Biodata Here..." onChangeText = {(data) => {this.setState({uname : data})}}/>
              <FlatList 
                  data = {this.state.data}
                  renderItem = {this.renderItem}
                  keyExtcactor = {item => item.id}
              />
          </SafeAreaView>
      );
  }
}

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

});