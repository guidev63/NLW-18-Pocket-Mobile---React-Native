import { IconTicket } from "@tabler/icons-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./styles";

export function Place() {
  return (
    <TouchableOpacity style={s.container}>
      <Image style={s.image} 
      />
      <View style={s.content}>
        <Text style={s.name}></Text>
        <Text style={s.description}></Text>
        <View style={s.footer}>
            <IconTicket size={16}/>
        </View>
      </View>
    </TouchableOpacity>
  );
}
