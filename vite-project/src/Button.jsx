

function Button(){
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)", // Corrected from backgroundcolor
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px", // Corrected from borderradius
        cursor: "pointer"
    };
    return(
        <button style={styles}>Click me</button>
    )
}

export default Button;