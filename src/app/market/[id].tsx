import { Button } from "@/components/button";
import { Loading } from "@/components/loading";
import { Coupon } from "@/components/market/coupon";
import { Cover } from "@/components/market/cover";
import { Details, PropsDetails } from "@/components/market/details";
import { api } from "@/services/api";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Modal, View } from "react-native";

type DataProps = PropsDetails & {
    cover: string
}

export default function Market() {
    const [data, setData] = useState<DataProps>()
    const [coupon, setcCoupon] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false)
    const [couponIsFetching, setCouponIsFetching] = useState(false)

    const [_, requestPermission] = useCameraPermissions()

    const params = useLocalSearchParams<{ id: string }>()

    async function fetchMarket() {
        try {
            const { data } = await api.get(`/markets/${params.id}`)
            setData(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            Alert.alert("Erro", "Não Foi possivel Carregar os dados", [
                {
                    text: "OK",
                    onPress: () => router.back()
                },
            ])
        }
    }


    async function handleOpenCamera() {

        try {
            const { granted } = await requestPermission()

            if (!granted) {
                return Alert.alert("Camera", "Voce precisa habilitar o uso da Camera.")
            }


            setIsVisibleCameraModal(true)
        } catch (error) {
            console.log(error)
            Alert.alert("Camera", "Não Foi possível a Utilizar a Camera")
        }
    }

    async function getCoupon(id: string) {
        try {
            setCouponIsFetching(true)
        } catch (error) {
            console.log(error)
            Alert.alert("Erro", "Não foi possivel utilizar o cupom")
        }finally{
            setCouponIsFetching(false)
        }
    }


    useEffect(() => {
        fetchMarket()
    }, [params.id])

    if (isLoading) {
        return <Loading />
    }

    if (!data) {
        return <Redirect href="/home" />
    }

    return (

        <View style={{ flex: 1 }}>
            <Cover uri={data.cover} />
            <Details data={data} />
            {coupon && <Coupon code={coupon} />}
            <View style={{ padding: 32 }}>
                <Button onPress={handleOpenCamera}>
                    <Button.title>Ler QR Code</Button.title>
                </Button>
            </View>

            <Modal style={{ flex: 1, }} visible={isVisibleCameraModal}>
                <CameraView style={{ flex: 1 }} />
                <View style={{ position: "absolute", bottom: 32, left: 32, right: 32 }}></View>
                <Button onPress={() => setIsVisibleCameraModal(false)} isLoading={couponIsFetching}>
                    <Button.title>Voltar</Button.title>
                </Button>
            </Modal>
        </View>
    )
}