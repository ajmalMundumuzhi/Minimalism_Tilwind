import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="w-full h-screen flex container mx-auto">
      <div className="w-1/2 flex flex-col justify-center">
        <h1 className="text-6xl font-bold mb-6">Veggie Pizza Delight</h1>
        <div className="flex gap-2 text-slate-600 mb-6 items-center">
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
          <a href="#">
            <button className="bg-orange-500 text-white font-semibold hover:bg-orange-600 py-3 px-6">
              Check Ingredients
            </button>
          </a>
          <a href="#">
            <button className="bg-orange-500 text-white font-semibold hover:bg-orange-600 py-3 px-6">
              Get Recipe
            </button>
          </a>
        </div>

      </div>
      <div className="w-1/2 flex items-center justify-center">
        <Image src="/images/images (2).jpeg" alt="Veggie Pizza" width={500} height={500} />
      </div>
      </section>
      <section className="py-24">
        <h2 className="text-5xl font-bold mb-24 text-center">Ingredients</h2>
        <div className="grid grid-cols-3 gap-12 place-items-center">
          <div className="flex h-24 w-96 items-center rounded-lg p-2 shadow">
            <Image className="mr-6 size-24 object-cover p-2" src="/images/download (2).jpeg" alt="Ingredient 1" width={100} height={100} />
            <div>
              <h3 className="text-xl font-semibold">Tomatoes</h3>
              <p className="text-sm text-slate-700">Fresh and juicy tomatoes for a rich sauce.</p>
            </div>
          </div>
          <div className="flex h-24 w-96 items-center rounded-lg p-2 shadow">
            <Image className="mr-6 size-24 object-cover p-2" src="/images/download (2).jpeg" alt="Ingredient 1" width={100} height={100} />
            <div>
              <h3 className="text-xl font-semibold">Tomatoes</h3>
              <p className="text-sm text-slate-700">Fresh and juicy tomatoes for a rich sauce.</p>
            </div>
          </div>
          <div className="flex h-24 w-96 items-center rounded-lg p-2 shadow">
            <Image className="mr-6 size-24 object-cover p-2" src="/images/download (2).jpeg" alt="Ingredient 1" width={100} height={100} />
            <div>
              <h3 className="text-xl font-semibold">Tomatoes</h3>
              <p className="text-sm text-slate-700">Fresh and juicy tomatoes for a rich sauce.</p>
            </div>
          </div>
        </div>
      </section>

    </main>

    
  );
}
