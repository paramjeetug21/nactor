import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ButtonGreen } from './components/Button';

const ItemObj = [
  // ... your data remains the same
  {
    id: '1',
    itemImage:
      'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
    itemName: 'Egg',
    itemQuanity: '4',
    itemPrice: '40',
  },
  {
    id: '2',
    itemImage:
      'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
    itemName: 'Egg',
    itemQuanity: '4',
    itemPrice: '40',
  },
  {
    id: '1',
    itemImage:
      'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
    itemName: 'Egg',
    itemQuanity: '4',
    itemPrice: '40',
  },
  {
    id: '2',
    itemImage:
      'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
    itemName: 'Egg',
    itemQuanity: '4',
    itemPrice: '40',
  },
  {
    id: '1',
    itemImage:
      'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
    itemName: 'Egg',
    itemQuanity: '4',
    itemPrice: '40',
  },
  {
    id: '2',
    itemImage:
      'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
    itemName: 'Egg',
    itemQuanity: '4',
    itemPrice: '40',
  },
  {
    id: '1',
    itemImage:
      'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
    itemName: 'Egg',
    itemQuanity: '4',
    itemPrice: '40',
  },
  {
    id: '2',
    itemImage:
      'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
    itemName: 'Egg',
    itemQuanity: '4',
    itemPrice: '40',
  },
  {
    id: '1',
    itemImage:
      'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
    itemName: 'Egg',
    itemQuanity: '4',
    itemPrice: '40',
  },
  {
    id: '2',
    itemImage:
      'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
    itemName: 'Egg',
    itemQuanity: '4',
    itemPrice: '40',
  },
];

export const HomeCart = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>My Cart</Text>

      {/* 1. Scrollable area takes all remaining space */}
      <View style={styles.listWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }} // Adds space at the very end of the list
        >
          {ItemObj.map((obj, index) => (
            <ItemBar key={index} data={obj} />
          ))}
        </ScrollView>
      </View>

      {/* 2. Fixed Button Area sits outside the ScrollView */}
      <View style={styles.bottomContainer}>
        <ButtonGreen buttonTitle={'Go for checkout'} />
      </View>
    </SafeAreaView>
  );
};

const ItemBar = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.itemImage }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{data.itemName}</Text>
        <Text style={styles.qtyText}>Qty: {data.itemQuanity}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Pressable hitSlop={10}>
          <FontAwesome style={styles.removeBtn} name="remove" size={20} />
        </Pressable>
        <Text style={styles.priceText}>${data.itemPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  listWrapper: {
    flex: 1, // This is key: it pushes the bottom container down
    width: '100%',
    paddingHorizontal: 15,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    marginVertical: 6,
    // Add subtle shadow for depth
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  qtyText: {
    color: '#777',
    marginTop: 2,
  },
  priceContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 50,
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2e7d32', // Greenish price
  },
  removeBtn: {
    fontSize : 24 ,
    color: '#f18686', // Red for removal
  },
  bottomContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
  },
});
