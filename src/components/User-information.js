import {useEffect} from 'react';
import '../Css/User-Information.css';
import image from '../Images/Screenshot 2023-08-31 144726.png'
function UserInformation(props)
{

    useEffect(()=> 
    {
        let navigation = document.getElementById("navigation");
        navigation.style.display = "none";

    }, []);
    return (
        <div className = "userInformation" id = "user-information">
            <span className = "close" id = "close" title = "Close Modal">&times;</span>
            <div className = "modal1">
                
                <figure className = "snip1376">
                    <img src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample17.jpg" alt = "sample17" />
                    <figcaption>
                        <h2>Linguina Nettlewater</h2>
                        <p>
                            I'm looking for something that can deliver a 50-pound payload of 
                            snow on a small feminine target. Can you suggest something? Hello? 
                        </p>
                        <div className = "icons"><a href = "#"><i className = "ion-social-reddit-outline"></i></a>
                        <a href = "#"> <i className = "ion-social-twitter-outline"></i></a>
                        <a href = "#"> <i className = "ion-social-vimeo-outline"></i></a>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
  
};
UserInformation.defaultProps = 
{
	Text1: "Add Text Here",
    Text2: "Add Text Here",
    Heading1: "Add Text Here",
    Heading2: "Add Text Here",
};    
export default UserInformation;