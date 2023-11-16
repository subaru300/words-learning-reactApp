import React, {useState, useEffect} from 'react';
import TopMenu from './components/TopMenu/TopMenu';
import Main from './components/UI/Main';
import Card from './components/Cards/Card';


function App() {
 
const [inputData, setInputData] = useState('');
const [totalWords, setTotalWords] = useState([]);
const [selectedMenu, setSelectedMenu] = useState('Main');

// form validation color control
const [isFormValid, setIsFormValid] = useState(true);
const buttonBackgroundColor = isFormValid ? '#4255FF' : '#ff3f3f';
const buttonText = isFormValid ? 'Add word' : 'Enter word';
const maxLengthInput = 20;

  const onClickHandler = (e) => {
    e.preventDefault();
    if(!inputData) {
    setIsFormValid(false);
    setTimeout(() => {
      setIsFormValid(true);
    }, 3000);
      return;
    }
    setTotalWords(prevData => [...prevData, inputData]);
    setInputData('');
  };

  const onChangeHandler = e => {
    if (e.target.value.length <= maxLengthInput) {setInputData(e.target.value);}
    
  };

  const onMenuSelectHandler = e => {
if(e.target.innerText === 'Main') {
  setSelectedMenu('Main');
} else {
  setSelectedMenu('Cards');
}
  };

  return (
    <React.Fragment>
    <TopMenu onMenuSelect={onMenuSelectHandler}/>
    <div className={'app'}>
{selectedMenu === 'Main' ? 
  <Main 
  style={{ backgroundColor: buttonBackgroundColor }}
        onClick={onClickHandler} 
        buttonText={buttonText}
        type='text' 
        placeholder='Enter a word (Max: 20 sym.)'
        value={inputData}
        onChange={onChangeHandler}/>
 : <Card words={totalWords} selectedMenu={selectedMenu}/>
}
</div>
    </React.Fragment>
  
  );
}

export default App;
