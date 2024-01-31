
function ProfileCard({titulo,tipo,img}){
    return(
        <div>
            <img src={img}/>
            <h3>{titulo}</h3>
            <p>{tipo}</p>
        </div>
    )

}

export default ProfileCard;