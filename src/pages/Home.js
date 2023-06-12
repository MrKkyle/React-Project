import Background from '../components/Background';
import NavigationBar2 from '../components/Navigation-bar2';
import image from '../Images/ToF_Wallpaper2022_01.png';
import Discord from '../Images/Socials/discord.png';
import Facebook from '../Images/Socials/facebook.png';
import Twitter from '../Images/Socials/twitter.png';
import Website from '../Images/Socials/web.png';


function Home()
{
    return (
    <>
      <Background image = {image}/>
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