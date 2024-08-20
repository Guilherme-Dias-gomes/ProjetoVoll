import { ITextProps, Text } from "native-base";
import { ReactNode } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface TituloProps extends ITextProps {
    children: ReactNode
}

export function Titulo({ children, ...rest }: TituloProps) {
    return(
        <Text fontSize="2xl"
              fontWeight="bold"
              color="gray.500"
              textAlign="Center"
              mt={5}
              mb={8}
              {...rest}>
          {children}
        </Text>
    )
}