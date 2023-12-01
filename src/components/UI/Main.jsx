import Button from './Button/Button';
import InputWordForm from './Input/InputWordForm';

const Main = props => {
    
    return (
        <>
        <InputWordForm
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}/>
        <Button 
        style={props.style}
        onClick={props.onClick}
        buttonText={props.buttonText}
        />
        
        </>
    )
}

export default Main;