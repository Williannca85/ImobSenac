
import React, {Component} from 'react';

import { StyleSheet, ScrollView } from 'react-native';
import { Box } from 'native-base';
import { DevSettings } from 'react-native';
import {
  NativeBaseProvider,
  Text
} from 'native-base';

import Banco from '../database/Banco';
import Imovel from '../model/Imovel';
import Imoveis from '../components/Imoveis';

export default class Lista extends Component {
    // Iniciação dos nossos states
    constructor(props) {
      super(props);
      this.state = {
        endereco: "",
        finalidade: "",
        tipo: "",
        valor: "",
        imagem: "",
        imoveis: []
      }
      this.imoveis = []
      this.listar()
    }

    // Métodos com persistencia no banco
    listar() {
      const db = new Banco();
      db.listar().then(data => {
        this.setState({imoveis: data})
      })
    }

    cadastrar(endereco, finalidade, tipo, valor, imagem) {
      const db = new Banco();
      const imovel = new Imovel(endereco, finalidade, tipo, valor, imagem);
      db.adicionar(imovel);
      DevSettings.reload();
    }

    remover(id) {
      const db = new Banco();
      db.deletar(id).then(data => {
        DevSettings.reload();
      })
    }

    takePicture = async () => {
      if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        console.log(data.uri);
        this.setState({ imagem: data.uri })
      }
    };

    render() {
        return(
            <NativeBaseProvider  >   

                <Text fontSize={20} color='blue.600'alignSelf="center">Lista de Imovéis</Text>

                <Text></Text>

                
                <Text fontSize={15} color='blueGray.800'alignSelf="center" >
                  Encontre aqui o seu Imovel do sonho para comprar ou alugar
                  </Text>
                 
              <Text></Text>
              <Text></Text>

                <ScrollView margin={3}> 
                <Box flex={2} bg="#fff4d6" >
                  {this.state.imoveis.map(imovel => (
                    <Imoveis key={imovel.id} id={imovel.id} endereco={imovel.endereco} finalidade={imovel.finalidade} tipo={imovel.tipo} valor={imovel.valor} imagem={imovel.imagem} excluir={this.remover}></Imoveis>
                  ))}
                   </Box>
                </ScrollView>
            </NativeBaseProvider>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});