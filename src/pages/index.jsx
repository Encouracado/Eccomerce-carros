import CarrouselComponents from '../Components/Carousel/index.tsx'



export default function Home() {
  return (
    <div name="wrapper" className="flex flex-col  w-screen h-screen bg-blue-200 ">
    <header className="w-screen mx-auto px-500 bg-red-500  h-16">Header</header>
    <div className="bg-blue-600 flex flex-grow ">
     <div className="h-72 w-screen">
     Carrosel
     </div>
    </div>
    <div className="flex flex-wrap justify-center flex-grow bg-gradient-to-r from-green-400 to-blue-500">
      <div className=" w-56 h-56 border-2 rounded-sm m-16">Product</div>
      <div className="w-56 h-56 border-2 rounded-sm m-16">Product</div>
      <div className="w-56 h-56 border-2 rounded-sm m-16">Product</div>
      <div className="w-56 h-56 border-2 rounded-sm m-16">Product</div>
      <div className="w-56 h-56 border-2 rounded-sm m-16">Product</div>
      <div className="w-56 h-56 border-2 rounded-sm m-16">Product</div>
      <div className="w-56 h-56 border-2 rounded-sm m-16">Product</div>
      <div className="w-56 h-56 border-2 rounded-sm m-16">Product</div>
      <div className="w-56 h-56 border-2 rounded-sm m-16">Product</div>
    </div>
    </div >
  )
}
