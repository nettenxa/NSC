import * as React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import AttractionCard from './AttractionCard';

const Attractions = (props) => {
  const [attractions, setAttractions] = React.useState([]);

  React.useEffect(() => {
    fetch("https://www.mecallapi.com/api/en/attractions")
      .then(res => res.json())
      .then(
        (result) => {
          setAttractions(result);
        },
      )
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
      {attractions.map(attraction => (
          <AttractionCard 
            key={attraction.id} 
            navigation={props.navigation}
            attraction={attraction}
          />    
      ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Attractions;