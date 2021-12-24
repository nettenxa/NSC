import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Linking } from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const AttractionDetails = ({route}) => {
  const { id } = route.params;

  const [attraction, setAttraction] = React.useState([]);

  React.useEffect(() => {
    fetch("https://www.mecallapi.com/api/en/attractions/"+id)
      .then(res => res.json())
      .then(
        (result) => {
          setAttraction(result.attraction);
        },
      )
  }, [])

  if(attraction != null) { 
    return (
      <Card>
        <Card.Content>
          <Title>{attraction.name}</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: attraction.coverimage }} />
        <Card.Content>
          <Paragraph>{attraction.detail}</Paragraph>
          <Paragraph>latitude: {attraction.latitude}</Paragraph>
          <Paragraph>longitude: {attraction.longitude}</Paragraph>
        </Card.Content>
        <Card.Content>
          <Button
              onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query='+attraction.latitude+'%2C'+attraction.longitude)}
          >
            View on Map
          </Button>
        </Card.Content>
      </Card>
    );
  }
  else {
    return(
      <Text>Loading</Text>
    )
  }
}

export default AttractionDetails;