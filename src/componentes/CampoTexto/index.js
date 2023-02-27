import './CampoTexto.css'

const CampoTexto = (props) => {
    
    const aoDigitado = (evento)=>{
        props.aoAlterado(evento.target.value)
         
    }
    return (
        <div className='campo'>
            <label>{props.label}</label>
            <input 
            placeholder={props.placeholder}
            required={props.obrigatorio}
            value={props.valor} 
            onChange={aoDigitado}
            />
        </div>
    );
}
export default CampoTexto;
