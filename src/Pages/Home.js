function Home() {
  return (
    <div className=" p-12 flex justify-center align-center">
      <div className="card bg-amber-50 w-4/5 h-fit shadow-md p-5 rounded-lg mb-10">
        <div className="flex items-baseline sm:flex-row flex-col mb-4">
          <h1 className=" text-3xl font-extrabold">
            Welcome to
          </h1>
          <span className=" text-2xl font-extrabold text-[#ffb579] ml-2 drop-shadow-sm"> Math Magicians</span>
        </div>
        <p className="mb-5 mt-2">
          A captivating website dedicated to mathematics enthusiasts.
          Math Magicians is a Single Page App (SPA) that offers a seamless user experience,
          combining practical calculations and thought-provoking quotes.
          Indulge your curiosity and appreciation for this fascinating subject.
          <br />
          <span className=" text-lg sm:text-2xl font-extrabold text-[#ffb579] mr-2 mt-2  drop-shadow-sm">
            Perform Calculations:
            <br />
          </span>
          Explore a wide range of calculations,
          from basic arithmetic to complex equations, using our intuitive interface.
          Instantly generate accurate results and effortlessly dive into the world of mathematics.
          <br />
          <span className=" text-lg  sm:text-2xl font-extrabold text-[#ffb579] mr-2  mt-2 drop-shadow-sm">
            {' '}
            Discover Math Quotes:
            {' '}
            <br />
          </span>
          Delight in a collection of random math-related quotes that inspire,
          enlighten, and showcase the beauty of mathematics.
          Let the words of renowned mathematicians ignite your passion for this captivating subject.
        </p>
      </div>
    </div>
  );
}
export default Home;
