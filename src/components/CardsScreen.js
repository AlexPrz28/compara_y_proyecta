
import { db } from '../utilities/Firebase'
import { useEffect, useState } from 'react';
import { collection, getDocs, query} from "firebase/firestore";


const CardsScreen = () => {

  /* const docRef = collection(db, "cards");
  const getCards = await getDocs(docRef) */

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      console.log('prueba')
      const q = query(collection(db, "cards"))
      console.log(q)
      const cardData = await getDocs(q);
      cardData.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
      console.log('llegamos?')
      setCards(cardData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log('si llegamos?')
      console.log(cardData);
    };

    getData();
    
    console.log(cards)
  }, []);

  return (
    <div className="coin-app" style = {{backgroundColor: '#1a1a1c'}}>
      <div className="coin-search">
        <h1 className="coin-text"> CARDS SCREEN</h1>
      </div>
      <div>
        {cards.map((data) => (
          <div className="car-content" key={data.id}>
            <p>{data.beneficios}</p>
            <p>{data.cat}</p>
            <p>{data.enlace}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsScreen;
