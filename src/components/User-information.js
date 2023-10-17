import {useEffect} from 'react';
import '../Css/User-Information.css';
import image from '../Images/Screenshot 2023-08-31 144726.png'
function UserInformation(props)
{

    useEffect(()=> 
    {


    }, []);
    return (
        <div className = "userInformation" id = "user-information">
            <span className = "close" id = "close" title = "Close Modal">&times;</span>
            <div className = "modal1">
                
                <figure className = "snip1376">
                    <img src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample17.jpg" />
                    <figcaption>
                        <h2>{props.Heading1}</h2>
                        <p id = "_username">
                            {props.Text1}
                        </p>

                        <h2>{props.Heading2}</h2>
                        <p id = "_password">
                            {props.Text2}
                        </p>
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