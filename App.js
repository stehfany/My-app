// In App.js in a new project

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Alert, TouchableOpacity,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import foto from './src/255657387_1058704504755602_1567854528454508187_n.jpg'
import Github from './src/GitHub-Logo.png'
import LinkedIn from './src/unnamed.jpg'
import Cardy from './components/Card';


function HomeScreen() {
  function handlerRedes(redes){
    switch(redes){
      case 'LinkedIn':
        Alert.alert('Meu LinkedIn',"@sthefanyclarismundo-lima")
        break
        case 'Github':
          Alert.alert('Meu github',"@stehfany")
          break
    }
  }

  return (
    <>
     <View style={styles.page}>
      <View style={styles.container_cabecalho}>
        <Image source={foto}  style={styles.foto}/>
        <Text style={styles.nome}>Sthefany Clarismundo Lima</Text>
        <Text style={styles.Profissao} >Estagiária na Empresa Netcreator Soluções de em TI</Text>
        <View style={styles.redes}>
        <TouchableOpacity onPress={ () => handlerRedes('Github')}>
        <Image source={Github}  style={styles.Icons}/>
        </TouchableOpacity>
         
        <TouchableOpacity onPress={ () => handlerRedes('LinkedIn')}>
        <Image source={LinkedIn}  style={styles.Icons}/>
        </TouchableOpacity>
     
        

        
      </View>
      <Cardy title="Experiência Profissional">
      <Text style={styles.cardycontenttext}>Estagiária em ...</Text>
      <Text style={styles.cardycontenttext}>Estagiária em ...</Text>
      </Cardy>
      <Cardy title="Formação Acadêmica">
      <Text style={styles.cardycontenttext}>Engenharia de software em  ...</Text>
      <Text style={styles.cardycontenttext}>Técnico em administração em ...</Text>
      </Cardy>
    
      <View style={styles.button}>
      <Button style={styles.button}
      title="Go to Home"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('HomeScreen');
      }}
    />
      </View>
   
       
      </View>
   
      
    
     
     
      <StatusBar style="auto" />
   

    </View>
    </>
   
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({

  page:{
    backgroundColor:'E7E7E7',
    flex:1,
    alignItems:"center"
  },

  foto:{
    width:250,
    height:250,
    borderRadius:150,
    marginTop:20

  },

  container_cabecalho: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "flex-start",
    marginTop:50,
    marginBottom:50,
    width:700
   
  },
   nome:{
    fontSize:25,
    fontWeight:'bold',
    marginTop:10

   },
   Profissao:{
    fontSize:10,
    color:'#696969',
    marginTop:3,
    marginBottom:10,
    margin:20

   },
   formacao:{
    textAlign:'center',
    margin:10
   },
   Icons:{
    width:80,
    height:50,
    borderRadius:100,
    
   },
   redes:{
    flexDirection:'row',
    marginTop:10
   },
  
 
   button:{
    marginTop:20
   }
});



export default App;