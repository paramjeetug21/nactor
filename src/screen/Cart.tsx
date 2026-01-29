import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Cart = () => {
  const [chooseIcon, setChooseIcon] = useState('Home'); // Set default to Home

  const handlePressIcon = label => {
    setChooseIcon(label);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerSection}>
        {/* Location Section */}
        <View style={styles.locationContainer}>
          <MaterialIcons name="location-on" size={24} color="#8e8c8c" />
          <Text style={styles.locationText}>Location Name</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchSection}>
          <Feather
            name="search"
            color="#000"
            size={20}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Search Store"
            style={styles.input}
            placeholderTextColor="#666"
          />
        </View>

        <PhotoBox />
        <ExclusiveOffer />
      </View>

      {/* Fixed: Passed correct prop name */}
      <ButtomBar onIconPress={handlePressIcon} chooseIcon={chooseIcon} />
    </SafeAreaView>
  );
};

// --- Components ---

const PhotoBox = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const images = [
    'https://hips.hearstapps.com/hmg-prod/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?crop=1xw:0.94466xh;center,top&resize=1200:*',
    'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg',
    'https://mydiagnostics.in/cdn/shop/articles/img-1748326586409_1200x.jpg?v=1748327918',
  ];

  return (
    <View style={PhotoBoxStyles.container}>
      <View
        style={PhotoBoxStyles.boxWrapper}
        onLayout={event => setContainerWidth(event.nativeEvent.layout.width)}
      >
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {images.map((uri, index) => (
            <Image
              key={index}
              source={{ uri: uri }}
              style={[PhotoBoxStyles.image, { width: containerWidth }]}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const ExclusiveOffer = () => {
  return (
    <View style={ExclusiveOfferStyles.container}>
      <View style={ExclusiveOfferStyles.heading}>
        <Text style={ExclusiveOfferStyles.title}>Exclusive Offer</Text>
        <TouchableOpacity>
          <Text style={ExclusiveOfferStyles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={ExclusiveOfferStyles.miniContainer}>
        <Text style={{ textAlign: 'center' }}>Product Card</Text>
      </View>
    </View>
  );
};

const ButtomBar = ({ onIconPress, chooseIcon }) => {
  // Helper to determine color
  const getActiveColor = label =>
    chooseIcon === label ? '#53B175' : '#181725';

  return (
    <View style={ButtomBarStyle.container}>
      <NavItem
        label="Home"
        icon={<Entypo name="shop" size={27} color={getActiveColor('Home')} />}
        onPress={() => onIconPress('Home')}
        isActive={chooseIcon === 'Home'}
      />
      <NavItem
        label="Explore"
        icon={
          <MaterialCommunityIcons
            name="shopping-search"
            size={27}
            color={getActiveColor('Explore')}
          />
        }
        onPress={() => onIconPress('Explore')}
        isActive={chooseIcon === 'Explore'}
      />
      <NavItem
        label="Cart"
        icon={
          <MaterialCommunityIcons
            name="cart"
            size={27}
            color={getActiveColor('Cart')}
          />
        }
        onPress={() => onIconPress('Cart')}
        isActive={chooseIcon === 'Cart'}
      />
      <NavItem
        label="Favourite"
        icon={
          <Ionicons
            name="heart"
            size={27}
            color={getActiveColor('Favourite')}
          />
        }
        onPress={() => onIconPress('Favourite')}
        isActive={chooseIcon === 'Favourite'}
      />
      <NavItem
        label="Profile"
        icon={
          <FontAwesome
            name="user"
            size={27}
            color={getActiveColor('Profile')}
          />
        }
        onPress={() => onIconPress('Profile')}
        isActive={chooseIcon === 'Profile'}
      />
    </View>
  );
};

const NavItem = ({ icon, label, onPress, isActive }) => {
  return (
    <TouchableOpacity style={ButtomBarStyle.miniContainer} onPress={onPress}>
      {icon}
      <Text
        style={[
          ButtomBarStyle.label,
          { color: isActive ? '#53B175' : '#181725' },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

// --- Styles ---

const PhotoBoxStyles = StyleSheet.create({
  container: { margin: 20, width: '100%', alignItems: 'center' },
  boxWrapper: {
    width: '90%',
    aspectRatio: 2.5,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#ddd',
  },
  image: { height: '100%', resizeMode: 'cover' },
});

const ExclusiveOfferStyles = StyleSheet.create({
  container: { width: '90%', marginTop: 20, alignSelf: 'center' },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: { fontSize: 24, fontWeight: '600', color: '#181725' },
  seeAll: { fontSize: 16, color: '#53B175', fontWeight: '600' },
  miniContainer: {
    width: '45%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    padding: 10,
    justifyContent: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
  },
  headerSection: { width: '100%', alignItems: 'center', paddingTop: 20 },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  locationText: {
    color: '#504f4f',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    height: 50,
    width: '90%',
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  input: { flex: 1, fontSize: 16, fontWeight: '500', height: '100%' },
});

const ButtomBarStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  miniContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  label: { fontSize: 12, marginTop: 4, fontWeight: '600' },
});
