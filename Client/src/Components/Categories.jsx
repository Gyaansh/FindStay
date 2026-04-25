import { useNavigate, useSearchParams } from "react-router-dom";
import { FaFire, FaUmbrellaBeach, FaMountain, FaCity, FaTree, FaSnowflake } from "react-icons/fa";
import { GiCastle, GiForestCamp, GiBoatFishing, GiCaveEntrance } from "react-icons/gi";
import { MdOutlinePool, MdOutlineVilla } from "react-icons/md";

const categories = [
  { label: "Trending", icon: <FaFire size={24} />, query: "trending" },
  { label: "Beach", icon: <FaUmbrellaBeach size={24} />, query: "beach" },
  { label: "Mountain", icon: <FaMountain size={24} />, query: "mountain" },
  { label: "City", icon: <FaCity size={24} />, query: "city" },
  { label: "Countryside", icon: <FaTree size={24} />, query: "countryside" },
  { label: "Castles", icon: <GiCastle size={24} />, query: "castle" },
  { label: "Camping", icon: <GiForestCamp size={24} />, query: "camping" },
  { label: "Pools", icon: <MdOutlinePool size={24} />, query: "pool" },
  { label: "Villas", icon: <MdOutlineVilla size={24} />, query: "villa" },
  { label: "Snow", icon: <FaSnowflake size={24} />, query: "snow" },
  { label: "Lake", icon: <GiBoatFishing size={24} />, query: "lake" },
  { label: "Caves", icon: <GiCaveEntrance size={24} />, query: "cave" },
];

export default function Categories() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentSearch = searchParams.get("search");

  const handleCategoryClick = (query) => {
    if (currentSearch === query) {
      navigate("/");
    } else {
      navigate(`/?search=${query}&type=place`);
    }
  };

  return (
    <div className="bg-white border-b shadow-sm md:flex pt-4 pb-2 px-4 sm:px-10 overflow-x-auto">
      <div className="flex items-center justify-start sm:justify-center w-full gap-8 min-w-max">
        {categories.map((item) => (
          <div
            key={item.label}
            onClick={() => handleCategoryClick(item.query)}
            className={`flex flex-col items-center justify-center gap-2 p-2 border-b-2 hover:text-black cursor-pointer transition-all duration-300 ${
              currentSearch === item.query ? "border-black text-black" : "border-transparent text-gray-500 hover:border-gray-300"
            }`}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
