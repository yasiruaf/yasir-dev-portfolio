import SlideArrowButton from "../animata/button/slide-arrow-button";
import GradientText from "../gradientStyle";

const HeroSection = () => {
  return (
    <div className="bg-[url(/Images/image.jpeg)] bg-center bg-cover bg-no-repeat min-h-screen text-white flex justify-center items-center md:px-32">
      <div className="md:w-1/2">
        <h3>Welcome to my Portfolio</h3>
        <h1 className="text-5xl font-bold my-5 leading-[1.2] uppercase">
          Hi! I'm Muhammad Yasir <br />{" "}
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
          >
            Web Developer
          </GradientText>
        </h1>
        <p className="text-lg mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates
          expedita quos enim dicta error quis molestias ipsum a qui?
        </p>
        <SlideArrowButton />
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default HeroSection;
