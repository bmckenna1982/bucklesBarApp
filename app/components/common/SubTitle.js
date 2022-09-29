import { Text } from 'react-native'
import React from 'react'

 const SubTitle = ({children, numberOfLines = 2, size = 15}) => {
  return (
    <Text numberOfLines={numberOfLines} style={{ fontSize: size}}>{children}</Text>
  );
};

export default SubTitle;