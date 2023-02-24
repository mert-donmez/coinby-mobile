import { StyleSheet, Text, View, TextInput, Image,SafeAreaView,Button, Pressable } from 'react-native';
import React from 'react'

function LoginScreen({navigation}) {
return (
        <View style={styles.container}>
          <View style={styles.logo_container}>
          <View style={styles.coinby_logo}>{displayCoinbyLogo()}</View>
          <Text style={styles.text_header}>COINBY</Text>
          </View>
          <View style={styles.login_form_inputs}>
          {space()}
          <Text style={{color:'white',fontSize:42}}>Giriş Yap</Text>
          <Text style={{fontSize: 5}}>{'\n'}</Text>
            <Text style={{color:'white',fontSize:22}}>E-Mail Adresi</Text>
            <TextInput style={styles.login_form_texts} ></TextInput>
            <Text>{'\n'}</Text>
            <Text style={{color:'white',fontSize:22}}>Şifre</Text>
            <TextInput style={styles.login_form_texts} secureTextEntry></TextInput>
            <Text style={{fontSize: 5}}>{'\n'}</Text>
            <Text style={{color:'grey', fontSize:24,textDecorationLine: 'underline',fontWeight: '200'}}>Şifremi Unuttum</Text>
            <Text style={{fontSize: 10}}>{'\n'}</Text>
          <Pressable style={styles.login_button}> 
            <Text style={styles.login_button_text}>Giriş Yap</Text> 
          </Pressable>
          {space()}
          <Text style={{color:'grey', fontSize:24, fontWeight:'200'}}>Hesabın yok mu?</Text>
          <Pressable style={styles.register_button} onPress={() => navigation.navigate('Register')}> 
            <Text style={styles.register_button_text}>Kayıt Ol</Text> 
          </Pressable>
          </View>
          
    
          {displayFooterGradient()}
        </View>
      );
    }
    
    const displayCoinbyLogo = () => { 
      return (
        <Image
          style={{ width: 70, height: 70}}
          source={require('./assets/icon_logo.png')}
        />  
      );
    };
    
    const displayFooterGradient = () => {
      return (
        <Image 
        source={require('./assets/gradient.png')}
        style={{width:'100%',height:'15%'}}
        
        />
      )
    }
    
    const space = () => {
      return (
        <View>
          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
        </View>
        
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        
      },
      logo_container: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: '14%',
        width: '60%',
        paddingTop: '0%',
        paddingRight: '10%',
        paddingBottom: '10%',
      },
      
      text_header : {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        paddingBottom: 5,
        paddingRight: 0,
      },
    
      coinby_logo : {
        paddingBottom: 0,
        paddingLeft : 0,
        paddingRight: 10,
    
      },
      login_form_texts : {
        backgroundColor: '#343A40',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '8%',
        borderWidth: 1,
        borderRadius: 8,
      },
      login_form_inputs : {
        backgroundColor: 'black',
        width : '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
      },
      login_button :{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        borderRadius: 30,
        elevation: 3,
        backgroundColor: 'white',
        width: '45%',
        height: '9%',
        
      },
      login_button_text: {
        fontSize: 23,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'black',
      },
      register_button :{
        borderColor: 'white',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 32,
        borderRadius: 30,
        elevation: 3,
        backgroundColor: 'black',
        width: '39%',
        height: '7%',
        borderWidth: 1,
        borderColor: 'white'
      },
      register_button_text: {
        fontSize: 23,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
        fontWeight: '300'   
      },  
    });

export default LoginScreen;
    