import { useState } from "react";

function Carousel_Anime_Famosi() {
    
    const movies = [
      "my hero academia.svg",
      "one piece.svg",
      "DanDaDan.svg",
      "Attack on titan.svg",
      "mushoku tensei.svg",
      "Demon Slayer.svg",
      "Solo Leveling.svg",
      "spy x family.svg",
      "Fairy Tail.svg",
      "Frieren Card.svg",
      "Naruto.svg",
      "Dr Stone.svg",
      "Gintama.svg",
      "Love is war.svg",
      "Mashle.svg",
  
    ];
    
    const movieDetails = [
      {
        title: "My Hero Academia",
        episodes: "Episodi: 159",
        seasons: "Stagioni: 7",
        synopsis:
          "A causa di una mutazione genetica del quinto dito del piede, il genere umano ha ottenuto la capacità di sviluppare dei superpoteri, denominati quirk...",
        sub: "Sub | Dub",
      },
      {
        title: "One Piece",
        episodes: "Episodi: 13",
        seasons: "Stagioni: 1",
        synopsis:
          "Monkey D. Rufy è un giovane pirata sognatore che da piccolo ha inavvertitamente mangiato il frutto del diavolo Gom Gom che lo rende elastico, permettendogli di allungarsi...",
        sub: "Sub | Dub",
      },
      {
        title: "DanDaDan",
        episodes: "Episodi: 12",
        seasons: "Stagioni: 1",
        synopsis:
          "Ken Takakura è un ragazzo vittima di atti di bullismo. Un giorno, il giovane inizia a dialogare per caso con una studentessa della sua scuola Momo Ayase. Lui è un...",
        sub: "Sub | Dub",
      },
      {
        title: "Attack on Titan",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          " Diverse centinaia di anni fa, la razza umana fu quasi sterminata dai giganti. Si racconta di quanto questi fossero alti, privi di intelligenza e affamati di carne umana...",
        sub: "Sub | Dub",
      },
      {
        title: "Mushoku Tensei",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Un neet trentaquattrenne viene ucciso in un incidente stradale e si ritrova catapultato in un mondo magico. Invece di svegliarsi come un mago adulto, egli viene reincarnato...",
        sub: "Sub | Dub",
      },
      {
        title: "Demon Slayer",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Tanjiro è il primogenito di una numerosa famiglia priva di padre, che vive in una isolata casa di montagna trai boschi. Un giorno, dopo una fitta nevicata, il ragazzo si...",
        sub: "Sub | Dub",
      },
      {
        title: "Solo Leveling",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Il “Gate”, un misterioso portale che collega il mondo umano a quello di terribili mostri, mette a rischio la vita degli esseri umani. Delle persone con particolari poteri, gli “hunter”...",
        sub: "Sub | Dub",
      },
      {
        title: "Spy × Family",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Twilight, una delle migliori spie al mondo, ha trascorso la vita ad affrontare missioni sotto copertura per rendere il mondo un posto migliore. Un giorno però riceve un compito...",
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
        title: "Frieren: Beyond Journey's End",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          " Frieren è una maga che fa parte della squadra di eroi che ha sconfitto il re dei demoni. Essendo un'elfa, per lei i dieci anni passati con gli altri eroi rappresentano soltanto...",
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
        title: "Dr. Stone",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Anno 5738: da migliaia di anni l'intera umanità si ritrova tramutata in pietra a causa di una catastrofe naturale. Ooki Taiju riesce inspiegabilmente a risvegliarsi, trovandosi così...",
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
        title: "Kaguya-sama: Love is War",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          " Considerato un genio grazie al suo perfetto rendimento scolastico, il presidente Miyuki Shirogane dirige il consiglio studentesco della prestigiosa Shuichiin Academy...",
        sub: "Sub | Dub",
      },
      {
        title: "Mashle: Magic and Muscles",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "La storia si svolge in un mondo in cui esiste la magia e viene usata per qualunque occorrenza della vita quotidiana. Mash è un giovane uomo che vive nelle...",
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
        I più famosi
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
                className="flex-shrink-0 p-2 w-[20%] relative  2xl:translate-x-[19.3rem] xl:translate-x-[13.3rem]"
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

      
    
export default Carousel_Anime_Famosi;
