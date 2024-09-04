import {Text, Box, ScrollView, Avatar, Divider, VStack, Center} from "native-base";
import { Titulo } from "../components/Titulo";

export default function Perfil() {
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5} >
                <Titulo color="blue.500">Meu Perfil</Titulo>

                <Avatar source={{uri: "https://github.com/guilherme-Dias-gomes.png"}} mt={5} size={"xl"}/>
                
                <Titulo color="blue.500">Informações Pessoais</Titulo>
                <Titulo fontSize={"lg"} mb={1}>Guilherme Dias Gomes</Titulo>
                <Text >04/07/2005</Text>
                <Text>São Paulo - SP</Text>

                <Divider mt={5}/>

                <Titulo color="blue.500" mb={1}>Histórico Médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
            </VStack>            
        </ScrollView>
    )
}

