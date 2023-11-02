function Titulo ( {TituloApp, subTituloApp} ) {
    return (
        <div>
            <h1>{TituloApp}</h1>
            <h2 className="titulo__app">{subTituloApp}</h2>
        </div>
    )
}

export default Titulo