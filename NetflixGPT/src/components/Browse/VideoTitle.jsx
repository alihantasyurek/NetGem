const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 to-transparent text-white">
      <div className="pt-[10%] px-12 max-w-2xl">
        <h1 className="text-6xl font-bold">{title}</h1>

        <p className="py-6 text-lg">
          {overview}
        </p>

        <div className="flex">
          <button className="bg-white/95 w-30 h-10 text-xl text-black rounded-lg hover:bg-white/50">
            ▶︎ Play
          </button>
          <button className="ml-2 bg-gray-500/70 w-30 h-10 text-xl text-white rounded-lg hover:bg-gray-500/30">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
