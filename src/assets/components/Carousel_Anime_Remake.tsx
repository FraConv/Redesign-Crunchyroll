import { useState } from "react";

function Carousel_Anime_Remake() {
    
    const movies = [
      "Ranma.svg",
      "Lamu.svg",
      "Devil Cry.svg",
      "Shaman King.svg",
      "U.svg",
      "Crystal.svg",
      "Dororo.svg",
      "Fullmetal.svg",
      "Hunter X Hunter.svg",
      "Trigun.svg", 
    ];
    
    const movieDetails = [
      {
        title: "Ranma 1/2",
        episodes: "Episodi: 12",
        seasons: "Stagioni: 1",
        synopsis:
          "Ranma Saotome è un giovane karateka caduto nelle Sorgenti Maledette di Jusenkyo assieme al padre durante una sessione di allenamento. Questo tragico avvenimento gli ha permesso...",
        sub: "Sub | Dub",
      },
      {
        title: "Urusei Yatsura - Lamù e i casinisti planetari",
        episodes: "Episodi: 13",
        seasons: "Stagioni: 1",
        synopsis:
          "La vicenda ruota intorno ad Ataru Moroboshi, un ragazzo estremamente sfortunato e donnaiolo, e a Lamù, figlia del grande capo degli Oni giunto dallo spazio...",
        sub: "Sub | Dub",
      },
      {
        title: "Devilman Cry baby",
        episodes: "Episodi: 159",
        seasons: "Stagioni: 7",
        synopsis:
          "Da tempo i demoni che vivevano sulla Terra, terrorizzando gli esseri umani con la loro feroce sete di sangue, sono scomparsi. Imprigionati in coltri...",
        sub: "Sub | Dub",
      },
      {
        title: "Shaman King",
        episodes: "Episodi: 60",
        seasons: "Stagioni: 3",
        synopsis:
          "Yoh Asakura è il discendente di un’antichissima famiglia di sciamani. Fin da piccolo è in grado di vedere gli spiriti e anziché ignorarli o essere spaventato da loro...",
        sub: "Sub | Dub",
      },
      {
        title: "Grendizer U",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          " Duke, dopo un devastante attacco da parte delle forze Vega nei confronti del pianeta Fleed, fugge assieme a Grendizer sul pianeta Terra. Appena arrivato incontra...",
        sub: "Sub | Dub",
      },
      {
        title: "Pretty Guardian Sailor Moon Crystal",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Usagi Tsukino, quattordicenne pigra e piagnucolona, riceve dalla gattina parlante Luna il potere di trasformarsi in Sailor Moon, paladina della giustizia vestita con la marinaretta...",
        sub: "Sub | Dub",
      },
      {
        title: "Dororo",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Hyakkimaru è un giovane samurai che combatte e distrugge demoni. Appena nato, gli furono sottratte dodici parti del corpo da altrettanti dodici demoni. Abbandonato...",
        sub: "Sub | Dub",
      },
      {
        title: "Fullmetal Alchemist brotherhood",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Ambientato nel continente di Amestris, un mondo molto simile all’Europa di inizio 900 in cui è naturale la presenza dell’Alchimia, pratica esoterica a metà strada tra scienza...",
        sub: "Sub | Dub",
      },
      {
        title: "Hunter x Hunter",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Hunter x Hunter racconta la storia di Gon, un ragazzo dalle mille risorse deciso a diventare Cacciatore per seguire le orme paterne e poter, allo stesso tempo...",
        sub: "Sub | Dub",
      },
      {
        title: "Trigun Stampede",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          " La storia è ambientata su un pianeta sul quale l'uomo ha traslocato per riuscire a sopravvivere dopo una grande catastrofe. Il protagonista è Vash The Stampede, super...",
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
        Ora di restauro
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

      
    
export default Carousel_Anime_Remake;
