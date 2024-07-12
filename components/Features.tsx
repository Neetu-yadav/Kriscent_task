// components/Features.tsx
// const features = [
//     { title: 'Feature 1', description: 'Description of feature 1', icon: '/path/to/icon1.png' },
//     { title: 'Feature 2', description: 'Description of feature 2', icon: '/path/to/icon2.png' },
//     { title: 'Feature 3', description: 'Description of feature 3', icon: '/path/to/icon3.png' },
//   ];
  
  const Features = () => {
    return (
      <div className="features py-20">
        <h2 className="text-3xl font-bold text-center mb-10">What We Serve</h2>
        <p className="text-1xl  text-center mb-10">Delivering healthy, vibrant plants to your doorstep.</p>


        <section className="my-8, py-12  bg-lime-50" >
       
          <div className="flex justify-around mt-4">
            <div className="text-center">
              <div className="text-6xl mb-2">📱</div>
              <p>Easy To Order</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">🚀</div>
              <p>Faster Delivery</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">🏆</div>
              <p>Best Quality</p>
            </div>
          </div>
        </section>




      </div>
    );
  }
  
  export default Features;
  