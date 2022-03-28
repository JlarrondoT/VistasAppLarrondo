import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {styles} from './styles';
import {CATEGORIES} from '../../constants/categories';
import CategoryGrid from '../../components/molecules/category-grid/index';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Home = ({navigation}) => {
  const handleSelectCategory = category => {
    navigation.navigate('Category', {id: category.id, name: category.name});
  };
  const renderItem = ({item}) => (
    <CategoryGrid item={item} onSelected={handleSelectCategory} />
  );
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <Text style={styles.title}>Selecciona una categoria</Text>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
