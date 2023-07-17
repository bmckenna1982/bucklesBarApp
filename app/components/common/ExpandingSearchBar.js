import React, { useState } from 'react';
import { Animated, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { usePanGestureHandler, withOffset } from 'react-native-redash';

const ExpandingSearchBar = () => {
    const [expanded, setExpanded] = useState(false);
    const { gestureHandler, translation, state } = usePanGestureHandler();
    const searchBarHeight = withOffset(translation.y, state);
  
    const toggleExpand = () => {
      setExpanded(!expanded);
    };
  
    return (
      <View style={styles.container}>
        <PanGestureHandler {...gestureHandler}>
          <Animated.View style={[styles.searchBar, { height: searchBarHeight }]}>
            <TouchableOpacity onPress={toggleExpand}>
              <TextInput
                placeholder="Search..."
                style={styles.input}
                onFocus={toggleExpand}
                onBlur={toggleExpand}
              />
            </TouchableOpacity>
          </Animated.View>
        </PanGestureHandler>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchBar: {
      width: '80%',
      backgroundColor: '#e8e8e8',
      borderRadius: 8,
      overflow: 'hidden',
    },
    input: {
      height: 40,
      paddingHorizontal: 10,
    },
  });

  export default ExpandingSearchBar;