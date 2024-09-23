import profilePic from './assets/profile.jpg';

function Card(){
    return(
        <div className="card">
            <img className='card-img' src={profilePic} alt="profile picture" />
        <h2 className='card-title'>Trien Code</h2>
            <p className='card-text'>Fake it till I make it</p>
        </div>
    )
}

export default Card;