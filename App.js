import React,{ useState, useEffect } from 'react';
import RNShake from 'react-native-shake';
import Torch from 'react-native-torch';
import { Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';

import lampLigada from './src/lampLigada.jpg';
import lampDesligada from './src/lampDesligada.jpg';

export default function App(){
    const [toggle, setToggle] = useState(toggle);

    useEffect(()=>{
        // ligar lanterna(torch)
        toggle ? Torch.switchState(true): Torch.switchState(false)
    },[toggle]);

    useEffect(()=>{
        //chaqualhar (shake)
        const shake = RNShake.addListener(()=>{
            setToggle(oldToggle => !oldToggle);
        });
        return () => shake.remove();
    },[toggle])
    
    return(
        <SafeAreaView
            style={{backgroundColor:'black',
            flex:1, 
            alignItems:'center',
            justifyContent:'center'}}
        >
            <TouchableOpacity onPress={()=>setToggle(!toggle)}>
                <Image source={toggle ? lampLigada : lampDesligada}/>
                <Text style={{color:'white', 
                    textAlign:'center', 
                    fontSize:50 }}
                >{toggle ? 'Ligada' : 'Desligada'}
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}