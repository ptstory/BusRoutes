import React from 'react';
import { Button } from 'react-native';

class MapScreen extends React.Component {
    static navigationOptions = {
      title: 'Map',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button
          title="Go HOME"
          onPress={() =>
            navigate('Home')
          }
        />
    
      );
    }
  }

  export default MapScreen;