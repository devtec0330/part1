// function Evento({numero}){

//     function meuEvento(){
//         console.log(`opa,fu ativado  ${numero}`)
//     }

//     return(
//         <div>
//             <p>Clique para disparar um evento</p>
//             <button onClick={meuEvento}>Ativar</button>
//         </div>
//     )
// }

// export default Evento

function Evento(props){

    function meuEvento(){
        console.log(`opa,fu ativado  ${props.numero}`)
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento