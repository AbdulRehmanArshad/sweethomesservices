/** @format */

import banner from "../../assets/banner.webp";
const Banner = () => {
  const image =
    "https://images.unsplash.com/photo-1648499205021-350335156cd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80";

  return (
    <>
      <div class=" bg-gray-50 flex items-center">
        <section
          class="w-full bg-cover bg-center py-32"
          style={{ backgroundImage: `url(${banner})` }}>
          <div class="container mx-auto text-center text-white">
            <h1 class="text-2xl lg:text-5xl  font-medium mb-6">
              Welcome to My Agency
            </h1>
            <p class="text-sm lg:text-xl mb-36">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae.
            </p>

            <a
              href="#"
              class="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">
              Demo
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
