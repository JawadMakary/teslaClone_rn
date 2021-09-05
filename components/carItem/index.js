import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity } from 'react-native'
import  styles from './styles'

 import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
 import { faCog, faFan, faKey, faLock, faToolbox } from '@fortawesome/free-solid-svg-icons'

export default function CarItem() {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require("../../images/background.png")}
            style={styles.backgroundImage}
            />
            <View style={styles.header}>
                <TouchableOpacity> 
             <FontAwesomeIcon icon={ faCog } size={24} style={styles.icon} /> 
             </TouchableOpacity>
               <Text style={styles.headerTitle}>Model X</Text>
               <TouchableOpacity>

              
               <FontAwesomeIcon icon={ faToolbox } size={24} style={styles.icon}  />
               </TouchableOpacity>
            </View>
            <View style={styles.batterySection}>
                <Image source={require('../../images/battery.png')}
                style={styles.batteryImage}
                />
                <Text style={styles.batteryText}>
                    150 mi
                </Text>
                
                
            </View>
            <View style={styles.status}>
                <Text style={styles.statusText}>
                    Parked
                </Text>
            </View>
            <View style={styles.controls}>
            <TouchableOpacity>
                <View style={styles.controlsButton}>
                   
                <FontAwesomeIcon icon={ faFan } size={24} style={styles.icon} /> 

                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.controlsButton}>
                <FontAwesomeIcon icon={ faKey } size={24} style={styles.icon} /> 
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.controlsButton}>
                <FontAwesomeIcon icon={ faLock } size={24} style={styles.icon} /> 
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

