
import Logo from './assets/Logo.png'

import {Image, Text, VStack, Box, FormControl, Input, Button, Link, Center, Checkbox} from 'native-base';
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao';
import { useState } from 'react';

export default function Cadastro() {

    const [numSecao, setNumSecao] = useState(0);

    const secoes = [
      {
        id: 1,
        titulo: 'Insira alguns dados básicos:',
        entradaTexto: [
          {
            id: 1,
            label: 'Nome',
            placeholder: 'Digite seu nome completo'
          },
          {
            id: 2,
            label: 'Email',
            placeholder: 'Insira seu endereço de email'
          },
          {
            id: 3,
            label: 'Crie uma senha',
            placeholder: 'Insira sua senha'
          },
          {
            id: 4,
            label: 'Repita sua senha',
            placeholder: 'insira sua senha'
          }
        ],
        checkbox: []
      },
      {
        id: 2,
        titulo: 'Agora, mais alguns dados sobre você:',
        entradaTexto: [
          {
            id: 1,
            label: 'CEP',
            placeholder: 'Insira seu CEP'
          },
          {
            id: 2,
            label: 'Endereço',
            placeholder: 'Insira seu endereço'
          },
          {
            id: 3,
            label: 'Número',
            placeholder: 'Insira seu número'
          },
          {
            id: 4,
            label: 'Complemento',
            placeholder: 'insira seu complemento'
          },
          {
            id: 5,
            label: 'Telefone',
            placeholder: '(00) 00000-0000'
          }
        ],
        checkbox: []
      },
      {
        id: 3,
        titulo: 'Para finalizar, qual seu plano de saúde?',
        entradaTexto: [],
        checkbox: [
          {
            id: 1,
            value: 'Sulamerica'
          },
          {
            id: 2,
            value: 'Unimed'
          },
        ]
      }
    ]

    function avancarSecao() {
      if(numSecao < secoes.length - 1){
        setNumSecao(numSecao + 1);
      }
    }

    function voltarSecao() {
      if(numSecao > 0){
        setNumSecao(numSecao - 1);
      }
    }

    return (
      <VStack flex={1} alignItems="center" p={5} justifyContent="center">
        <Image source={Logo} alt="Logo Voll" />

        <Titulo >
          {secoes[numSecao].titulo}
        </Titulo>
        <Box>
          {
            secoes[numSecao]?.entradaTexto?.map(entrada => {
              return <EntradaTexto label={entrada.label}
                                   placeholder={entrada.placeholder} key={entrada.id}/>
            })
          }
        </Box>
        <Box>
          {
            secoes[numSecao].checkbox.map(checkbox => {
              return <Checkbox key={checkbox.id} 
              value={checkbox.value}>
                {checkbox.value}
              </Checkbox>
            })
          }
        </Box>
       { numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor="gray.400">Voltar</Botao>}
        <Botao onPress={() => avancarSecao()} mt={4}>Avançar</Botao>
      </VStack>
    )
}
  
