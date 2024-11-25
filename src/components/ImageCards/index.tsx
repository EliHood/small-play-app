type ImageType = {
  img: string;
};

type ImageCardsType = {
  images: ImageType[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

export function ImageCards({
  images,
  activeIndex,
  setActiveIndex,
}: ImageCardsType) {
  return (
    <div className="flex my-16 sm:mb-32 lg:my-12 z-20">
      <section className="flex flex-row flex-wrap lg:flex-nowrap gap-0 lg:gap-4 xl:gap-12 w-full lg:max-w-[1200px] items-center lg:items-end h-[240px] justify-between z-10">
        {images?.map((item, key) => (
          <div className="w-1/3 flex justify-center items-center">
            <div
              data-testid={`image-thumbnail-${key}`}
              aria-label="image-thumbail-conainer"
              onClick={() => setActiveIndex(key)}
              className={`p-4 cursor-pointer  w-full md:w-[160px] lg:w-full xl:w-[280px] h-auto relative ${
                activeIndex === key
                  ? "active-gradient-border lg:max-w-[260px]"
                  : "opacity-70 lg:max-w-[160px] "
              }`}
            >
              <img
                src={item.img}
                alt="image-thumbnail"
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
