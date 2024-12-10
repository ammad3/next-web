export default function projectsPage() {
  return (
    <div className="bg-blue-500 text-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="flex justify-center flex-wrap items-center">
        <div className="bg-gray-900 text-white text-center py-20 w-[200px] mx-4 border-4 border-red-500 rounded-[5px]">
          <h2 className="text-xl font-bold mb-4">GitHub Links</h2>

          <a
            href="https://github.com/ammad3"
            className="text-purple-700 hover:text-gray-300 mx-2 block"
          >
            ATM-CLI
          </a>
          <a
            href="https://github.com/ammad3"
            className="text-purple-700 hover:text-gray-300 mx-2 block"
          >
            Calculator-CLI
          </a>
          <a
            href="https://github.com/ammad3"
            className="text-purple-700 hover:text-gray-300 mx-2 block"
          >
            To Do List-CLI
          </a>
        </div>
      </div>
    </div>
  );
}
