
function Footer() {
    return (
        <div className='flex justify-center text-white p-10 flex-wrap' style={{ background: "#3B8B13" }}>
            <div className='flex flex-wrap gap-20 max-w-2xl'>
                <div className='text-2xl font-bold'>
                    Cooking
                    Matter
                </div>
                <div className='font-bold flex flex-col gap-4'>
                    <div>About</div>
                    <div>Recipes</div>
                    <div>Tips</div>
                    <div>Community Resources</div>
                    <div>Sitemap</div>
                    <div>Terms and Services</div>
                    <div>Privacy Policy</div>
                </div>
                <div className='font-bold'>
                    Share Our Strength
                </div>
            </div>
        </div>
    )
}

export default Footer