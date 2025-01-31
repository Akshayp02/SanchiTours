import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-24">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to Sanchi Car Rental
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Your Trusted Travel Partner Across Maharashtra
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center text-left">
            <p className="text-lg text-gray-700 mb-6">
              At Sanchi Car Rental, we are dedicated to making your journey
              through Maharashtra smooth, comfortable, and hassle-free. Whether
              you're embarking on a one-way trip or a scenic round-trip, we've
              got you covered with exceptional service and well-maintained
              vehicles.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Based in Pune, our mission is to offer top-notch car rental
              services throughout Maharashtra, ensuring every trip is a
              memorable experience. Our fleet ranges from compact cars to
              spacious SUVs, designed to meet your specific travel needs.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We offer customer-centric solutions, with professional drivers who
              know the ins and outs of Maharashtra's roads, ensuring a safe and
              pleasant ride every time.
            </p>
          </div>

          <div className="bg-[#FE9A03FC] text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Our Services
            </h3>
            <ul className="space-y-4 text-left">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-yellow-300 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 9l4 4m0 0l4-4m-4 4V3"
                  />
                </svg>
                <span className="text-lg">
                  One-Way Trips: Travel to your destination without the hassle
                  of returning.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-yellow-300 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 9l4 4m0 0l4-4m-4 4V3"
                  />
                </svg>
                <span className="text-lg">
                  Round-Up Trips: Explore multiple destinations with ease and
                  comfort.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-yellow-300 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 9l4 4m0 0l4-4m-4 4V3"
                  />
                </svg>
                <span className="text-lg">
                  Affordable & Transparent Pricing: No hidden charges, just
                  clear and competitive rates.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                className="w-16 h-16 rounded-full mx-auto mb-4"
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Customer"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Omkar patil
              </h4>
              <p className="text-gray-600 mb-4">
                "Sanchi Car Rental made our trip to Mahabaleshwar so much easier
                and fun! The car was clean, comfortable, and the driver was
                super helpful. Highly recommend!"
              </p>
              <div className="text-yellow-500">
                <svg
                  className="w-6 h-6 inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 17.25l4.095 2.406a1 1 0 0 0 1.493-.876l-.783-4.828a1 1 0 0 0 .294-.88l3.517-3.427a1 1 0 0 0-.552-1.706l-4.96-.427a1 1 0 0 0-.952-.684l-2.14-4.064a1 1 0 0 0-1.805 0L8.408 7.56a1 1 0 0 0-.952.684l-4.96.427a1 1 0 0 0-.552 1.706l3.517 3.427a1 1 0 0 0 .294.88l-.783 4.828a1 1 0 0 0 1.493.876L12 17.25z"
                  />
                </svg>
                <svg
                  className="w-6 h-6 inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 17.25l4.095 2.406a1 1 0 0 0 1.493-.876l-.783-4.828a1 1 0 0 0 .294-.88l3.517-3.427a1 1 0 0 0-.552-1.706l-4.96-.427a1 1 0 0 0-.952-.684l-2.14-4.064a1 1 0 0 0-1.805 0L8.408 7.56a1 1 0 0 0-.952.684l-4.96.427a1 1 0 0 0-.552 1.706l3.517 3.427a1 1 0 0 0 .294.88l-.783 4.828a1 1 0 0 0 1.493.876L12 17.25z"
                  />
                </svg>
                <svg
                  className="w-6 h-6 inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 17.25l4.095 2.406a1 1 0 0 0 1.493-.876l-.783-4.828a1 1 0 0 0 .294-.88l3.517-3.427a1 1 0 0 0-.552-1.706l-4.96-.427a1 1 0 0 0-.952-.684l-2.14-4.064a1 1 0 0 0-1.805 0L8.408 7.56a1 1 0 0 0-.952.684l-4.96.427a1 1 0 0 0-.552 1.706l3.517 3.427a1 1 0 0 0 .294.88l-.783 4.828a1 1 0 0 0 1.493.876L12 17.25z"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                className="w-16 h-16 rounded-full mx-auto mb-4"
                src="https://randomuser.me/api/portraits/women/53.jpg"
                alt="Customer"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Arpita
              </h4>
              <p className="text-gray-600 mb-4">
                "Amazing experience with Sanchi! The booking process was
                seamless, and the car was in perfect condition. Our driver was
                very professional, making the whole experience stress-free!"
              </p>
              <div className="text-yellow-500">
                <svg
                  className="w-6 h-6 inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 17.25l4.095 2.406a1 1 0 0 0 1.493-.876l-.783-4.828a1 1 0 0 0 .294-.88l3.517-3.427a1 1 0 0 0-.552-1.706l-4.96-.427a1 1 0 0 0-.952-.684l-2.14-4.064a1 1 0 0 0-1.805 0L8.408 7.56a1 1 0 0 0-.952.684l-4.96.427a1 1 0 0 0-.552 1.706l3.517 3.427a1 1 0 0 0 .294.88l-.783 4.828a1 1 0 0 0 1.493.876L12 17.25z"
                  />
                </svg>
                <svg
                  className="w-6 h-6 inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 17.25l4.095 2.406a1 1 0 0 0 1.493-.876l-.783-4.828a1 1 0 0 0 .294-.88l3.517-3.427a1 1 0 0 0-.552-1.706l-4.96-.427a1 1 0 0 0-.952-.684l-2.14-4.064a1 1 0 0 0-1.805 0L8.408 7.56a1 1 0 0 0-.952.684l-4.96.427a1 1 0 0 0-.552 1.706l3.517 3.427a1 1 0 0 0 .294.88l-.783 4.828a1 1 0 0 0 1.493.876L12 17.25z"
                  />
                </svg>
                <svg
                  className="w-6 h-6 inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 17.25l4.095 2.406a1 1 0 0 0 1.493-.876l-.783-4.828a1 1 0 0 0 .294-.88l3.517-3.427a1 1 0 0 0-.552-1.706l-4.96-.427a1 1 0 0 0-.952-.684l-2.14-4.064a1 1 0 0 0-1.805 0L8.408 7.56a1 1 0 0 0-.952.684l-4.96.427a1 1 0 0 0-.552 1.706l3.517 3.427a1 1 0 0 0 .294.88l-.783 4.828a1 1 0 0 0 1.493.876L12 17.25z"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                className="w-16 h-16 rounded-full mx-auto mb-4"
                src="https://randomuser.me/api/portraits/men/30.jpg"
                alt="Customer"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Ravi Kumar
              </h4>
              <p className="text-gray-600 mb-4">
                "I had an excellent ride experience with Sanchi! The driver, Mr.
                Prakash Domale, was very professional and ensured a smooth journey. The
                vehicle was well-maintained, and I felt comfortable throughout.
                Highly recommended for anyone looking for a reliable and safe
                ride in India!"
              </p>
              <div className="text-yellow-500">
                <svg
                  className="w-6 h-6 inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 17.25l4.095 2.406a1 1 0 0 0 1.493-.876l-.783-4.828a1 1 0 0 0 .294-.88l3.517-3.427a1 1 0 0 0-.552-1.706l-4.96-.427a1 1 0 0 0-.952-.684l-2.14-4.064a1 1 0 0 0-1.805 0L8.408 7.56a1 1 0 0 0-.952.684l-4.96.427a1 1 0 0 0-.552 1.706l3.517 3.427a1 1 0 0 0 .294.88l-.783 4.828a1 1 0 0 0 1.493.876L12 17.25z"
                  />
                </svg>
                <svg
                  className="w-6 h-6 inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 17.25l4.095 2.406a1 1 0 0 0 1.493-.876l-.783-4.828a1 1 0 0 0 .294-.88l3.517-3.427a1 1 0 0 0-.552-1.706l-4.96-.427a1 1 0 0 0-.952-.684l-2.14-4.064a1 1 0 0 0-1.805 0L8.408 7.56a1 1 0 0 0-.952.684l-4.96.427a1 1 0 0 0-.552 1.706l3.517 3.427a1 1 0 0 0 .294.88l-.783 4.828a1 1 0 0 0 1.493.876L12 17.25z"
                  />
                </svg>
                <svg
                  className="w-6 h-6 inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 17.25l4.095 2.406a1 1 0 0 0 1.493-.876l-.783-4.828a1 1 0 0 0 .294-.88l3.517-3.427a1 1 0 0 0-.552-1.706l-4.96-.427a1 1 0 0 0-.952-.684l-2.14-4.064a1 1 0 0 0-1.805 0L8.408 7.56a1 1 0 0 0-.952.684l-4.96.427a1 1 0 0 0-.552 1.706l3.517 3.427a1 1 0 0 0 .294.88l-.783 4.828a1 1 0 0 0 1.493.876L12 17.25z"
                  />
                </svg>
              </div>
            </div>

            {/* Add more review cards if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
