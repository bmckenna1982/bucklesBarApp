import { Text } from 'react-native'
import React from 'react'

const Title = ({children, numberOfLines = 2, size = 18, paddingVertical = 5}) => {
  return (
    <Text numberOfLines={numberOfLines} style={{ fontWeight: 'bold', fontSize: size, paddingVertical: paddingVertical}}>{children}</Text>
  );
};

export default Title;
