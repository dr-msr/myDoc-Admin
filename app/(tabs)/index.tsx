import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Changelog from '../../components/changelog';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Changelog Update</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={{width:'100%', paddingLeft:10, paddingRight:10}} lightColor='#ffffff'>
      <Changelog/></View>
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
