import Auto_Slideshow from '../components/Auto-slideshow';
import NavigationBar2 from '../components/Navigation-bar2';
import image1 from '../Images/ToF_Wallpaper2022_01.png';
import image2 from '../Images/1.jpg';
import image3 from '../Images/ToF_Wallpaper2022_09.png';
import image4 from '../Images/ToF_Wallpaper2022_07.png';
import image5 from '../Images/ToF_Wallpaper2022_10.png';
import Discord from '../Images/Socials/discord.png';
import Facebook from '../Images/Socials/facebook.png';
import Twitter from '../Images/Socials/twitter.png';
import Website from '../Images/Socials/web.png';


function Home()
{
    return (
    <>
      <Auto_Slideshow Image1 = {image1} Image2 = {image2} Image3 = {image3} Image4 = {image4} Image5 = {image5}
      Text1 = "" Text2 = "" Text3 = "" Text4 = "" Text5 = ""/>
      <NavigationBar2 
        text1 = "Discord" onclick1 = {'https://www.toweroffantasy-global.com/collaboration/nitro/'} Social1 = {Discord}
        text2 = "Facebook" onclick2 = {'https://www.facebook.com/TowerofFantasy.Official'} Social2 = {Facebook}
        text3 = "Twitter " onclick3 = {'https://twitter.com/ToF_EN_Official'} Social3 = {Twitter}
        text4 = "Website " onclick4 = {'https://www.toweroffantasy-global.com'} Social4 = {Website}
      />
    </>
    );
};
  
export default Home;