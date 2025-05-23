import React from "react";
import Section from "./../layouts/Section";
import NeonTitle from "./../components/NeonTitle";

const ContactPage = () => {
  return (
    <main id="contact" className="relative w-screen max-w-1920">
      <NeonTitle title="CONTACT US" color="blue" />

      <Section id="contact-info">
        <div className="justify-left w-fit rounded-3xl border-2 border-solid border-zinc-500 border-opacity-5 bg-dark-fill px-8 py-6 shadow-2xl sm:px-10 lg:px-24 lg:pb-12 lg:pt-10">
          <div className="flex items-center pb-6">
            <svg
              xmlns="https://www.w3.org/2000/svg"
              fill="grey"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="white"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <p className="pl-4 text-sm text-white lg:text-base">
              Customer Support Line: (888) 888-8888
            </p>
          </div>
          <div className="z-20">
            <div className="flex items-center pb-6">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                fill="grey"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="white"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <p className="pl-4 text-sm text-white lg:text-base">
                E-mail Customer Support: <br />
                CustomerService@ArtemisSpire.com
              </p>
            </div>
            <div className="flex items-center pb-6">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                fill="grey"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="white"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <p className="pl-4 text-sm text-white lg:text-base">
                E-mail Sales: Sales@ArtemisSpire.com
              </p>
            </div>
            <div className="flex items-center pb-6">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                fill="grey"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="white"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <p className="pl-4 text-sm text-white lg:text-base">
                General Information: info@ArtemisSpire.com
              </p>
            </div>
            <div className="flex items-center pb-6">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                fill="grey"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="white"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p className="pl-4 text-sm text-white lg:text-base">
                Sunnyvale, California
              </p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                fill="grey"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="white"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p className="pl-4 text-sm text-white lg:text-base">
                San Francisco, California
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ContactPage;
