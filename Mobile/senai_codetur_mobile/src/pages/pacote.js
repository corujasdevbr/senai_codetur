import React, {Component} from 'react';
import {View, Text, Linking, Button, StyleSheet, Image} from 'react-native';

class Pacote extends Component {
    static navigationOptions= ({navigation}) =>({
        title: 'Detalhes Pacote'      
      });

      _pressCall=()=>{
        const url='tel://11972084339'
        Linking.openURL(url)
    }

      render(){
          const pacote = this.props.navigation.getParam('pacote')
          return (
            <View style={styles.pacoteBox}>
                <Image style={{height:250, width:'100%'}} source={{uri: pacote.urlImagem}} />
                <Text style={styles.titulo}>{pacote.titulo}</Text>
                <Text style={styles.descricao}>{pacote.descricao}</Text>
                <Text style={styles.descricao}>{pacote.dataInicio} - {pacote.dataFim}</Text>
                <Button title='Mais informações' onPress={this._pressCall}/>
              </View>
          )
      }
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

export default Pacote;