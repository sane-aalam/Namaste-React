// useEffect (Hooks)
// useEffect is called after the body rendered
// useEffect, you can think to apply, when you are gonna to apply appraoch-2
// App Loads > SimmirUI Display > Called API > Re-render the components

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);

  useEffect(() => {
    console.log("useEffect is called!");
  }, []);

  console.log("Body is called!");
};
