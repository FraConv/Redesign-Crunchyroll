import Test from "./Carousel"
import {useState} from "react"
import Carousel_Anime_stagionali from "./Carousel_Anime_stagionali";
import Navbar from "./Navbar";
import Carousel_Anime_Famosi from "./Carousel_Anime_Famosi";
import Carousel_Anime_Old from "./Carousel_Anime_Old";
import Carousel_Anime_Remake from "./Carousel_Anime_Remake";
import Carousel_Anime_Poco_Conosciuti from "./Carousel_Anime_Poco_Conosciuti";
import Footer from "./Footer";



function Home(){
    
    const firstSet= [
        {
          index: 1,
          image: "frieren.svg",
          title: "Frieren",
          Episodio: "Episodio 8",
          Sub: "Sub | Dub",
          link:"https://www.youtube.com/watch?v=lRQi4qp8aHI",
        },
        {
            index: 2,
          image: "tower-of-god-cover.svg",
          title: "Tower of God",
          Episodio: "Episodio 2",
          Sub: "Sub | Dub",
          link:"https://www.animeclick.it/anime/41312/lycoris-recoil",
        },
        {
            index: 3,
          image: "black clover.svg",
          title: "Black Clover",
          Episodio: "Episodio 20",
          Sub: "Sub | Dub",
          link:"https://www.animeclick.it/anime/8974/re-zero-kara-hajimeru-isekai-seikatsu",
        },
        {
            index: 4,
            image: "spy x family cover.svg",
            title: "Spy X Family",
            Episodio: "Episodio 13",
            Sub: "Sub | Dub",
            link:"https://www.youtube.com/watch?v=lRQi4qp8aHI",
          },
          {
            index: 5,
            image: "licoris recoil.svg",
            title: "Licoris Recoil",
            Episodio: "Episodio 6",
            Sub: "Sub | Dub",
            link:"https://www.youtube.com/watch?v=lRQi4qp8aHI",
          },
      ];
    
      const secondSet = [
        {
            index: 1,
          image: "ShangriLaFrontier.svg",
          title: "Shangri La Frontier",
          Episodio: "Episodio 21",
          Sub: "Sub | Dub",
          link:"https://www.youtube.com/watch?v=lRQi4qp8aHI",
        },
        {
            index: 2,
          image: "https://via.placeholder.com/150/0000FF",
          title: "Set 2 - Card 2",
          Episodio: "Episodio 11",
          Sub: "Sub | Dub",
          link:"https://www.youtube.com/watch?v=lRQi4qp8aHI",
        },
        {
            index: 3,
          image: "https://via.placeholder.com/150/0000FF",
          title: "Set 2 - Card 3",
          Episodio: "Episodio 10",
          Sub: "Sub | Dub",
          link:"https://www.youtube.com/watch?v=lRQi4qp8aHI",
        },
        {
          index: 4,
        image: "ShangriLaFrontier.svg",
        title: "Set 2 - Card 1",
        Episodio: "Episodio 3",
        Sub: "Sub | Dub",
        link:"https://www.youtube.com/watch?v=lRQi4qp8aHI",
      },
      {
          index: 5,
        image: "https://via.placeholder.com/150/0000FF",
        title: "Set 2 - Card 2",
        Episodio: "Episodio 1",
        Sub: "Sub | Dub",
        link:"https://www.youtube.com/watch?v=lRQi4qp8aHI",
      },
      {
          index: 6,
        image: "https://via.placeholder.com/150/0000FF",
        title: "Set 2 - Card 3",
        Episodio: "Episodio 21",
        Sub: "Sub | Dub",
        link:"https://www.youtube.com/watch?v=lRQi4qp8aHI",
      },
      {
        index: 7,
      image: "ShangriLaFrontier.svg",
      title: "Set 2 - Card 1",
      Episodio: "Episodio 7",
      Sub: "Sub | Dub",
      link:"https://www.youtube.com/watch?v=lRQi4qp8aHI",
    },
    {
        index: 8,
      image: "https://via.placeholder.com/150/0000FF",
      title: "Set 2 - Card 2",
      Episodio: "Episodio 16",
      Sub: "Sub | Dub",
      link:"https://www.youtube.com/watch?v=lRQi4qp8aHI",
    },
    {
        index: 9,
      image: "https://via.placeholder.com/150/0000FF",
      title: "Set 2 - Card 3",
      Episodio: "Episodio 18",
      Sub: "Sub | Dub",
      link:"https://www.youtube.com/watch?v=lRQi4qp8aHI",
    },
        
    ];

    const [HoverButton, SetHoverButton]=useState<boolean>(false)

    // Stato per tenere traccia del set attivo
    const [isFirstSet, setIsFirstSet] = useState(true);
    
    // Alterna il set attivo
    const handleSwitch = () => {
      setIsFirstSet(prevFirstSet => !prevFirstSet);
      };
    
    // Dati correnti basati sullo stato
    const currentData = isFirstSet ? firstSet : secondSet;
      
    return(
           
    <>

      <div className="w-[100%] top-0 left-0 grid grid-cols-1 absolute">
        <div className="relative">
          <div className=" fixed z-50  left-0 top-0 w-[100%] sm:h-[70px] h-[48px] rounded-br-full rounded-bl-full"><Navbar></Navbar></div>
            <div className="w-[100%] absolute left-0 top-0 border-b-transparent transition-all duration-300"> <Test></Test>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/5 to-transparent opacity-100 max-[500px]:hidden"></div>
            <div className="absolute max-[500px]:h-[155%] inset-0 bg-gradient-to-t from-black max-[500px]:via-black/30 via-black/5 t to-transparent opacity-100"></div>           
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-zinc-800 rounded-tl-[120px] rounded-bl-[120px] xl:mt-[250px] 2xl:mt-[550px] mt-[40%] pt-10 absolute right-0 w-[100%]">
        <h1 className="xl:text-4xl text-3xl font-bold text-left xl:ml-[5%] ml-[20%] py-6">Nuovi episodi</h1>
        <h1 className="xl:text-2xl text-2xl font-bold text-left xl:ml-[5%] ml-[20%] max-[500px]:mt-28 py-6">Oggi</h1>

        <div
          onClick={handleSwitch}
          className={` bg-transparent-500 border-[3px] cursor-pointer xl:mt-[-65px] xl:h-11 xl:mr-[5%] border-orange-700 2xl:w-44 2xl:h-11 w-40 h-8 right-0 absolute 2xl:mr-56 max-[500px]:left-[20%] mt-[-35%] 2xl:mt-[-7.5%] text-white rounded-full shadow-md  transition bg-black`}>
          <div className={`2xl:h-8 2xl:w-24 h-5 w-20  mt-[3px] ml-[-2px] rounded-full  xl:h-8  bg-orange-700 border-[3px] border-orange-700  transition-all duration-300 ${isFirstSet ? "translate-x-[5px]" : "translate-x-[73px] xl:bg-transparent"}`}>
            <span className={`${isFirstSet ? "visible" : "hidden"}  max-[500px]:absolute max-[500px]:text-[15px] max-[500px]:mt-[-4%] max-[500px]:ml-[-32px] text-black font-bold`}>Premium</span>
            <span className={`${isFirstSet ? "hidden" : "visible"} max-[500px]:absolute max-[500px]:text-[15px] max-[500px]:mt-[-4%] max-[500px]:ml-[-14px]  font-bold max-[500px]:text-black text-white `}>Free</span>
          </div> 
        </div>
        
        <a className="text-white hover:text-white" href="https://www.crunchyroll.com/it/simulcastcalendar"><button className="xl:mt-[-65px] max-[500px]:left-[5%] mt-[-200px] bg-black rounded-full focus:outline-none active:border-orange-700
        border-orange-700 border-[3px] max-[550px]:ml-[15%] xl:ml-[10%] max-[550px]:w-28 h-8 2xl:mt-[-7.5%] xl:hover:bg-orange-700 hover:transition-colors hover:duration-[600ms] overflow-hidden z-0  xl:h-11 hover:border-orange-700 absolute 2xl:h-11" 
          onMouseLeave={()=> SetHoverButton(false)} onMouseEnter={()=> SetHoverButton(true)}><span className="z-20 relative xl:top-[-3px]  top-[-11px] max-[550px]:text-[13px] font-semibold">Calendario dell'uscite</span>
          <div className={`bg-orange-700 z-10 w-[130%] ml-[-280px] transition-all duration-300 h-11 mt-[-35px] ${HoverButton?"translate-x-[120%]":"translate-x-0"}`}></div></button>
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 p-20">
          {currentData.map((card) => (
            <div key={card.index} className="hover:bg-zinc-600 border-[4px] border-zinc-600 rounded-[40px] h-[320px] overflow-hidden ">
              <a className="text-white hover:text-white" href={card.link}>
                <img src={card.image} alt="" className="w-full h-40 object-cover" />
                <div className="p-4 grid-cols-2 grid">
                  <h3 className="text-xl text-left font-bold mb-2 col-span-3">{card.title}</h3>
                  <p className="text-white text-left pt-[40px]">{card.Episodio}</p>
                  <p className="text-white text-left pt-[40px]">{card.Sub}</p>
              </div>
              </a>   
            </div>
          ))}  
        </div>

        <h1 className="xl:text-2xl text-2xl font-bold text-left xl:ml-[5%] ml-[20%] py-6">Ieri</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 p-20">
          {currentData.map((card) => (
            <div key={card.index} className="hover:bg-zinc-600 border-[4px] border-zinc-600 rounded-[40px] h-[310px] overflow-hidden ">
              <a className="text-white hover:text-white" href={card.link}>
                <img src={card.image} alt="" className="w-full h-40 object-cover" />
                <div className="p-4 grid-cols-2 grid">
                  <h3 className="text-xl text-left font-bold mb-2 col-span-3">{card.title}</h3>
                  <p className="text-white text-left pt-[40px]">{card.Episodio}</p>
                  <p className="text-white text-left pt-[40px]">{card.Sub}</p>
                </div>
              </a>  
            </div>
          ))}
          
        <span className="z-40 relative xl:top-[500px]  2xl:ml-[-80px] top-[-11px] max-[550px]:text-[20px] xl:ml-[-535px] ml-[-2px] max-[550px]:mt-[100px]  2xl:text-4xl xl:text-3xl font-semibold text-white xl:w-[700px]">Per altro vedi il </span>
        <div className="cursor-pointer"><span className="z-40 relative xl:top-[500px]  2xl:ml-[-80px] xl:ml-[-660px]  top-[-65px] text-[20px]  2xl:text-4xl xl:text-3xl   font-semibold text-orange-600 w-[700px]">calendario dell'uscite</span></div>
        </div>
        
        
        <div className="2xl:translate-y-[2500px] xl:translate-y-[1900px] translate-y-[950px] "><Carousel_Anime_stagionali></Carousel_Anime_stagionali></div>
        <div className="2xl:translate-y-[3200px] xl:translate-y-[2400px] translate-y-[1400px]"><Carousel_Anime_Famosi></Carousel_Anime_Famosi></div>
        <div className="2xl:translate-y-[3900px] xl:translate-y-[2900px] translate-y-[1800px]"><Carousel_Anime_Old></Carousel_Anime_Old></div>
        <div className="2xl:translate-y-[4600px] xl:translate-y-[3400px] translate-y-[2200px]"><Carousel_Anime_Remake></Carousel_Anime_Remake></div>
        <div className="2xl:translate-y-[5300px] xl:translate-y-[3900px] translate-y-[2600px]"><Carousel_Anime_Poco_Conosciuti></Carousel_Anime_Poco_Conosciuti></div> 
        <div className="2xl:translate-y-[4000px] xl:translate-y-[3000px] translate-y-[2500px]"><Footer></Footer></div> 
      
      </div>

    </>
  )
}
export default Home