import { Image, ImageSourcePropType, StyleSheet } from "react-native";

export const ImageViewer = ({
  placeholderImage,
}: {
  placeholderImage: ImageSourcePropType;
}) => {
  return <Image source={placeholderImage} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 20,
  },
});
