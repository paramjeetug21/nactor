import { ImageBackground, StyleSheet } from 'react-native';

export const Background = ({ children }) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://www.monstertreeservice.com/images/articles/GettyImages-476116580.jpg',
      }}
      style={styles.container}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderRadius: 8,
    flex: 1,
    backgroundColor: '#98b9ba',
  },
});
