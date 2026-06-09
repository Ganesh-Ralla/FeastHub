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
            FeastHub is a modern food ordering and restaurant discovery
            platform designed to help users explore restaurants, discover
            cuisines, and find their favorite meals with ease.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>

          <p className="text-gray-600 leading-8 mb-6">
            Our mission is to make food discovery and ordering simple,
            convenient, and enjoyable by providing a seamless digital
            experience for food lovers.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Use FeastHub?
          </h3>

          <p className="text-gray-600 leading-8 mb-6">
            FeastHub brings restaurants, menus, and food choices together
            in one place, helping users quickly find what they are looking
            for through a clean and user-friendly interface.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            What You'll Find Here
          </h3>

          <ul className="list-disc pl-6 text-gray-600 leading-8">
            <li>Restaurant Discovery</li>
            <li>Menu Browsing</li>
            <li>Food Categories</li>
            <li>User Authentication</li>
            <li>Responsive Design</li>
            <li>Modern User Experience</li>
          </ul>
        </div>

        {/* Image */}
        <div>
          <img
            src={heroFood}
            alt="Food"
            className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Overview;