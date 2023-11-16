import Button from './Button/Button';
import InputWordForm from './Input/InputWordForm';

const Main = props => {
    
    return (
        <>
        <Button 
        style={props.style}
        onClick={props.onClick}
        buttonText={props.buttonText}
        />
        <InputWordForm
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}/>
        </>
    )
}

export default Main;