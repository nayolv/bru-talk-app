import { Image, StyleSheet, View } from "react-native"

export const ImageForm = () => {
    return (
        <View style={styles.formImgContainer}>
            <Image
                source={require('../../../../assets/astro.png')}
                style={styles.formImg}
            />
        </View>)
}

const styles = StyleSheet.create({
    formImgContainer: {
        width: 250,
        height: 250,
    },
    formImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});