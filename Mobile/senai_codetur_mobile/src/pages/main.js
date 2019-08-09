import React, { Component } from 'react';
import api from '../services/api';

import {View, Text, FlatList, TouchableOpacity, Button, StyleSheet, Image} from 'react-native';


export default class Main extends Component{

  static navigationOptions= ({navigation}) =>({
    title: 'Pacotes'
  });

    state = {
        pacotes: []
    };

    componentDidMount(){
        this.carregaPacotes();
    }
    

    carregaPacotes = async () => {
        const response = await api.get('pacote/listarativos')
        const dadosDaApi = response.data;
        this.setState({ pacotes : dadosDaApi });
    };

    render(){
      const {navigate} = this.props.navigation;
      
      return(
        <View style={styles.container}>
                <FlatList 
                    contentContainerStyle={styles.list}
                    data={this.state.pacotes}
                    keyExtractor={item => item.id}
                    renderItem={({item})=>
                    <View style={styles.pacoteBox}>
                    <Image style={{height:250, width:'100%'}} source={{uri: item.urlImagem}} />
                    <Text style={styles.titulo}>{item.titulo}</Text>
                      <Button
                        title="Detalhes"
                        onPress={() => {
                          this.props.navigation.navigate("Pacote",{
                             pacote : item
                          });
                        }}
                      />
                      </View>
                      }
                      
                      />
            </View>
         
       );
    }

    renderizaItem = ({ item }) => (
      
      <View style={styles.pacoteBox}>
		  <Image style={{height:250, width:'100%'}} source={{uri: item.urlImagem}} />
		  <Text style={styles.titulo}>{item.titulo}</Text>
		  <Text style={styles.titulo}>{pacote.dataInicio} - {pacote.dataFim}</Text>
		  <Button
		  title="View Details"
		  onPress={() => navigate('Detalhes', {id: item.id})}
		  />

		  </View>
      );
}

const styles = StyleSheet.create({
	container:{
		 flex: 1,
        flexDirection: 'column',
		justifyContent: 'center',
       
	},
	pageName:{
		margin:10,fontWeight:'bold',
		color:'#000', textAlign:'center'
	},
	pacoteBox:{
		padding:5,margin:10,borderColor:'orange',borderBottomWidth:1
	},
	titulo:{
		padding:5, color:'orange',fontWeight:'bold',textAlign:'center'
	},
	descricao:{
		padding:5,color:'blue',textAlign:'center'
	}
})