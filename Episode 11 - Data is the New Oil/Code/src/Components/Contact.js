const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>

        <form className="space-y-5">
          {/* First Name */}
          <div>
            <label
              htmlFor="fname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your first name..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600 "
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600 "
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="subject"
              name="subject"
              rows="4"
              placeholder="Write something..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600 "
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <input
              type="submit"
              value="Submit"
              className="bg-zinc-800 text-white font-medium px-6 py-2 rounded-md hover:bg-zinc-700 transition duration-200 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
