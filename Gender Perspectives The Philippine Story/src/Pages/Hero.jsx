function Hero() {
  return (
    <div className="bg-sky-300 w-full h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold text-white mb-4">
        Welcome to Our Website
      </h1>
      <p className="text-xl text-white mb-6 max-w-xl">
        We provide innovative solutions to help your business grow. Explore our
        services and see what we can do for you.
      </p>
      <button className="bg-white text-sky-500 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition">
        Get Started
      </button>
    </div>
  );
}

export default Hero;
