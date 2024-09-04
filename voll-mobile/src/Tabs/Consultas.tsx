import { VStack, Text} from "native-base";
import { CardConsulta } from "../components/CardConsullta";

export default function Consultas() {
    return(
        <VStack p={5}>
            <Text>Consultas</Text>
            <CardConsulta
                nome="Dr. Gui"
                especialidade="Cirugião"
                foto="https://github.com/guilherme-Dias-gomes.png"
                data="04/07/2005"
                foiAtendio
                foiAgendado
            />
        </VStack>
    )
}