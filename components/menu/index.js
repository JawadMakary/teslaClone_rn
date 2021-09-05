import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import  styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight, faMusic } from '@fortawesome/free-solid-svg-icons'

export default function Menu() {
    return (
        <View style={styles.menuItems}>
            <TouchableOpacity>
            <View style={styles.menuRow}>
            <FontAwesomeIcon icon={faMusic} size={24} style={styles.icon} /> 
            <View style={styles.menuTextBox}>
                <Text style={styles.menuText}>media</Text>

            </View>
            <FontAwesomeIcon icon={faChevronRight} size={24} style={styles.arrowIcon}  /> 
            </View>
            </TouchableOpacity>
        </View>
    )
}

