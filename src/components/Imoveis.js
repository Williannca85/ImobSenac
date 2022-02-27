
import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import {
    NativeBaseProvider,
    Box,
    HStack,
    VStack,
    Text,
    Pressable,
    Image,
  } from 'native-base';


export default class Imoveis extends Component {
    render() {
        return(
            <NativeBaseProvider >
            <Box
              margin={1}
              padding={2}
              bg="#c6c6c6c6"
              rounded="lg"
              alignSelf="center"
              width={375}
              maxWidth="95%"
            >
              <HStack justifyContent="space-between">
                <Box justifyContent="space-between">
                  <VStack space={2}>
                    <Text fontSize="sm" color="#000000" fontWeight={'bold'}>
                        {this.props.id} - {this.props.endereco}
                    </Text>
                    <Text color="#000000" fontSize="xs">
                        {this.props.finalidade}
                    </Text>


                    <Text color="#000000" fontSize="xs">
                        Tipo: {this.props.tipo}
                    </Text>
                    <Text color="#000000" fontSize="xs">
                        Valor: R$ {this.props.valor}
                    </Text>                    
                  </VStack>
                  <Pressable

                    marginTop={1}
                    padding={2}
                    rounded="sm"
                    bg="red.700"
                    alignSelf="flex-start"
                    onPress={ ()=> {this.props.excluir(this.props.id)}}
                  >
                    <Text
                      textTransform="uppercase"
                      fontSize={'xs'}
                      fontWeight="bold"
                      color="white"
                    >
                      <Icon name="trash" size={13} color="white" /> Excluir
                    </Text>
                  </Pressable>

                </Box>
                <Image
                  source={{
                    uri: this.props.imagem,
                  }}
                  alt={"..."}
                  height={75}
                  rounded="full"
                  width={75}
                />
              </HStack>
            </Box>
            
          </NativeBaseProvider>

        )
    }
}

