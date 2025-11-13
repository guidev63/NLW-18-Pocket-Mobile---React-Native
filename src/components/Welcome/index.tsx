import { Image, Text, View } from "react-native";
import { s } from "./style";

export function Welcome() {
    return <View>
        <Image source={require("@/assets/logo.png")} style={s.logo} />
        <Text style={s.title}>Boas Vindas ao Nearby</Text>
        <Text style={s.subtitle}>Tenha Cupons de Vantagem para usar em {"\n"}
            seus Estabelecimentos Favoritos
        </Text>
    </View>
}