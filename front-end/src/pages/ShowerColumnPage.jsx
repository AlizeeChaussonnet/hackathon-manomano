import showercolumnpage from "../assets/image/showercolumnpage.png";
import ButtonBuyNow from "../Components/ButtonBuyNow";

const ShowerColumnPage = () => {
  return (
    <div className="h-full">
      <img src={showercolumnpage} alt="background-image" />
      <div className="absolute bottom-16 right-48 flex flex-row font-semibold">
        <ButtonBuyNow />
      </div>
    </div>
  );
};

export default ShowerColumnPage;
