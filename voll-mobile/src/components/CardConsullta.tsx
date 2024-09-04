import { Avatar, Text, VStack } from "native-base";
import { Botao } from "./Botao";

interface CardProps {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    foiAtendio: boolean;
    foiAgendado: boolean;
}

export function CardConsulta({
    nome,
    foto,
    especialidade,
    data,
    foiAtendio,
    foiAgendado
}: CardProps) {
    return(
        <VStack w="100%" bg="white" p="5" borderRadius="lg" shadow={2}>
            <VStack flexDir="row">
                <Avatar source={{uri: foto}} size={"lg"}/>
                <VStack pl="4">
                    <Text fontSize="md" bold>{nome}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>
            <Botao mt={4}>
                Agendar Consulta
            </Botao>
        </VStack>
    )
}