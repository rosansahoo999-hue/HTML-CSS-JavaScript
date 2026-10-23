
const Item = (props) => {

    let {foodItems} = props;
    return ( 
    <li className="list-group-item">{foodItems}</li>
    )
}

export default Item;