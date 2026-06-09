import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-0">
      <section className="min-h-screen flex flex-col-reverse lg:flex-row ">
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">Veggie Pizza Delight</h1>
        <div className="flex flex-wrap gap-2 text-slate-600 mb-6 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <p>15 Minutes</p>
          <p>.</p>
          <p>Italian</p>
          <p>.</p>
          <p>1345 Cal</p>
          <p>.</p>
          <p>12 Ingredients</p>
        </div>
        <p className="mb-5">
          pizza ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur ipsum bibendum nec. Sed at nunc eget nunc maximus efficitur. Donec in odio sed enim suscipit efficitur. Donec a semper dui. Donec a semper dui.        
        </p>
        <div className="flex gap-4">
          <a href="#checkout">
            <button className="bg-orange-500 text-white font-semibold hover:bg-orange-600 py-3 px-6">
              Check Ingredients
            </button>
          </a>
          <a href="#ingredients">
            <button className="bg-orange-500 text-white font-semibold hover:bg-orange-600 py-3 px-6">
              Get Recipe
            </button>
          </a>
        </div>

      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <Image src="/images/pizza.png" className="w-full max-w-md h-auto" alt="Veggie Pizza" width={500} height={500} />
      </div>
      </section>
      <section id="ingredients" className="py-24">
        <h2 className="text-5xl font-bold mb-24 text-center">Ingredients</h2>
        <div className="grid grid-cols-3 gap-12 place-items-center">
          <div className="flex h-24 w-96 items-center rounded-lg p-2 shadow">
            <Image className="mr-6 size-24 object-cover p-2" src="/images/tomato.png" alt="Ingredient 1" width={100} height={100} />
            <div>
              <h3 className="text-xl font-semibold">Tomatoes</h3>
              <p className="text-sm text-slate-700">Fresh and juicy tomatoes for a rich sauce.</p>
            </div>
          </div>
          <div className="flex h-24 w-96 items-center rounded-lg p-2 shadow">
            <Image className="mr-6 size-24 object-cover p-2" src="/images/c-cheese.png" alt="Ingredient 1" width={100} height={100} />
            <div>
              <h3 className="text-xl font-semibold">Cheese</h3>
              <p className="text-sm text-slate-700">Fresh cheese.</p>
            </div>
          </div>
          <div className="flex h-24 w-96 items-center rounded-lg p-2 shadow">
            <Image className="mr-6 size-24 object-cover p-2" src="/images/cherry.png" alt="Ingredient 1" width={100} height={100} />
            <div>
              <h3 className="text-xl font-semibold">Cherry</h3>
              <p className="text-sm text-slate-700">Fresh Cherries for a sweet touch.</p>
            </div>
          </div>
          <div className="flex h-24 w-96 items-center rounded-lg p-2 shadow">
            <Image className="mr-6 size-24 object-cover p-2" src="/images/olive-oil.png" alt="Ingredient 1" width={100} height={100} />
            <div>
              <h3 className="text-xl font-semibold">Olive Oil</h3>
              <p className="text-sm text-slate-700">Extra virgin olive oil for a rich flavor.</p>
            </div>
          </div>
          <div className="flex h-24 w-96 items-center rounded-lg p-2 shadow">
            <Image className="mr-6 size-24 object-cover p-2" src="/images/olives.png" alt="Ingredient 1" width={100} height={100} />
            <div>
              <h3 className="text-xl font-semibold">Olives</h3>
              <p className="text-sm text-slate-700">Fresh olives for a savory touch.</p>
            </div>
          </div>
          <div className="flex h-24 w-96 items-center rounded-lg p-2 shadow">
            <Image className="mr-6 size-24 object-cover p-2" src="/images/onion.png" alt="Ingredient 1" width={100} height={100} />
            <div>
              <h3 className="text-xl font-semibold">Onion</h3>
              <p className="text-sm text-slate-700">Fresh onion for a savory touch.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="checkout" className="py-24">
        <h2 className="text-5xl text-center font-bold mb-16">
          Check Out The Recipes
        </h2>
        <div className="grid grid-cols-4">
          <div className="group justify-self-center">
            <Image
              className="cursor-pointer hover:drop-shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out"
              src="/images/momos.png"
              alt="Recipe 1"
              width={192}
              height={192}
            />
            <p className="mt-2 text-center text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              Momos
            </p>
          </div>
          <div className="group justify-self-center">
            <Image
              className="cursor-pointer hover:drop-shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out"
              src="/images/burger.png"
              alt="Recipe 1"
              width={192}
              height={192}
            />
            <p className="mt-2 text-center text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              Burgers
            </p>
          </div>
          <div className="group justify-self-center">
            <Image
              className="cursor-pointer hover:drop-shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out"
              src="/images/biryani.png"
              alt="Recipe 1"
              width={192}
              height={192}
            />
            <p className="mt-2 text-center text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              Biriyani
            </p>
          </div>
          <div className="group justify-self-center">
            <Image
              className="cursor-pointer hover:drop-shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out"
              src="/images/samosa.png"
              alt="Recipe 1"
              width={192}
              height={192}
            />
            <p className="mt-2 text-center text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              Samosa
            </p>
          </div>
          
        </div>
      </section>

      <section className="py-24 text-center">
        <h2 className="text-4xl font-semibold mb-4">
          Subscribe for Delicious Recipes & Cooking Tips!
        </h2>
        <p className="mb-12 font-semibold">
          Get the latest recipes and expert cooking tips delivered directly yo your inbox.
        </p>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            className="focus:outline-none w-96 border-b-2 focus:border-orange-500 py-1.5 px-3"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold ml-4 px-3 py-4">Subscribe Now</button>
        </form>
      </section>

    </main>

    
  );
}
