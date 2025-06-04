import { useState, useEffect} from "react"
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";



function Navbar(){

    const[VisibleInfo, SetVisibleInfo]=useState<boolean>(false);
    const[HamburgerMenu, SetHamburgerMenu]=useState<boolean>(true);

    const ClickIcon=()=>{
        SetHamburgerMenu(prevHamburgerMenu => !prevHamburgerMenu);
    }

    
    useEffect(() => {
        document.body.style.overflow = HamburgerMenu ? "auto" : "hidden";
    }, [HamburgerMenu]);

    return(
        <>

            <div className="grid grid-cols-5 bg-[#284452] w-[100%] absolute top-[-1px] left-0 h-[48px] rounded-br-full rounded-bl-full sm:h-[70px] z-30">
                <div className=" sm:w-[45%] sm:ml-[20%] sm:h-[30%] sm:mt-[3.5%]">
                <img className="2xl:mt-[-63%] max-[500px]:hidden xl:mt-[-56%] xl:scale-[115%] 2xl:scale-90" src="crunchyrollv2.svg" alt="" />
                        <img className="mt-[11%] ml-7 w-7 h-7 xl:hidden cursor-pointer" src="crunchyrollv2mobile.svg" alt="" />
                </div>

                <div className=" w-9 h-9 right-10 top-2 absolute xl:hidden" onClick={ClickIcon}>
                    <div className="w-8 mt-2.5 h-[2px] bg-white rounded-full "></div>
                    <div className="w-5 mt-2 h-[2px] bg-white rounded-full right-1 absolute"></div>
                </div>

              

                    <div className="grid grid-cols-5 absolute left-[18%] ">
                        <div className="hover:bg-[#436d83] max-[500px]:hidden p-[21px] h-[70px] cursor-pointer flex justify-center gap-1"><span className="">Esplora</span><ChevronDown/></div>
                        <a className="text-white hover:text-white max-[500px]:hidden" href="https://www.crunchyroll.com/it/games/"><div className="h-[70px] hover:bg-[#436d83] max-[500px]:hidden p-[21px] cursor-pointer"><span>Games</span></div></a>
                        <a className="text-white hover:text-white max-[500px]:hidden" href="https://store.crunchyroll.com/eu/nl/en?utm_source=web"><div className="h-[70px] hover:bg-[#436d83] max-[500px]:hidden p-[21px] cursor-pointer"><span>Store</span></div></a>
                        <div className="hover:bg-[#436d83] w-auto max-[500px]:hidden p-[21px] cursor-pointer flex justify-center gap-1"><span>Notizie</span><ChevronDown/></div>
                    </div>

                    <div className="grid grid-cols-4 absolute 2xl:left-[77%] xl:left-[75%] w-[20%]">
                        <a  href="https://www.crunchyroll.com/it/premium?referrer=newweb_organic_header&return_url=https%3A%2F%2Fwww.crunchyroll.com%2Fit%2F#plans"><div onMouseEnter={() => SetVisibleInfo(true)} onMouseLeave={() => SetVisibleInfo(false)}><div className="hover:bg-[#436d83] max-[500px]:hidden p-[21px] cursor-pointer 2xl:h-[70px] xl:h-[70px]"><img className="2xl:mt-[-6px] xl:mt-[5px] 2xl:scale-[75%] xl:scale-[160%]" src="premium.svg" alt=""  / ></div></div></a>
                       <div className="hover:bg-[#436d83] max-[500px]:mt-[-8px] max-[500px]:ml-[1150%]  max-[500px]:w-16 p-[21px] cursor-pointer 2xl:h-[70px] xl:h-[70px]"> <Link to="/search"><img className="2xl:scale-[48%] xl:mt-[5px] 2xl:mt-[-12px] xl:scale-[115%]" src="lente.svg" alt="" /></Link></div>
                        <div className="hover:bg-[#436d83] max-[500px]:hidden p-[21px] cursor-pointer 2xl:h-[70px] xl:h-[70px]"><img className="2xl:mt-[-27px] 2xl:scale-[30%] xl:scale-[75%]" src="salvati.svg" alt="" /></div>
                        <div className="hover:bg-[#436d83] max-[500px]:hidden p-[21px] cursor-pointer 2xl:h-[70px] xl:h-[70px]"><img className="2xl:mt-[-13px] xl:mt-[5px] 2xl:scale-[50%] xl:scale-[110%]" src="profilo.svg" alt="" /></div>
                    </div>
            </div>

            <div className={` w-[380px] h-[150px] absolute mt-[7%] right-48 bg-[#223a46] rounded-3xl  transition-all duration-500 ${VisibleInfo ? "translate-y-1" : "translate-y-[-210px]"}`}>
                <div className=" w-[150px] h-[50px] absolute mt-[8%] right-20 bg-[#223a46] rotate-45 rounded-tl-sm"></div>
                    <div className="absolute grid grid-rows-2 w-[100%]">
                        <div className=" h-[40px] pt-3"><span className=" text-[22px] text-orange-300">Prova gratuita di 7 giorni</span></div>
                        <div className=" mt-[-7%] p-3"><p className=" text-[16px] text-left">Il Premium consente l'accesso illimitato agli anime senza pubblicità e agli episodi poco dopo l'uscita in Giappone! Provalo subito!</p></div>
                    </div>
            </div>
            <div className={`fixed overflow-y-auto grid grid-cols-1 left-0 h-full w-[100%] gap-1 bg-[#132027] transition-all duration-700 ${HamburgerMenu?"translate-y-[-2000px]":"translate-y-0"}`}>
                <div className=" text-zinc-400 h-10 mt-[60px] w-[100%]">
                    <span className="left-0 pl-5 pt-1 absolute">Esplora</span>
                </div>
                <div className=" h-10 mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Popolari</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Novita</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Alfabetico</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Simulcast Season</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Calendario delle uscite</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Video musicali</span>
                </div>
                <div className=" h-10  mt-[-1px] text-zinc-400 w-[100%]">
                    <span className="left-0 pl-5 pt-1 absolute">Generi</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Azione</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Avventura</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Commedia</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Drammatico</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Fantasy</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Musicale</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Romantico</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Fantascienza</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Seinen</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Shojo</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Shonen</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Spaccato di vita</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Sport</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Soprannaturale</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Thriller</span>
                </div>
                <div className=" h-10  mt-[-1px] text-zinc-400 w-[100%]">
                    <span className="left-0 pl-5 pt-1 absolute">Notizie</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Tutte le news</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Anime Awards</span>
                </div>
                <div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-5 pl-5 pt-1 absolute">Eventi ed esperienze</span>
                </div>
                <a className="text-white hover:text-white" href="https://www.crunchyroll.com/it/games/"><div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-0 pl-5 pt-1 absolute">Games</span>
                </div></a>
                <a className="text-white hover:text-white" href="https://store.crunchyroll.com/eu/nl/en?utm_source=web"><div className=" h-10  mt-[-1px] w-[100%]">
                    <span className="left-0 pl-5 pt-1 absolute">Store</span>
                </div></a>
             
            </div>
        </>
    )

}

export default Navbar