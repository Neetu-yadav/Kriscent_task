




const Contact = () => {
  return (
    <div className="flex justify-center items-center  bg-purple-50 py-12">
      <div className="max-w-6xl     w-full bg-white shadow-lg rounded-lg p-8 flex ">
        <div className="w-1/2 pr-8">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2 pl-8">
          <div className="mb-4">
            <h3 className="text-2xl font-bold">Get In Touch</h3>
            <p className="text-gray-700">+62 896 7311 2786</p>
            <p className="text-gray-700">plant@example.com</p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="mt-8 flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.6 8.1 8.21 8.84v-6.27h-2.48v-2.57h2.48v-1.96c0-2.45 1.49-3.8 3.67-3.8 1.06 0 1.97.08 2.23.11v2.57h-1.53c-1.2 0-1.44.57-1.44 1.41v1.85h2.88l-.38 2.57h-2.5v6.27c4.61-.74 8.21-4.42 8.21-8.84 0-5.52-4.48-10-10-10z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.25 3h-14.5c-.97 0-1.75.78-1.75 1.75v14.5c0 .97.78 1.75 1.75 1.75h14.5c.97 0 1.75-.78 1.75-1.75v-14.5c0-.97-.78-1.75-1.75-1.75zm-6.5 14.5h-1.5v-4.5h-1v-1.5h1v-1.25c0-.65.35-1.5 1.5-1.5h1v1.5h-1c-.16 0-.5.08-.5.5v1.25h1.5v1.5h-1.5v4.5zm3.75-9h-7.5v-1.5h7.5v1.5z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 0h-16c-2.209 0-4 1.791-4 4v16c0 2.209 1.791 4 4 4h16c2.209 0 4-1.791 4-4v-16c0-2.209-1.791-4-4-4zm-10 21h-5v-12h5v12zm-2.5-13.73c-1.563 0-2.83-1.267-2.83-2.83s1.267-2.83 2.83-2.83c1.563 0 2.83 1.267 2.83 2.83s-1.267 2.83-2.83 2.83zm14.5 13.73h-5v-5.5c0-1.375-.125-2.75-2-2.75-1.75 0-2 1.375-2 2.75v5.5h-5v-12h5v1.5h.125c.625-1 2.375-2.125 4.375-2.125 3.25 0 3.5 2.125 3.5 4.875v7.75z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
