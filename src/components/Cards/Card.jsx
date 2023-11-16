import React, {useState, useEffect} from 'react';
import { createClient } from 'pexels';
import styles from './Card.module.css';
import Button from '../UI/Button/Button';
import LiteButton from '../UI/Button/LiteButton';


const Card = props => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [backSideWord, setBackSideWord] = useState('');
    const [currentImage, setCurrentImage] = useState('');

    const getRandomWord = (words) => {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
      };
    const randomWord = getRandomWord(props.words);

    const onPrevWordHandler = e => {
        const prevIndex = (currentIndex - 1 + props.words.length) % props.words.length;
        searchWord(props.words[prevIndex]);
        setCurrentIndex(prevIndex)
    };

    const onNextWordHandler = e => {
        const nextIndex = (currentIndex + 1) % props.words.length;
        searchWord(props.words[nextIndex]);
        setCurrentIndex(nextIndex)
        
    };

    const currentWord = props.words[currentIndex];


//// Запит до API для пошуку опису слова
async function searchWord(word) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        if (response.status === 404) {
        setBackSideWord('Word not found. Error 404 (Please delete the word and try again)');
        return;
        }

    const searchResult = await response.json();
    const descriptionWord = searchResult[0].meanings[0].definitions[0].definition;

    setBackSideWord(descriptionWord);
        
    } catch (error) {
        console.error(error);
    }
}

// Подати запит до API pexels для отримання зображення по слову

const client = createClient('myYRW9nFGGi9gZaYbrBD0ztWCSLcs2Yj42sdVkAAPsCjrwjkIxpj6bEz');
const query = currentWord;
client.photos.search({ query, per_page: 1 }).then(photos => {
    
    if (photos.photos && photos.photos.length > 0 && photos.photos[0].src && photos.photos[0].src.original) {
        setCurrentImage(photos.photos[0].src.original)
    }
     else {
        const defaultImage = 'https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg';
        setCurrentImage(defaultImage);
     }
   
   
});

// Подати запит до API при переході до Cards
useEffect(()=>{if(props.words.length > 0 && props.selectedMenu === 'Cards'){
    searchWord(currentWord);
    // searchImg(currentWord);
}
}, [props.selectedMenu]);

return (
    <React.Fragment>
    <div className={styles.cardsBlock}>
        <div className={styles.cardContainer}>
            <Button buttonText={'Previous'} onClick={onPrevWordHandler}/>
            <div className={styles.cardBox}>
                <div className={styles.card}>
                <div className={styles.front}>{currentWord}</div>
                    <div  className={styles.back}>{backSideWord}
                        <div>
                            <img className={styles.currentImage} src={currentImage} alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
            <Button buttonText={'Next'} onClick={onNextWordHandler}/>
        </div>
    <div className={styles.bottomButtonsContainer}>
    <LiteButton buttonText={'Delete word'}/>
    <LiteButton buttonText={'Add to learned'}/>
    <LiteButton buttonText={'Add to repeat'}/>
    </div>
    </div>
    </React.Fragment>
)
}

export default Card;