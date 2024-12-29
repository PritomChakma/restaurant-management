import Cover from "../Shared/Cover/Cover";
import banner from "../../assets/menu/banner3.jpg"

const MenuBanner = () => {
    return (
        <div>
            <Cover img={banner} title="OUR MENU" deacription="Would you like to try a dish?"></Cover>
        </div>
    );
};

export default MenuBanner;