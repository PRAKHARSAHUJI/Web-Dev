const Hero = () => {
    return(
        <main>
            <div className="content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p className="mainPara">
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>

                <div className="contentBtn">
                <button className='shopNowBtn' >Shop Now</button>
                <button className='categoryBtn' >Category</button>
                </div>

                <div className="contentFooter">
                    <p>Also Available On</p>
                    <div>
                    <img src="/Images Project - 1/flipkart.png" alt="" />
                    <img src="/Images Project - 1/amazon.png" alt="" />
                    </div>
                </div>

            </div>

            <div className="imageContainer">
                <img src="/Images Project - 1/shoe_image.png" alt="" />
            </div>
        </main>
    );
};

export default Hero;