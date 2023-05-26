//Imports below(should always be first) 
import '../Css/splashScreen.css';
import {useRef, useEffect} from 'react';

/* Splash Screen */
//Add any containers that you would like to remove 
//let container = document.getElementById("cm0");



function SplashScreen() 
{
	//initiliazed to null
	let refSplash = useRef(null);
	//let refRoot = useRef(null);

	useEffect(()=> 
	{
		// the .current of the div is equated to the element
		let splash = refSplash.current;
		//get other elements that should be 
		let navigation = document.getElementById("navigation");

		navigation.style.display = "none";
		//perform the js for the splash
		window.addEventListener("load", event =>
		{
			setTimeout(() =>
			{
				splash.classList.add("display-none");
				navigation.style.display = "block";
			}, 2000);
		})
	}, []);

	

    return ( 
		//set the ref to the class that we would like to access
        <div className = "splash" id = "splash" ref = {refSplash}>
            <div className = "splash-text">
                Add Text here
            </div>
        </div>
    );
}


export default SplashScreen;





















