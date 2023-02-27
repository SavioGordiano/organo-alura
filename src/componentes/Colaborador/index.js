import './Colaborador.css'

const Colaborador = ({ nome,imagem,cargo,corPrimaria }) => {
    return (
        <section className='colaborador'>
            <div className='cabecalho' style={ { backgroundColor: corPrimaria } }>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </section>
    )

}

export default Colaborador;