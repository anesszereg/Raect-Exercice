import React from 'react'
import './Profile.css'
import '../../image2.jpg'
// import logo from '../../logo.svg'

const Profile = ({Bio,Info,Name,Image}) => {
    const ShowAlert = () => {
        alert(Info)

    } 
    return (
        
        
        
        <div>
            <div className="form">
                <img src={Image} alt="" class="profile-img" />
                {/* <h2>{Name}</h2> */}
                <p className='Info' >{Info}</p>
                <p className='bio' >{Bio}</p>
                <button onClick={ShowAlert}> Click Me</button>
            </div>
            
        </div>



    )
}

Profile.defaultProps={
    // img:image2,
    Info:"ilyas",
    Bio:"student in USTHB"

}

// Profile.propType ()

export default Profile
