
const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: "Кофе латте арт"
    },
    {
      url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80",
      alt: "Интерьер кофейни"
    },
    {
      url: "https://images.unsplash.com/photo-1604423043492-41cf1227a0bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Завтрак в кофейне"
    },
    {
      url: "https://images.unsplash.com/photo-1523942839745-7848c839b661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Бариста за работой"
    },
    {
      url: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      alt: "Кофейные зерна"
    },
    {
      url: "https://images.unsplash.com/photo-1540648639573-8c848de23f0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Уютный уголок кофейни"
    },
  ];

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Галерея</h2>
          <p className="text-muted-foreground">
            Моменты из жизни нашей кофейни
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md h-64 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium mb-2">Поделитесь своими фотографиями с нами</p>
          <p className="text-muted-foreground mb-4">Отметьте нас в Instagram</p>
          <a 
            href="#" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
          >
            @kofeinik.msk
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-1"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <path d="M15 3h6v6"/>
              <path d="m10 14 11-11"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
