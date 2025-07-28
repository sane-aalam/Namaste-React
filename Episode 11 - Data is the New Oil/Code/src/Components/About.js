import UserFunction from "./UserFunction";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          About Us
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-2">
          We are passionate food lovers and technology enthusiasts on a mission
          to redefine the way India eats. At <strong>SwiftyEats</strong> (a
          Swiggy-inspired platform), we connect millions of users with their
          favorite restaurants, street vendors, and cloud kitchens — delivering
          food fast, fresh, and reliably.
        </p>

        <p className="text-gray-600 text-base sm:text-lg mb-2">
          From breakfast cravings to midnight snacks, we ensure that your food
          journey is smooth and satisfying. Our platform is built with
          cutting-edge technology, real-time tracking, and user-first design —
          all to bring the best flavors of your city right to your doorstep.
        </p>

        <p className="text-gray-500 text-sm">
          Whether you're a foodie or a chef, we’re here to empower your hunger
          and help businesses grow in the digital dining age.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-10"></div>

      {/* User Components Section */}
      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Functional-based Component
          </h2>
          <UserFunction />
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Class-Based Component
          </h2>
          <UserClass />
        </div>
      </div>
    </div>
  );
};

export default About;
