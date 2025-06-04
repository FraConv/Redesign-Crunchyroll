import { useState } from "react";

function Carousel_Anime_Old() {
    
    const movies = [
      "Ken.svg",
      "Grendizer.svg",
      "Doraemon.svg",
      "Akira.svg",
      "Devil man.svg",
      "Mazinga.svg",
      "Sailor Moon.svg",
      "Dragon Ball.svg",
      "Fairy Tail.svg",
      "InuYasha.svg",
      "Naruto.svg",
      "ZatchBell.svg",
      "Gintama.svg",
      "my melody.svg",
      "Evangelion.svg",
  
    ];
    
    const movieDetails = [
      {
        title: "Ken il guerriero",
        episodes: "Episodi: 12",
        seasons: "Stagioni: 1",
        synopsis:
          " Alla fine del XX secolo il mondo intero è sconvolto dalle esplosioni atomiche, che hanno fatto evaporare gli oceani e reso le praterie dei deserti inospitali. I sopravvissuti...",
        sub: "Sub | Dub",
      },
      {
        title: "UFO Robot Goldrake",
        episodes: "Episodi: 13",
        seasons: "Stagioni: 1",
        synopsis:
          "Il principe ereditario del pianeta Fleed è costretto a fuggire dal suo pianeta natale (che porta il suo nome), dopo che questo viene conquistato e distrutto dal malvagio...",
        sub: "Sub | Dub",
      },
      {
        title: "Doraemon",
        episodes: "Episodi: 159",
        seasons: "Stagioni: 7",
        synopsis:
          "Nobita è uno studente delle elementari svogliato che ha una cotta per una sua compagna di classe di nome Shizuka, ma a causa della suo carattere timido e insicuro...",
        sub: "Sub | Dub",
      },
      {
        title: "Akira",
        episodes: "Episodi: 60",
        seasons: "Stagioni: 3",
        synopsis:
          " La terza guerra mondiale ha totalmente raso al suolo Tokyo e la città di Neo Tokyo è rinata nel 2019. Nella nuova megalopoli scorrazzano numerose bande...",
        sub: "Sub | Dub",
      },
      {
        title: "Devilman",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          " Il demone Devilman si impossessa del corpo del giovane Akira Fudo, deceduto insieme al padre durante un'escursione nell'Himalaya. Sebbene il suo compito...",
        sub: "Sub | Dub",
      },
      {
        title: "Mazinga Z",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Durante una spedizione archeologica sull'isola di Bardos, il Dr. Hell e il Dr. Kabuto fanno una scoperta sensazionale e riportano alla luce lo spaventoso esercito...",
        sub: "Sub | Dub",
      },
      {
        title: "Sailor Moon",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Usagi Tsukino, una goffa studentessa di terza media, incontra una strana gatta parlante chiamata Luna che rivela alla protagonista di essere una guerriera Sailor...",
        sub: "Sub | Dub",
      },
      {
        title: "Dragon Ball Z",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Trasposizione animata della seconda parte del manga Dragon Ball di Akira Toriyama, più precisamente dei volumi 17-42, i quali non si focalizzano più di tanto sull'avventura alla...",
        sub: "Sub | Dub",
      },
      {
        title: "Fairy Tail",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Lucy Heartphilia è una ragazza che sogna di diventare una maga famosa e di entrare nella gilda di maghi più in vista del regno di Fiore: Fairy Tail. Un giorno, dopo varie peripezie...",
        sub: "Sub | Dub",
      },
      {
        title: "Inuyasha",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Kagome, una normale studentessa che frequenta la terza media, cade nel pozzo di casa sua e viene riportata indietro di 500 anni, nell'epoca Sengoku. In quest'epoca...",
        sub: "Sub | Dub",
      },
      {
        title: "Naruto",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Orfano dalla nascita, Naruto Uzumaki è un ninja del Villaggio della Foglia, a cui piace fare dispetti in giro per attirare l'attenzione. Sebbene abbia solo dodici anni...",
        sub: "Sub | Dub",
      },
      {
        title: "Zatch Bell",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Ogni mille anni i demoni scendono sulla Terra per affrontarsi in una lunga battaglia. La competizione è molto alta perchè il vincitore si aggiudicherà il titolo di Re...",
        sub: "Sub | Dub",
      },
      {
        title: "Gintama",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "La storia ha luogo nel Giappone del periodo Edo dopo che gli Amanto, un insieme di razze aliene provenienti da diversi pianeti, hanno invaso la terra...",
        sub: "Sub | Dub",
      },
      {
        title: "My Melody",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Kuromi e Baku sono due animaletti parlanti che furono rinchiusi nella prigione di Mary Land a causa delle loro azioni malvagie. I due, però, riuscirono a fuggire grazie...",
        sub: "Sub | Dub",
      },
      {
        title: "Neon Genesis Evangelion",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Sono passati ormai 15 anni dalla violenta catastrofe nota come Second Impact che provocò la morte di oltre 3 miliardi di persone. Questo incidente dalle cause non del...",
        sub: "Sub | Dub",
      },
    ];
  

    const [Othericon, SetOthericon]=useState<number|null>(null)
    
    const [currentIndexx, setCurrentIndexx] = useState<number>(0.9);
        const [currentIndex, setCurrentIndex] = useState<number>(0.5);
        const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
        const visibleMovies = 6; // Numero di card visibili contemporaneamente
        const visibleMoviess = 2; // Numero di card visibili contemporaneamente
        const cardWidthPercentage = 100 / visibleMovies; // Dimensione di ogni card
        const cardWidthPercentagee = 273 / visibleMovies; // Dimensione di ogni card
        const [startX, setStartX] = useState<number | null>(null);

        const handleTouchStart = (e: React.TouchEvent) => {
          setStartX(e.touches[0].clientX);
        };
      
        const handleTouchEnd = (e: React.TouchEvent) => {
          if (startX === null) return;
          const endX = e.changedTouches[0].clientX;
          const deltaX = endX - startX;
      
          if (deltaX > 50 && currentIndexx > 0) {
            // Swipe a destra (indietro)
            setCurrentIndexx((prev) => prev - 1);
          } else if (deltaX < -50 && currentIndexx < movies.length - visibleMoviess) {
            // Swipe a sinistra (avanti)
            setCurrentIndexx((prev) => prev + 1);
          }
      
          setStartX(null); // Resetta il valore
        };

        const handleNext = () => {
          if (currentIndex < movies.length) {
            setCurrentIndex(currentIndex + 5);
          }
        };
      

        const handlePrevious = () => {
          if (currentIndex > 1) {
            setCurrentIndex(currentIndex - 5);
          }
        };

    
      
      
        return (
          <div className="absolute grid left-0  w-[100%] mx-auto bg-black mt-[-100%]">
      {/* Titolo */}
      <h2 className="xl:text-4xl text-3xl font-bold mb-4 text-white px-4 text-left 2xl:pl-40 pl-6 xl:pl-28 ">
        Nostalgia portami via
      </h2>

      {/* Carosello */}
      <div className="overflow-hidden">
        <div
            className="flex transition-transform duration-[900ms] cursor-pointer"
            style={{
              transform: `translateX(-${currentIndex * cardWidthPercentage}%)`,
            }}
          >
            {movies.map((movie, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-2 w-[20%] relative   2xl:translate-x-[19.3rem] xl:translate-x-[13.3rem]"
                style={{ width: `${cardWidthPercentage}%` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >

         
                {/* Immagine */}
                <img
                  src={movie}
                  alt={` ${index}`}
                  className={`w-full max-[500px]:hidden rounded-3xl text-[0px] shadow-lg  transition-all duration-300 cursor-pointer ${
                    hoveredIndex === index ? "opacity-20 scale-95" : "opacity-100"
                  }`}
                />
                   {/* Sovrapposizione con il titolo */}
                   {hoveredIndex === index && (
                <div className="absolute inset-0 text-white rounded-3xl p-4 grid grid-cols-2 h-[320px]">
                  <h3 className="font-bold text-xl p-5 col-span-2">{movieDetails[index]?.title}</h3>
                  <p className="text-left pl-5 col-span-2 text-teal-400">{movieDetails[index]?.episodes}</p>
                  <p className="text-left pl-5 text-teal-400">{movieDetails[index]?.seasons}</p>
                  <p className="text-left pl-5 text-teal-400">{movieDetails[index]?.sub}</p>
                  <p className="text-left p-5 col-span-2">{movieDetails[index]?.synopsis}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>



        {/* Carosello mobile */}
        <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        
        <div
          className="flex transition-transform duration-[900ms] cursor-pointer"
          style={{
            transform: `translateX(-${currentIndexx * cardWidthPercentagee}%)`,
          }}
        >
          
          {movies.map((movie, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-2 w-[20%] relative translate-x-[100%]"
              style={{ width: `${cardWidthPercentagee}%` }}
            >
          
         
          <div className="grid grid-cols-3 absolute right-5 gap-0.5"
       
           onTouchStart={() => SetOthericon(Othericon === index ? null : index)}
           onTouchEnd={() => SetOthericon(Othericon === index ? null : index)}
           >
              <div className="bg-orange-600 border-2 border-black rounded-2xl w-[10px] h-[10px] mt-[100%]"></div>
              <div className="bg-orange-600 border-2 border-black rounded-2xl  w-[10px] h-[10px] mt-[100%]"></div>
              <div className="bg-orange-600 border-2 border-black rounded-2xl  w-[10px] h-[10px] mt-[100%]"></div>
          </div>

          
    
              {/* Immagine */}
              <img
                src={movie}
                alt={` ${index}`}
                className={`w-full xl:hidden rounded-3xl text-[0px] shadow-lg  transition-all duration-300 cursor-pointer  ${
                    hoveredIndex === index ? "opacity-40 scale-95" : "opacity-100"
                  }`}
                
              />
               {Othericon === index && (
          <div className="absolute inset-0 bg-black bg-opacity-60 text-white text-center p-4 rounded-3xl">
            <h3 className="text-sm font-bold">{movieDetails[index]?.title}</h3>
            
          </div>
           )}
            
            </div>
          ))}
        </div>
      </div>

          
            {/* Pulsanti */}
            <button
              className="max-[500px]:hidden absolute top-1/2 -translate-y-1/2 left-[4%] bg-black bg-opacity-50 p-4 text-white rounded-full hover:bg-opacity-75"
              onClick={handlePrevious} 
              disabled={currentIndex === 0}
            >
              &#9664;
            </button>
            <button
              className="max-[500px]:hidden absolute top-1/2 -translate-y-1/2 right-[4%] bg-black bg-opacity-50 p-4 text-white rounded-full hover:bg-opacity-75"
              onClick={handleNext}
              disabled={currentIndex >= movies.length - visibleMovies}
            >
              &#9654;
            </button>
          </div>
        );
      };

      
    
export default Carousel_Anime_Old;
