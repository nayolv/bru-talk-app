import { Image, StyleSheet, View } from 'react-native'

type ImagePreviewProps = {
    imgUrl: string;
}

export const ImagePreview = ({ imgUrl }: ImagePreviewProps) => {
    return (
        <View style={styles.imagePreviewContainer}>
            {imgUrl ?
                <Image
                    source={{ uri: imgUrl }}
                    style={styles.imagePreview}
                    resizeMode="contain"
                />
                :
                <Image
                    source={require('../../../../assets/no-image.png')}
                    style={styles.imagePreview}
                    resizeMode="contain"
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    imagePreviewContainer: {
        alignItems: 'center',
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white'
    },
    imagePreview: {
        width: 200,
        height: 200,
        borderRadius: 8
    }
});