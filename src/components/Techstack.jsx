const Techstack = () => {
  return (
    <section className="py-16 bg-orange-50/40 rounded-3xl px-6">
      
      <h2 className="text-3xl font-bold text-orange-500 text-center mb-4">
        Technologies We Use
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        FeastHub is built using modern web technologies that help us create a
        fast, responsive, and user-friendly experience for food lovers.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Frontend */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-orange-500 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4">
            Frontend Technologies
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              ⚛️ <span>React.js</span>
            </li>

            <li className="flex items-center gap-2">
              📜 <span>JavaScript</span>
            </li>

            <li className="flex items-center gap-2">
              🌐 <span>HTML5</span>
            </li>
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-orange-500 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4">
            Backend Technologies
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              🐍 <span>Django</span>
            </li>

            <li className="flex items-center gap-2">
              🔗 <span>Django REST Framework</span>
            </li>
          </ul>
        </div>

        {/* Styling */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-orange-500 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4">
            UI & Styling
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              🎨 <span>Tailwind CSS</span>
            </li>

            <li className="flex items-center gap-2">
              📱 <span>Responsive Design</span>
            </li>
          </ul>
        </div>

        {/* Version Control */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-orange-500 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4">
            Version Control
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              🔀 <span>Git</span>
            </li>

            <li className="flex items-center gap-2">
              🐙 <span>GitHub</span>
            </li>
          </ul>
        </div>

        {/* Development Tools */}
        <div className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-orange-500 hover:shadow-lg transition md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">
            Development Environment
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-600">
            <div>💻 VS Code</div>
            <div>🧩 ES7 React Snippets</div>
            <div>🎯 Tailwind IntelliSense</div>
            <div>📂 Path Intellisense</div>
            <div>⚡ Error Lens</div>
          </div>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-10">
        Combining modern technologies to deliver a seamless food ordering experience.
      </p>

    </section>
  );
};

export default Techstack;