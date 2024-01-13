import { Slider } from "solid-slider";
import "solid-slider/slider.css";
import "../styles/sliderStyles.css";
import { autoplay } from "solid-slider/plugins/autoplay";

const BrandSlider = () => {
  return (
    <div class="w-full">
      <div class="flex flex-col lg:flex-row-reverse h-1/2 lg:w-2/3 mx-auto">
        <div class="lg:w-3/5 w-full h-1/8 mx-auto lg:ml-0 order-2 lg:order-1 overflow-hidden">
          <Slider
            options={{ loop: true }}
            plugins={[autoplay(1500, { pauseOnDrag: true })]}
          >
            <div class="rounded slide slide1">1</div>
            <div class="rounded slide slide2">2</div>
            <div class="rounded slide slide3">3</div>
            <div class="rounded slide slide4">4</div>
            <div class="rounded slide slide5">5</div>
            <div class="rounded slide slide6">6</div>
          </Slider>
        </div>

        <div class="lg:w-1/2 order-1 lg:order-2 p-8 flex items-center justify-center">
          <div>
            <h1 class="text-4xl lg:text-5xl font-bold mb-4">Your Hero Title</h1>
            <p class="text-lg">
              Your hero section description goes here. It can be multiple lines
              if needed.
            </p>
            <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
              Call to Action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
