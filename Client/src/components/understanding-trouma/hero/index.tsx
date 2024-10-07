interface HeroProps {
    image: string;
    info: string;
  }


const Hero: React.FC<HeroProps> = ({ image, info }) => {
    return (
        <div className="">
            <div className="bg-[#CDF5FE] rounded-t-full">
                <div className="container w-full h-full py-6 flex flex-col items-center justify-center  lg:min-h-[400px]">
                    <img src={image} alt="Trouma" className="w-[290px] mt-5"/>
                    <h2 className="heading-3 text-center">
                    {info}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Hero
