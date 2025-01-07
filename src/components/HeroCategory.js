import image1 from "../images/category1_image.jpg";
import image2 from "../images/category2_image.jpg";
import image3 from "../images/category3_image.jpg";

const callouts = [
    {
      name: 'Eggs and Brunch',
      description: 'Work from home accessories',
      imageSrc: image1,
      imageAlt: 'https://unsplash.com/photos/a-plate-of-food-on-a-table-next-to-a-bowl-of-sauce-4T-KTP5rWfQ?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
      href: '/blogs/BLOG67890',
    },
    {
      name: 'Fruit and Waffles',
      description: 'Journals and note-taking',
      imageSrc: image2,
      imageAlt: 'https://unsplash.com/photos/waffle-with-strawberry-and-creme-NM1eTOwEz7A?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
      href: '/blogs/BLOG78901',
    },
    {
      name: 'Benefits of the green',
      description: 'Vegetable Bowl',
      imageSrc: image3,
      imageAlt: 'https://unsplash.com/photos/top-view-salad-with-guacamole-oaz0raysASk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
      href: '/blogs/BLOG89012',
    },
  ]
  
  export default function HeroCategory() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-slate-900">Nutrition Is Not A Choice</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-lime-700">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-slate-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  