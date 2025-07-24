import { CDN_URL } from "../Utils/CommonFile";

const RestaurantCategoryHeader = ({ data }) => {
  const {
    name,
    city,
    costForTwo,
    cuisines,
    cloudinaryImageId,
    locality,
    isOpen,
  } = data;

  return (
    <div className="md:w-6/12 md:mx-auto md:my-4 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between">
         <span className="text-3xl font-bold text-gray-800 mb-2 mr-2">{name} </span>
         <span className="text-1xl font-bold text-gray-800 mt-3 mb-2 mr-2">₹ {costForTwo/100}, {city}, {cuisines}, {locality}</span>
         <span className="text-lg font-bold text-gray-800 mt-5 mb-2 mr-2">
           {isOpen ? " Open Now" : " Currently Closed"}
         </span>
      </div>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-200 h-40  object-cover rounded-md"
      />
    </div>
  );
};

export default RestaurantCategoryHeader;
