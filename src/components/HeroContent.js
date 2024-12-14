import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import contentimage from "../images/content_image.jpg"

export default function HeroContent() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-lime-700">Your Health, Our Priority</p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Nourish Your Body
              </h1>
              <p className="mt-6 text-xl leading-8 text-slate-800">
                  Explore personalized nutrition plans crafted for your unique lifestyle and health goals. Whether you're looking to boost energy, maintain weight, or enhance overall wellness, we’ve got you covered.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="https://unsplash.com/photos/cooked-food-on-black-bowl-WfcBiBvcZ04?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
            src={contentimage}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-slate-700 lg:max-w-lg">
              <p>
              Eating healthy doesn’t have to be complicated. Our app helps you make smarter food choices with features like meal suggestions, 
              nutritional analysis, and expert tips. 
              From balanced recipes to mindful eating habits, every step leads to a healthier you.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-slate-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-slate-800">Avocados are nutrient powerhouses:</strong> They contain over 20 different vitamins and minerals, 
                    including 26% of your daily Vitamin K needs in just one serving.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-slate-800">Protein power:</strong> A single medium egg provides 6 grams of 
                    protein, making it one of the most nutrient-dense foods.

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-slate-800">Hydration from food:</strong> About 20% of your daily water intake comes from the foods you eat, with cucumbers 
                    and watermelons leading the list at 95% water content.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-slate-800">Gut health matters: </strong> Eating fermented foods like yogurt 
                    and kimchi supports your microbiome, which contains 100 trillion bacteria—10x more than the cells in your body!
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900">Bust Myths</h2>
              <p className="mt-6  text-slate-600">
              Contrary to wild claims on the internet, meat does not "rot" in your colon. Our system is well equipped to digest meat
              with acids and enzymes. Nutrients are absorbed by the interstine before being eliminated which does not leave much to rot.
              </p>
              <p className="mt-6  text-slate-600">
              Fruit juice, generally seen as a healthier alternative to softdrinks often contain as much sugar as the latter. While comparatively
              better due to their antioxidants the lack of fibre can lead to overconsumption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
