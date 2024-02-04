import { useEffect, useState } from "react"
import CoffeeCard from "../coffeeCard/CoffeeCard"

interface Coffeeprops {
  available: boolean
  id: number
  image: string
  name: string
  popular: boolean
  price: string
  rating: number
  votes: number
}

interface DataProps {
  data?: Coffeeprops[]
}
const ListContainer = ({ data }: DataProps) => {
  const [showItems, setShowItems] = useState<Coffeeprops[]>();
  const [allBackground, setAllBackground] = useState('bg-[#6F757C]');
  const [avaliableBackground, setAvaliableBackground] = useState('')

  useEffect(() => {
    setShowItems(data)
  }, [data])

  const showAvaliableItems = () => {
    const availableItems = data?.filter((coffee) => coffee.available);
    setAllBackground('');
    setAvaliableBackground('bg-[#6F757C]')
    setShowItems(availableItems || [])
  }

  const showAllItems = () => {
    setAllBackground('bg-[#6F757C]');
    setAvaliableBackground('')
    setShowItems(data)
  }

  console.log(data)
  return (
    <div className="max-w-[500px] lg:max-w-[768px] xl:max-w-[1280px] bg-[#1B1D1F] rounded-2xl py-16 px-8 ">
      <div className="text-white flex flex-col gap-7 items-center bg-bgVector bg-no-repeat bg-right-top py-4">
        <h1 className="w-full max-w-[640px] text-center text-4xl text-[#FEF7EE]">Our Collection</h1>
        <p className="max-w-[400px] text-center text-[#6F757C]">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
      </div>
      <div className="w-full flex flex-col gap-5 items-center mt-5">
        <div className="w-full flex justify-center gap-5 text">
          <button
            onClick={showAllItems}
            className={`${allBackground} text-sm text-[#FEF7EE] px-3 py-2 rounded-md`}>All Products</button>
          <button
            onClick={showAvaliableItems}
            className={`${avaliableBackground} text-sm text-[#FEF7EE] px-3 py-2 rounded-md`}>Available Now</button>
        </div>
        {showItems && (
          <div className="w-full grid grid-cols-1 gap-20 lg:grid-cols-2 xl:grid-cols-3 px-8 lg:gap-10">
            {showItems && showItems.map((coffee) => (
              <CoffeeCard key={coffee.id} available={coffee.available} id={coffee.id} image={coffee.image} name={coffee.name} popular={coffee.popular} price={coffee.price} rating={coffee.rating} votes={coffee.votes} />
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default ListContainer