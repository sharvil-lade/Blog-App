

const HomePost = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://imgs.search.brave.com/9egeCQW_fZg76wsXUSHlCMzgDvC5MaHbeIh8H-5F8dU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2QwYi9jaGFp/bi1saW5rLWZlbmNl/LWluLWZyb250LW9m/LWEtMTUzNTQyNi5q/cGc_Zm10"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* Right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
        Will AI take on the software market soon?
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@sharvil</p>
          <div className="flex space-x-2">
            <p>22-3-24</p>
            <p>16:45</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">Post description</p>
      </div>
    </div>
  );
};

export default HomePost;
