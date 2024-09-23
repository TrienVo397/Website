import propTypes from 'prop-types';

function List(props){
    const itemList =  props.items;
    const category = props.category;
    

    const listItems = itemList.map(fruit => <li key={fruit.id}> {fruit.name}: &nbsp;
    <b>{fruit.calories}</b></li>)
    return (<div>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </div>)



}

List.propTypes={
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({id:propTypes.number, 
                                              name: propTypes.string,
                                              calories: propTypes.number}))}

List.defaultProps ={
    category: "Category",
    items:[]
}
export default List