import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import  styles from './styles'

 import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
 import { faCog, faToolbox } from '@fortawesome/free-solid-svg-icons'

export default function CarItem() {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require("../../images/background.png")}
            style={styles.backgroundImage}
            />
            <View style={styles.header}>
             <FontAwesomeIcon icon={ faCog } size={24} style={styles.icon} /> 
               <Text style={styles.headerTitle}>Model 3</Text>
               <FontAwesomeIcon icon={ faToolbox } size={24} style={styles.icon}  />
            </View>
            <View style={styles.batterySection}>
                <Image source={require('../../images/battery.png')}
                style={styles.batteryImage}
                />
                <Text style={styles.batteryText}>
                    150 mi
                </Text>
                
                
            </View>

        </View>
    )
}

