import React, { useEffect, useState } from "react";
import { MENU_URL } from "./CommonFile";

// Any unrelated tasks, such as data fetching or state management
// should be handled by separate components or modules.

const useRestaurantMenu = (resId) => {
  // state changable
  const [RestaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);

  // Call API DATA
  const fetchMenuData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setRestaurantInfo(json?.data);
  };

  return RestaurantInfo;
};

export default useRestaurantMenu;
