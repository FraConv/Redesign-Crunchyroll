import { useState } from "react";

function Carousel_Anime_Poco_Conosciuti() {
    
    const movies = [
      "Kiznaiver.svg",
      "Clannad.svg",
      "Steins Gate.svg",
      "Erased.svg",
      "Angel.svg",
      "Haruhi.svg",
      "Dororo.svg",
      "Detective.svg",
      "Busters.svg",
      "Dark Gathering.svg",
      "Hyouka.svg",  
      "NHK.svg", 
      "charlotte.svg", 
      "Nichijou.svg", 
      "Tonikawa Kawaii.svg", 
    ];
    
    const movieDetails = [
      {
        title: "Kiznaiver",
        episodes: "Episodi: 12",
        seasons: "Stagioni: 1",
        synopsis:
          " La serie è ambientata nell'immaginaria città giapponese di Sugomori, costruita su un terreno bonificato e che da anni ha la sua popolazione in...",
        sub: "Sub | Dub",
      },
      {
        title: "Clannad",
        episodes: "Episodi: 13",
        seasons: "Stagioni: 1",
        synopsis:
          "La storia segue le vicende di Tomoya Okazaki, uno studente all'ultimo anno di liceo che viene considerato da molti un pessimo elemento a causa della sua pigrizia e del suo...",
        sub: "Sub | Dub",
      },
      {
        title: "Steins;Gate",
        episodes: "Episodi: 159",
        seasons: "Stagioni: 7",
        synopsis:
          "La serie è incentrata sulle avventure di un gruppo di amici che, modificando un apparecchio a microonde, riescono a creare un congegno in grado di mandare...",
        sub: "Sub | Dub",
      },
      {
        title: "ERASED - The Town Where Only I am Missing",
        episodes: "Episodi: 60",
        seasons: "Stagioni: 3",
        synopsis:
          "In passato Satoru Fujinuma, a seguito ad un misterioso accadimento, ha ottenuto il talento soprannaturale di vedere in flash i momenti precedenti alla morte...",
        sub: "Sub | Dub",
      },
      {
        title: "Angel Beats!",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Ambientato in una 'normale' scuola dell’Aldilà, l’anime seguirà le vicende del protagonista, Otonashi, un ragazzo ordinario che, dopo la morte, si ritrova privo di...",
        sub: "Sub | Dub",
      },
      {
        title: "The Melancholy of Haruhi Suzumiya",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Haruhi Suzumiya è una ragazza eccentrica ed esplosiva, in genere evitata dai compagni in quanto considerata svitata. Le voci su di lei non sono affatto infondate e in effetti...",
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
        title: "The Detective Is Already Dead.",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Kimihiko Kimitsuka ha incontrato qualche anno fa la detective conosciuta come “Siesta” su un aereo dirottato, e da allora è diventato il suo assistente. Insieme hanno...",
        sub: "Sub | Dub",
      },
      {
        title: "Little Busters!",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Little Busters! è ambientato in un liceo giapponese e la sua trama si sviluppa principalmente intorno a due temi: l’infanzia e l’adolescenza. Riki Naoe, il protagonista...",
        sub: "Sub | Dub",
      },
      {
        title: "Dark Gathering",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Keitarou ha una predisposizione ad attirare gli spiriti e, data la sua esperienza, gli viene affidato l'incarico di fare da insegnante. La persona che dovrà aiutare è una...",
        sub: "Sub | Dub",
      },
      {
        title: "Hyouka",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Hōtarō è un ragazzo che frequenta il liceo e il suo motto è all'incirca faccio solo quello che sono costretto a fare e lo faccio in fretta. La sorella, in viaggio in India, gli scrive...",
        sub: "Sub | Dub",
      },
      {
        title: "Welcome to the N.H.K.",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          " La storia ruota attorno a Satou Tatsuhiro, di 22 anni, un ragazzo che vive autorecluso nel suo appartamento a Tokyo. Egli rappresenta il classico hikikomori giapponese...",
        sub: "Sub | Dub",
      },
      {
        title: "Charlotte",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          " Lo scenario presentato da Charlotte è quello di un mondo in cui una piccola percentuale della popolazione adolescente può sviluppare i più disparati poteri speciali....",
        sub: "Sub | Dub",
      },
      {
        title: "Nichijou",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          " Sebbene il titolo abbia il significato di quotidiano, i contenuti sono tutt'altro che di semplice quotidianità. Veniamo catapultati, infatti, in una gag story ricca...",
        sub: "Sub | Dub",
      },
      {
        title: "TONIKAWA: Over the Moon for You",
        episodes: "Episodi: 24",
        seasons: "Stagioni: 2",
        synopsis:
          "Nasa, il cui nome si scrive con i caratteri di cielo stellato, incontra una bellissima ragazza durante gli esami di ammissione. Per lui è un incontro voluto dal destino...",
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
        Perle nascoste
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

      
    
export default Carousel_Anime_Poco_Conosciuti;
