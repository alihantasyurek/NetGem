const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-10 bg-linear-to-r from-black/80 to-transparent text-white">
      <div className="px-12 max-w-2xl
                h-full flex flex-col justify-center items-center text-center
                sm:items-start sm:text-left sm:justify-start sm:pt-[10%]">
        <h1 className="text-lg md:text-4xl font-bold">{title}</h1>

        <p className="py-6 md:text-xl sm:text-md">
          {overview}
        </p>

        <div className="flex">
          <button className="bg-white/95 w-30 h-10 text-xl text-black rounded-lg hover:bg-white/50">
            ▶︎ Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
