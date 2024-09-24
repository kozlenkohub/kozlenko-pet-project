export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/25">
      <div className="">
        <img src="/pizza.png" className="block max-h-auto max-h-48 mx-auto" alt="pizza" />
      </div>{' '}
      <h4 className="font-semibold text-xl my-3">Pepppppp</h4>
      <p className="text-gray-500 text-sm">Pepperoni, cheese, tomato sauce</p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">Add to cart</button>
    </div>
  );
}
