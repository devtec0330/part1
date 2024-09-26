import PropTypes  from "prop-types"

function Item(props){
    return(
        <div>
            <li>
                {props.marca}-{props.ano_lancamento}
            </li>
        </div>
    )

    

}//aqui indicamos se vai haver limitacao

// Item.propTypes = {
//     ano_lancamento:PropTypes.number.isRequired
// }

export default Item