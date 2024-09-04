import { VStack, Text, Divider, ScrollView} from "native-base";
import { CardConsulta } from "../components/CardConsullta";
import { Titulo } from "../components/Titulo";
import { Botao } from "../components/Botao";

export default function Consultas() {
    return(
        <ScrollView p={5}>
            <Titulo color='blue.500' mb={5}>Minhas consultas</Titulo>
            <Botao mt={5} mb={5}>Agendar nova consulta</Botao>
            <Titulo color='blue.500' fontSize="lg" alignSelf="flex-start" mb={2}>Proximas consultas</Titulo>
            <CardConsulta
                nome='Dr. Gui'
                especialidade='Cirugião'
                foto='https://github.com/guilherme-Dias-gomes.png'
                data='04/07/2005'
                foiAgendado
            />

            <Divider mb={5}/>

            <Titulo color='blue.500' fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>
            <CardConsulta
                nome='Dr. Gui'
                especialidade='Cirugião'
                foto='https://github.com/guilherme-Dias-gomes.png'
                data='04/07/2005'
                foiAtendio
            />
            <CardConsulta
                nome='Dr. Gui'
                especialidade='Cirugião'
                foto='https://github.com/guilherme-Dias-gomes.png'
                data='04/07/2005'
                foiAtendio
            />
            <CardConsulta
                nome='Dr. Gui'
                especialidade='Cirugião'
                foto='https://github.com/guilherme-Dias-gomes.png'
                data='04/07/2005'
                foiAtendio
            />
        </ScrollView>
    )
}