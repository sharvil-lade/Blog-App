import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Comment from "../Components/Comment";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className=" px-8 md:px-[200px] mt-8">
        <div className=" flex justify-between items-center">
          <h1 className=" text-2xl font-bold text-black md:text-3xl">
            Will AI take on the software market soon?
          </h1>
          <div className=" flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@sharvil</p>
          <div className="flex space-x-2">
            <p>22-3-24</p>
            <p>16:45</p>
          </div>
        </div>
        <img
          src="https://imgs.search.brave.com/9egeCQW_fZg76wsXUSHlCMzgDvC5MaHbeIh8H-5F8dU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2QwYi9jaGFp/bi1saW5rLWZlbmNl/LWluLWZyb250LW9m/LWEtMTUzNTQyNi5q/cGc_Zm10"
          className=" w-full mx-auto mt-8"
          alt=""
        />
        <p className=" mx-auto mt-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className=" flex justify-center items-center space-x-2">
            <div className=" bg-gray-300 rounded-lg px-3 py-1 ">Tech</div>
            <div className=" bg-gray-300 rounded-lg px-3 py-1 ">AI</div>
          </div>
        </div>
        <div className=" flex flex-col mt-4">
          <h3 className=" mt-6 mb-4 font-semibold">Comments</h3>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
        {/* write a comment */}
        <div className=" w-full flex flex-col mt-4 md:flex-row ">
          <input
            type="text"
            placeholder="write a comment"
            className=" md:w-[80%] outline-none px-4 mt-4 md:mt-0 "
          ></input>
          <button className=" bg-black text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">
            Add comment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
