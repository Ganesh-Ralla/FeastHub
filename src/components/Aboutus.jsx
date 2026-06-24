
const Aboutus = () => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-orange-500 mb-6">
          About the Developers
        </h2>
        <p className="text-gray-600 text-lg leading-8 mb-10">
          Throughout this project, our team worked together on frontend
          development, backend integration, responsive design, API development,
          and version control using Git and GitHub.
        </p>

        <div className="border-l-4 border-orange-500 pl-6">
          <h3 className="text-2xl font-semibold mb-4">
            Development Team
          </h3>

          <ul className="space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-semibold">Ganesh Ralla</span> — Full Stack Developer
            </li>

            <li>
              <span className="font-semibold">Aarthi Mynampati</span> — Full Stack Developer
            </li>
          </ul>
        </div>

      </div>
      <div className="mt-12 bg-orange-50 p-6 rounded-2xl">
  <h3 className="text-2xl font-semibold mb-4 text-orange-500">
    Contact Us
  </h3>

  <div className="space-y-3 text-gray-700">
    <p>
      📧 Email: feasthub.team@gmail.com
    </p>

    <p>
      📞 Phone: +91 1234567890
    </p>

    <p>
      📍 Location: India
    </p>

  </div>
</div>
    </section>
    
  );
};

export default Aboutus;