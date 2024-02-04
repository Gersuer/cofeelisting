import star from '../../assets/Star_fill.svg'
import emptyStar from '../../assets/Star.svg'

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

const CoffeeCard = ({ image, name, price, rating, votes, popular, available }: Coffeeprops) => {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Imagem e badge do café */}
      <div className="w-full relative">
        <img className="w-full rounded-xl" src={image} alt="coffee" />
        {popular && (
          <div className="bg-[#F6C768] py-1 w-[80px] flex items-center justify-center rounded-full absolute top-5 left-5 z-20">
            <span className="text-[11px] text-[#111315] font-semibold">Popular</span>
          </div>
        )}
      </div>

      {/* Dados do café */}
      <div className="w-full">
        <div className="w-full flex justify-between">
          <h1 className="text-[#FEF7EE] text-base">{name}</h1>
          <p className="bg-[#BEE3CC] flex justify-center items-center text-center rounded-md px-1 font-bold text-xs">{price}</p>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        {rating > 0 ? (
          <div className='flex items-center gap-2'>
            <img src={star} alt="" />
            <p className='text-[#FEF7EE]'>{rating}</p>
            <p className='text-xs text-[#6F757C] font-bold'>({votes} votos)</p>
          </div>
        ) : (
          <div className='flex items-center gap-2'>
          <img src={emptyStar} alt="" />
          <p className='text-xs text-[#6F757C] font-bold'>(No Ratings)</p>
          </div>
        )}
        {available ? ('') : (
          <p className='text-[#ED735D] text-sm font-bold'>Sold Out</p>
        )}
      </div>
    </div>
  )
}

export default CoffeeCard