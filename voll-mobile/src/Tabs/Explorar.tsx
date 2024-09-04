import { VStack, Text, Box, ScrollView} from "native-base";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";
import { Titulo } from "../components/Titulo";
import { CardConsulta } from "../components/CardConsullta";

export default function Explorar() {
    return(
        <ScrollView flex={1} bgColor="white">
            <VStack flex={1} p={5}>
                <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
                    <EntradaTexto
                        placeholder="Digite a especialidade"
                    />
                    <EntradaTexto
                        placeholder="Digite sua localização"
                    />
                    <Botao mt={3} mb={3}>
                        Buscar
                    </Botao>
                </Box>

                <Titulo color='blue.500' >Resultado da busca</Titulo>

                <CardConsulta
                nome='Dr. Gui'
                especialidade='Cirugião'
                foto='https://github.com/guilherme-Dias-gomes.png'
                />
                <CardConsulta
                nome='Dr. Gui'
                especialidade='Cirugião'
                foto='https://github.com/guilherme-Dias-gomes.png'
                />
                <CardConsulta
                nome='Dr. Gui'
                especialidade='Cirugião'
                foto='https://github.com/guilherme-Dias-gomes.png'
                />
                <CardConsulta
                nome='Dr. Gui'
                especialidade='Cirugião'
                foto='https://github.com/guilherme-Dias-gomes.png'
                />
            </VStack>
        </ScrollView>
        
    )
}