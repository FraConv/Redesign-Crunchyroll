
import Footer_Cerca from "./Footer_Cerca";
import Navbar_Cerca from "./Navbar_Cerca";
import { useState } from "react";

interface Anime {
    id:number;
    title:string;
    img:string;
    SubeEp:string;
}

function Cerca(){

    const AnimeList: Anime[]=[
        {
            id: 1,
            title:"Black Clover",
            img:"black clover mobile.svg",
            SubeEp:"Sub | Dub • Stagioni: 2 Episodi: 200",
        },
        {
            id: 2,
            title:"Frieren",
            img:"frieren mobile.svg",
            SubeEp:"Sub | Dub • Stagioni: 2 Episodi: 200",
        },
        {
            id: 3,
            title:"Shangri La Frontier",
            img:"ShangriLaFrontier mobile.svg",
            SubeEp:"Sub | Dub • Stagioni: 2 Episodi: 200",
        },
        {
            id: 4,
            title:"Tower Of God",
            img:"tower-of-god-cover mobile.svg",
            SubeEp:"Sub | Dub • Stagioni: 2 Episodi: 200",
        },
      {
        id: 5,
        title:"Licoris Recoil",
        img:"Licoris Recoil mobile.svg",
        SubeEp:"Sub | Dub • Stagioni: 2 Episodi: 200",
    },
    {
      id: 6,
      title:"Steins Gate",
      img:"Steins Gate mobile.svg",
      SubeEp:"Sub | Dub • Stagioni: 2 Episodi: 200",
  },
  {
    id: 7,
    title:"Take Op Destiny",
    img:"takt op destiny mobile.svg",
    SubeEp:"Sub | Dub • Stagioni: 2 Episodi: 200",
},
{
  id: 8,
  title:"Erased",
  img:"Erased mobile.svg",
  SubeEp:"Sub | Dub • Stagioni: 2 Episodi: 200",
},
    ] ;

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [results, setResults] = useState<Anime[]>([]); 

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
    
        if (value.trim() === "") {
          setResults([]);
          return;
        }
    
        const filteredResults = AnimeList.filter((anime) =>
          anime.title.toLowerCase().includes(value)
        );
        setResults(filteredResults);
      };

    return(

        <>
        
            <Navbar_Cerca></Navbar_Cerca>

<div className="h-[1000px]"></div>

            <input className="w-[850px] max-[500px]:w-[100%]  h-14 rounded-full pl-6 flex justify-center items-center border-[3px] mt-[-800px] border-orange-600 focus:outline-none 
            active:border-orange-700 text-[23px] " 
            type="text"  placeholder="Cerca..." value={searchTerm}
            onChange={handleSearch}/>
            
          {results.length > 0 && (
            <div className="absolute mt-5 z-10 bg-[#284452] text-black rounded-lg shadow-lg xl:w-[45%] w-[80%]  max-h-[600px] overflow-y-auto">
              {results.map((anime) => (
                <div
                  key={anime.id}
                  className="flex items-center p-2 hover:bg-[#436d83] cursor-pointer"
                >
                  <img
                    src={anime.img}
                    alt={anime.title}
                    className="xl:w-24 xl:h-24 w-16 h-16 rounded-md"
                  />
                  <div className="grid grid-cols-1">
                  <div className=" absolute ml-4 pt-5 xl:text-2xl max-[500px]:mt-[-5px] text-orange-400">{anime.title}</div>
                  <div className="ml-4 xl:pt-[75px] pt-[60px] xl:text-2xl max-[500px]:text-[11px] mt-[-10px] text-white">{anime.SubeEp}</div>
                  </div>
                </div>
              ))}
             
            </div>
            
          )}
            
            <div className="mt-[600px]"><Footer_Cerca></Footer_Cerca></div> 

        </>

    )

}

export default Cerca;