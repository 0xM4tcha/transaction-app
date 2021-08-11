import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { GeneralCardModels } from '../models';
import Colors from '../styles/Colors';

export function GeneralCard(options: GeneralCardModels) {
  const { title, items, buttonLabel, cardType, onClick } = options;

  const subtitle = (items: any []) => {
    return (
      <View>
        {
          items.map((item, index) => (
            <Text key={index} style={styles.subtile}>{ item }</Text>
          ))
        }
      </View>
    )
  }

  const buttonCardStyle = (cardType:string | undefined) => {
    let style : any = {}
    switch(cardType) {
      case 'primary':
        style.label = styles.primaryLabel;
        style.button = styles.primary;
        style.badge = styles.badgePrimary;
        break;
      case 'outline':
        style.label = styles.outlineLabel;
        style.button = styles.outline;
        style.badge = styles.badgeOutline;
        break;
      default:
        break;
    }
    return style;
  }
  
  return (
    <View style={[styles.wrapCard, buttonCardStyle(cardType).badge]} >
      <TouchableOpacity onPress={onClick} >
        <View style={styles.card} >
          <View style={styles.cardContainer} >
            <View >
              <Text style={styles.title}>{ title }</Text>
              { subtitle(items) }
            </View>
            <View>
              <View style={[styles.buttonDefault, buttonCardStyle(cardType).button]}>
                <Text style={buttonCardStyle(cardType).label}>{ buttonLabel }</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapCard: {
    position: 'relative',
    borderRadius: 6,
  },
  card: {
    height: 100,
    width: '100%',
    backgroundColor: Colors.primaryWhite,
    borderRadius: 10,
    marginLeft: 6,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  cardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  primaryLabel: {
    color: Colors.primaryWhite,
  },
  outlineLabel: {
    color: '#dedede',
  },
  buttonDefault: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    borderRadius: 5,
  },
  primary: {
    backgroundColor: Colors.primaryGreen,
    color: Colors.primaryWhite,
  },
  outline: {
    borderWidth: 1,
    borderColor: Colors.primaryOrange,
    color: '#dedede',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtile: {
    paddingVertical: 5,
  },
  badgePrimary: {
    backgroundColor: Colors.primaryGreen,
  },
  badgeOutline: {
    backgroundColor: Colors.primaryOrange,
  },
});
