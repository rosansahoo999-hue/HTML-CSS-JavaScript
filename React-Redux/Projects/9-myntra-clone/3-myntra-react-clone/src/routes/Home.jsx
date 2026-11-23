import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);
  const itemsArray = Array.isArray(items) ? items : [];

  return (
    <main>
      <div className="items-container">
        {itemsArray.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;