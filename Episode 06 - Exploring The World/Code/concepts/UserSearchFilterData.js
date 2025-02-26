
// Filter Restaurant Data based on User Input
// User can search for a restaurant by name
// User can filter restaurants based on rating
// User can filter restaurants based on cost for two
// You have to maintain the state of the filtered data, so that the data is not lost when the user searches for a restaurant or filters the data

const restaurantList = [
  {
    info: {
      id: "10894",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      deliveryTime: 31,
    },
  },
  {
    info: {
      id: "211192",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "lczhp9lptdzbqn09nfns",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4,
      parentId: "4961",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      deliveryTime: 28,
    },
  },
  {
    info: {
      id: "477963",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
      locality: "2nd Stage",
      areaName: "BTM 2nd Stage",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream"],
      avgRating: 4.3,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      deliveryTime: 32,
    },
  },
];

// filter data according to user input
var searchText = "pizza Hut";
const filterData = restaurantList.filter((res) => {
    // convert into lowercase - case insensitive search
  return res.info.name.toLowerCase().includes(searchText.toLowerCase());
});
console.log(filterData);
