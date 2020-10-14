//import libraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ListCard from './ListCard.js';
// create a component
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  //group entries with same listId together
  groupBy = (array) => {
    let group = {};
    //populate the sorted array into an object, grouping elements by id
    array.forEach((element) => {
      if (!group.hasOwnProperty(element.listId)) {
        group[element.listId] = [];
      } else {
        group[element.listId].push({
          Id: element.id,
          name: element.name,
        });
      }
    });
    return group;
  };

  componentDidMount = () => {
    return fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json')
      .then((response) => response.json())
      .then((json) => {
        //filter out objects with key = "" or name = null
         const filtered = json.filter((el) => el.name);

        //Design choice: when looking at name, sorted alphabetically.
        //"item 431" comes before "item 30". If wanted to look at number, could have just sorted by ID

        //sort first by listId, then by name
        let sorted = filtered.sort((a, b) => a.listId - b.listId || a.name.localeCompare(b.name));

        //group by listId
        let group = this.groupBy(sorted);

        //store retrieved and processed data in state
        this.setState({
          data: group,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log.error('error');
      });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Fetching data...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ScrollView>
            {Object.entries(this.state.data).map(([key, value]) => {
              let currListId = key;
              return (
                <View key={key}>
                  <ListCard listId={currListId} items={value} />
                  <Text style={styles.text}></Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      );
    }
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FBA819',
    alignContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 30,
    alignContent: 'center',
    textAlign: 'center',
  },
});

//make this component available to the app
export default Home;
