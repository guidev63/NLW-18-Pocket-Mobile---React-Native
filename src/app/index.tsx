import { Welcome } from "@/components/Welcome";
import { Button } from "@/components/button";
import { Steps } from "@/components/steps";
import { router, } from "expo-router";
import { View } from "react-native";
export default function Index() {
    return (
        <View style={{ flex: 1, padding: 40, gap: 40 }}>
            <Welcome />
            <Steps />
            <Button onPress={() => router.navigate("/home")}>
                <Button.title>Começar</Button.title>
            </Button>
        </View>
    )
} 