import Footer from "../Components/Footer";
import HomePost from "../Components/HomePost";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-[200px] min-h-[80vh]">
        <HomePost />
        <HomePost />
        <HomePost />
        <HomePost />
        <HomePost />
      </div>
      <Footer />
    </>
  );
};

export default Home;
