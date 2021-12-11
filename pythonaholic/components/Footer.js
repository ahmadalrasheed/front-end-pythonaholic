import React from "react";

export default function Footer() {
  return (
    <div className="relative mt-16 bg-purple-600">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 text-white sm:-mt-10 sm:h-16"
        preserveAspectRatio="none"
       
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-2 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Connect"
              className="inline-flex items-center"
            >
              <svg
                className="w-8 text-white"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >

              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Connect
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-purple-50">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-teal-500">
                Category
              </p>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-500">
                Cherry
              </p>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-500">
                Apples
              </p>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-500">
                Business
              </p>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
