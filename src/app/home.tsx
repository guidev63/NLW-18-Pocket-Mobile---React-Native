import { Categories, CategoriesProps } from "@/components/categories";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";

export default function Home() {
    const [categories, setCategories] = useState<CategoriesProps>([])
    const [category, setCategory] = useState("")

    async function fetchCategories() {
        try {
            const { data } = await api.get("/Categories")
            setCategories(data)
            setCategory(data[0].id)
        } catch (error) {
            console.log(error)
            Alert.alert("Categorias", "Nõ foi possivel Carregar as Categorias.")
        }
    }
    useEffect(() => {
        fetchCategories()
    }, [])
    return <View style={{ flex: 1 }}>
        <Categories
            data={categories}
            onSelect={setCategory}
            selected={category} />
    </View>
}