

const PopularProduct = () => {
  return (
    <div>
     
      <main className="p-4">
      
        
        <section className="my-0">
          <h2 className="text-2xl font-bold text-center">Our Popular Plants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <div className="bg-white p-4 shadow-md text-center " >
              <img src="/images/spiderplant.png" alt="Menu 1" className="w-full h-32 object-cover"/>
              <h3 className="mt-2">Spider Plant</h3>
              <p>$10.00</p>
            </div>
            <div className="bg-white p-4 shadow-md text-center">
              <img src="/images/marblequeen.png" alt="Menu 2" className="w-full h-32 object-cover"/>
              <h3 className="mt-2">Marble Queen</h3>
              <p>$12.00</p>
            </div>
            <div className="bg-white p-4 shadow-md text-center">
              <img src="/images/snakeplant.png" alt="Menu 3" className="w-full h-32 object-cover"/>
              <h3 className="mt-2">Snake Plant</h3>
              <p>$8.00</p>
            </div>
            <div className="bg-white p-4 shadow-md text-center">
              <img src="/images/peacelily.png" alt="Menu 4" className="w-full h-32 object-cover"/>
              <h3 className="mt-2">Peace Lily</h3>
              <p>$11.00</p>
            </div>
          </div>
        </section>
       
      </main>
    
    </div>
  );
};

export default PopularProduct;
