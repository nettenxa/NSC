import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const AttractionCard = (props) => (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>{props.attraction.name}</Title>
    </Card.Content>
    <Card.Cover source={{ uri: props.attraction.coverimage }} />
    <Card.Content>
      <Paragraph numberOfLines={2}>{props.attraction.detail}</Paragraph>
    </Card.Content>
    
    <Card.Actions>
      <Button 
        onPress={() => props.navigation.navigate('Attraction Detail', {
          id: props.attraction.id
        })}
      >
        See more
      </Button>
      {/* <Button onPress={() => navigation.navigate('Home')}>Home</Button>
      <Button onPress={() => navigation.goBack()}>Back</Button> */}
    </Card.Actions>
  </Card>
);

export default AttractionCard;