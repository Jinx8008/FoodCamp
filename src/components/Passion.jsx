import image from '../assets/platting.jpg';

const Passion = () => {
  return (
    <div className='flex gap-12 items-center flex-col lg:flex-row  justify-center p-8 bg-gray-100'>
      <div>
        <img src={image} alt="Passion" className="w-[500px] h-[650px] object-cover" />
      </div>

      <div>
        <h2 className="passion text-4xl font-bold text-start mt-8 leading-12">A PASSION TO CREATE <br />  <span>EXCEPIONAL</span> DINING <br /> MOMENTS FOR YOU</h2>
        <p className="playfair text-start mt-4 max-w-2xl mx-auto text-lg">
          Feaster brings the finest chefs and the most delicious food to your table. We are dedicated to providing you with an unforgettable dining experience, whether it's a casual meal or a special occasion. Our passion for food and commitment to quality ensures that every dish is crafted with care and served with excellence.
          We belive that every meal is an opportunity to craft a story, and our chef are the story tellers.  With a meticulous attention to detail, we source the freshest ingredients and blend them with creativity to create dishes that not only satisfy your hunger but also delight your senses.  
          From the first bite to the last, we strive to make every moment memorable. Our team is passionate about food and dedicated to providing you with an exceptional dining experience that goes beyond just a meal. <br />
          <br />
          Join us on a culinary journey where every bite is a celebration of flavor, and every meal is a moment to cherish. At Feaster, we are not just serving food; we are creating memories that last a lifetime.
        </p>
      </div>

    </div>
  )
}

export default Passion
