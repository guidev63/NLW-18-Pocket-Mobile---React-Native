import { colors } from "@/styles/theme";
import { IconTicket } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { s } from "./styles";


type Props = {
    code:string
}

export function Coupon({code}:Props){
    return(
        <View style={s.container}>
            <Text  style={s.title}>Utilize Esse Cupom</Text>
            <View style={s.content}>
                <IconTicket size={24} color={colors.green.light} />
                <Text style={s.code}>{code}</Text>
            </View>
        </View>
    )
}