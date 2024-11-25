import { useState } from "react";
import "./App.css";
import { Button, AppText, ImageCards } from "./components";

const isProduction = import.meta.env.PROD;

function App() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const navigate = () => {
    window.location.href = "https://www.playstation.com/en-us";
  };

  const thumbnailImageMap = new Map<number, string>();

  thumbnailImageMap.set(1, "1-thumbnail");
  thumbnailImageMap.set(2, "2-thumbnail");
  thumbnailImageMap.set(3, "3-thumbnail");
  thumbnailImageMap.set(4, "4-thumbnail");
  thumbnailImageMap.set(5, "5-thumbnail");
  thumbnailImageMap.set(6, "6-thumbnail");

  const bgMap = new Map<number, string>();

  bgMap.set(1, "1-background");
  bgMap.set(2, "2-background");
  bgMap.set(3, "3-background");
  bgMap.set(4, "4-background");
  bgMap.set(5, "5-background");
  bgMap.set(6, "6-background");

  const getImage = (src: string) =>
    `${isProduction ? "assets" : "small-play-app/assets"}/${src}.png`;

  const renderImages = (imageType: "thumbnail" | "background") => {
    let imageMap: Map<number, string> = bgMap;

    if (imageType !== "background") {
      imageMap = thumbnailImageMap;
    }

    const images = [];
    for (let i = 0; i < imageMap.size; i++) {
      const idx = i + 1;
      images.push({
        img: getImage(imageMap.get(idx) as string),
      });
    }

    return images;
  };

  return (
    <div className="app-container flex flex-col mt-[20vh] p-8 lg:mt-[18vh] lg:p-24 relative bg-black">
      <div className="absolute bg-gradient overlay z-20" />

      <div className="absolute overlay w-full ">
        <div className="relative">
          <div className="absolute overlay bg-inner-gradient z-10" />

          <img
            src={renderImages("background")[activeIndex].img}
            alt="rico"
            className="w-full object-contain lg:object-cover max-h-[90vh]"
          />

          {activeIndex === 0 && (
            <img
              src={getImage("1-foreground-cutout")}
              alt="rico"
              className="absolute bottom-0 right-[10vw] h-[calc(100%+70px)] lg:h-[calc(100%+90px)]"
            />
          )}
        </div>
      </div>

      <div className="w-full z-20">
        <AppText
          label="heading title"
          variant="bolder"
          color="white"
          size="lg"
          className="sm:w-24 md:w-64  leading-[1.2] uppercase mb-24"
        >
          more from rico the dog
        </AppText>

        <Button className="p-2 mb-6 w-32">
          <AppText
            label="rico is back label"
            variant="bold"
            color="white"
            size="sm"
          >
            RICO IS BACK!
          </AppText>
        </Button>

        <AppText
          label="ricobot"
          variant="bolder"
          color="white"
          size="2xl"
          className="mb-8 uppercase"
        >
          Ricobot
        </AppText>

        <AppText
          label="hero caption"
          variant="regular"
          color="white"
          size="md"
          className="w-caption"
        >
          Charge into a brand-new supersized adventure with RICO across 50
          exciting and diverse worlds, available now on PS5!
        </AppText>

        <Button
          dataTestid="learn-more-button"
          className="mt-12 p-4"
          variant="filled"
          onClick={navigate}
        >
          <AppText
            label="rico is back label"
            variant="bolder"
            color="black"
            size="md"
            className="uppercase"
          >
            Learn More
          </AppText>
        </Button>
      </div>

      <ImageCards
        images={renderImages("thumbnail")}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
}

export default App;
