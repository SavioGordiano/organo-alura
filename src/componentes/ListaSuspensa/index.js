import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    const aoDigitado = (event)=>{
        if(event.target.value === 'Escolha um time'){
            console.log('errooo')
        }else {
            console.log('oiiii')
            props.aoAlterado(event.target.value);
        }
    };
    return (
        <div className='listaSuspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio} onChange={aoDigitado} >
                <option value=''></option>
                {props.itens.map((item)=>{
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}
export default ListaSuspensa;