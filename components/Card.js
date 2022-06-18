import React from 'react';
import { Text, View } from 'react-native';
import style from './styles';

import styles from "./styles";

const Cardy = ({title,children}) => {
    return(
      

        <>
        <View style={styles.cardy}>
            <Text style={styles.cardycontenttext}>{title}</Text>
        </View><View style={styles.cardycontent}>
               {children}

            </View>
            </>
          
    )
  
}

export default Cardy;