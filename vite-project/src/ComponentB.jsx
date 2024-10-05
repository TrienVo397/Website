import ComponentC from './ComponentC.jsx'

function ComponentB(props){
    return(
        <div className="box">
            <h1>ComponentB</h1>
            <h2>Bye {`${props.user}`}</h2>
            <ComponentC/>
        </div>
    )
}
export default ComponentB