import bannerimage from "../images/bannerimage.jpg"

const links = [
    { name: 'Try the calculator now', href: '/calculator' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Recipes to choose from', value: '500+' },
    { name: 'Allergens to exclude', value: '4+' },
    { name: 'Dietary preferences', value: '3+' },
  ]
  
  export default function Hero() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 ">
        <img
          alt="https://unsplash.com/photos/person-holding-white-ceramic-plate-mNefYU7uRbk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
          src={bannerimage}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center brightness-50"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Welcome to the CookSmart</h2>
            <p className="mt-8 text-pretty text-lg font-medium text-slate-200 sm:text-xl/8">
            Discover personalized recipes tailored just for you! Simply enter your details and watch the magic happen. 
            Give our nutrition calculator a try today!
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-lime-200">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-slate-200">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  