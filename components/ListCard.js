import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';

const ListCard = (props) => {
  return (
    <View>
      <Card>
        <Card.Title style={{fontSize: 25}}>ListID: {props.listId}</Card.Title>
        <View style={styles.container}>
          {props.items.map((obj, i) => {
            return (
              <View key={i} style={styles.listItems}>
                <Text key={i} style={styles.text}>
                  ID:{' '}
                  <Text key={Math.random()}>
                    {obj.Id}
                    {'   '}
                  </Text>
                  Name: <Text key={Math.random()}>{obj.name}</Text>
                </Text>
              </View>
            );
          })}
        </View>
      </Card>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFDC33',
  },
  listItems: {
    flex: 1,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#300C39',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
  },
};

export default ListCard;
