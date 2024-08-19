
import Logo from './assets/Logo.png'

import {Image, Text, VStack, Box, FormControl, Input, Button, Link} from 'native-base';
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao';
import { useState } from 'react';

export default function Cadastro() {

    const [numSecao, setNumSecao] = useState(0);

    const secoes = [
      {
        id: 1,
        titulo: 'Insira alguns dados básicos',
        entradaTexto: [
          {
            id: 1,
            label: 'Nome',
            placeholder: 'Digite seu nome completo'
          },
          {
            id: 2,
            label: 'Email',
            placeholder: 'Digite seu email'
          }
        ]
      },
      {
        id: 2,
        titulo: 'Agora, mais alguns dados sobre você',
        entradaTexto: [
          {
            id: 1,
            label: 'cep',
            placeholder: 'Digite seu CEP'
          }
        ] 
      }
    ]

    function avancarSecao() {
      if(numSecao < secoes.length){
        setNumSecao(numSecao + 1);
      }
    }

    return (
      <VStack flex={1} alignItems="center" p={5} justifyContent="center">
        <Image source={Logo} alt="Logo Voll" mb={16}/>

        <Titulo>
          {secoes[numSecao].titulo}
        </Titulo>
        <Box>
          {
            secoes[numSecao].entradaTexto.map(entrada => {
              return <EntradaTexto label={entrada.label}
                                   placeholder={entrada.placeholder} key={entrada.id}/>
            })
          }
        </Box>
        <Botao onPress={() => avancarSecao()}>Avançar</Botao>
      </VStack>
    )
}
  
