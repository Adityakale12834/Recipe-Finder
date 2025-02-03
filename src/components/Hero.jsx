
function Hero() {
  return (
    <div className='flex flex-row-reverse flex-wrap relative'>
        <img className='overflow-hidden w-fit z-0 relative' style={{minHeight:"515px", objectFit:"cover", objectPosition:"73%" }} src="/hero.webp" alt="" />
        <div className='text-white static lg:absolute lg:w-4/11 top-15 left-10 w-full h-6/7 rounded-2xl p-10 z-10 flex flex-col gap-5 items-center justify-center' style={{background:"#3B8B13", marginTop:"-30px", borderRadius:"25px 25px"}}>
            <h1 className='font-extrabold text-5xl'>Recipes Right for Your Family
            </h1>
            <p className='text-xl'>Have a picky eater? Short on time? Sort recipes by kid-friendly, prep time and more.</p>
        </div>
    </div>
  )
}

export default Hero