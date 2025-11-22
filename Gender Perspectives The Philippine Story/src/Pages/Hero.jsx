import "../assets/Style/Hero.css";
import logs from "../assets/imges/logs.png";
import img1 from "../assets/imges/img1.jpg";

function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="Hero1 w-full min-h-screen flex flex-col justify-center items-center text-center px-4 py-12">
        <img
          src={logs}
          alt="Site Logo"
          className="logo max-h-[300px] w-auto mb-6"
        />

        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Gender Evolution in the Philippines
        </h1>

        <p className="text-black text-base md:text-lg max-w-2xl px-2">
          Exploring the historical and contemporary gender roles that shaped
          Philippine society.
        </p>
      </div>

      {/* INTRODUCTION SECTION */}
      <div className="bg-white w-full min-h-screen flex flex-col justify-center items-center text-center px-4 py-12">
        <img
          src={img1}
          alt="Historical representation of gender roles in the Philippines"
          className="w-full max-w-4xl rounded-md shadow-md mb-8 object-cover"
          style={{ maxHeight: "900px" }}
        />
        <p className="text-gray-800 leading-relaxed max-w-3xl text-base md:text-lg px-4">
          Gender roles in the Philippines have undergone significant transitions
          throughout history. From the relative equality present in pre-colonial
          communities, to the patriarchal norms established during the Spanish
          and American colonial periods, and finally to the diverse identities
          embraced in modern times—these developments reflect how Filipino
          society continues to adapt and evolve. This website provides a
          comprehensive exploration of these changes through historical
          analysis, contemporary perspectives, and the cultural, political, and
          economic forces that continue to shape gender in the Philippines.
        </p>
      </div>
    </>
  );
}

export default Hero;
