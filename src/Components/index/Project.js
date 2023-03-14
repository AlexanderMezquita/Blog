import React from "react";

export default function Project() {
  const Card = () => {
    return (
      <div className="bg-white max-w-lg rounded-xl  container col-span-12 md:col-span-6 m-auto ">
        <img
          alt=""
          src="https://media.planview.com/clarizen/wp-content/upload/2018/05/project-planning.jpg"
          className=" h-fit"
        />
        <div className="p-3 flex flex-col space-y-2">
          <h2 className=" font-bold">React Space</h2>
          <span className="">
            Handy tool belt to create amazing AR components in a react app, with
            reduc integration via middleware
          </span>
          <span className="text-xs underline cursor-pointer underline-offset-4 row-auto">
            See more...
          </span>
        </div>
      </div>
    );
  };
  return (
    <section
      className="w-screen bg-neutral-800 p-10 grid grid-cols-12 gap-5 row-auto "
      id="portfolio"
    >
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}
