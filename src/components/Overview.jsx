import heroFood from "../assets/Mission.png";

const Overview = () => {
  return (
    <section className="py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            About FeastHub
          </h2>

          <p className="text-gray-600 text-lg leading-8 mb-6">
            FeastHub is a modern restaurant ordering platform designed to
            provide customers with a smooth and convenient food ordering
            experience. Users can explore our menu, select their favorite
            dishes, place orders, and enjoy delicious meals with ease.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>

          <p className="text-gray-600 leading-8 mb-6">
            Our mission is to simplify food ordering by providing a fast,
            user-friendly, and reliable digital platform that connects
            customers directly with our restaurant.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Use FeastHub?
          </h3>

          <p className="text-gray-600 leading-8 mb-6">
            FeastHub focuses on delivering a seamless customer experience
            through a clean interface, easy navigation, and efficient
            ordering process.
          </p>

          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            What You'll Find Here
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li>🍔 Complete Restaurant Menu</li>
            <li>🛒 Easy Food Ordering</li>
            <li>⭐ Featured & Popular Dishes</li>
            <li>👤 Secure User Authentication</li>
            <li>📱 Fully Responsive Design</li>
            <li>⚡ Fast and Smooth User Experience</li>
          </ul>
        </div>

        {/* Image */}
        <div>
          <img
            src={heroFood}
            alt="Food"
            className="w-full h-112.5 object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Overview;