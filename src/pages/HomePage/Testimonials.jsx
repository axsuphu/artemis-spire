import React from "react";
import Section from "../../layouts/Section";

const Testimonials = ({ getImagePath }) => {
  const testimonialData = [
    {
      id: 1,
      author: {
        name: "Jane Doe",
        position: "Product Manager",
        company: "Little Hills Casino",
      },
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      date: "2024-08-15",
      image: "card-1.svg",
    },
    {
      id: 2,
      author: {
        name: "John Doe",
        position: "Field Tech",
        company: "Computers Ltd.",
      },
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      date: "2024-02-10",
      image: "card-2.svg",
    },
    {
      id: 3,
      author: {
        name: "John Smith",
        position: "Chief Technology Officer",
        company: "Innovate Solutions Inc.",
      },
      text: "The integration process was seamless and the results have been outstanding. This tool is a game-changer for our tech stack.",
      date: "2024-04-06",
      image: "card-3.svg",
    },
    {
      id: 4,
      author: {
        name: "Emily Johnson",
        position: "Marketing Director",
        company: "Bright Future Agency",
      },
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      date: "2024-09-01",
      image: "card-4.svg",
    },
    {
      id: 5,
      author: {
        name: "Michael Brown",
        position: "Operations Manager",
        company: "Green Tech Enterprises",
      },
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      date: "2024-08-10",
      image: "card-5.svg",
    },
    {
      id: 6,
      author: {
        name: "Lisa Taylor",
        position: "Customer Success Lead",
        company: "NextGen Solutions",
      },
      text: "The platform has been incredibly intuitive and user-friendly. Our clients are thrilled with the new features and improved performance.",
      date: "2024-07-18",
      image: "card-6.svg",
    },
  ];

  return (
    <>
      <Section id="testimonials">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
          <h2 className="relative mb-4 text-center font-bakbak text-3xl tracking-wide text-white md:text-4xl lg:mb-10 lg:max-w-lg lg:text-5xl xl:max-w-2xl xl:text-6xl 2xl:mb-16">
            Testimonials
          </h2>
          <div className="mb-10 flex flex-wrap justify-center gap-10 text-white">
            {testimonialData.map((entry) => (
              <div
                key={entry.id}
                className="flex h-64 w-64 items-center justify-center rounded-3xl bg-gradient-to-b from-green-500 to-pink-500 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] sm:w-56 md:h-72 md:w-64 2xl:w-1/3"
              >
                <div className="h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[calc(1.5rem-1px)] bg-space-black p-7">
                  <div className="mb-2">
                    <h5 className="mb-1 font-bakbak text-2xl">
                      {entry.author.name}
                    </h5>
                    <p>{entry.author.position}</p>
                    <p>{entry.author.company}</p>
                  </div>
                  <p className="text-sm text-grey-text">{entry.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Testimonials;
