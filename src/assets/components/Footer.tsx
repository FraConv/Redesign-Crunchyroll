function Footer (){

  const footer = [
        
    {
      title: "Naviga",
      Detagli :  [
        { name:"Popolari", },
        { name:"Simulcast", },
        { name:"Calendario delle uscite", },
        { name:"Notizie", },
        { name:"Store", },
        { name:"Games", },
      ]
    },
    {
      title: "Seguici sui social",
      Detagli :  [
        { name:"Youtube", },
        { name:"Facebook", },
        { name:"X", },
        { name:"Instagram", },
        { name:"Youtube", },
        { name:"TikTok", },
      ]
    },
    {
      title: "Crunchyroll",
      Detagli :  [
        { name:"Su", },
        { name:"FAQ", },
        { name:"Termini di Utilizzo", },
        { name:"Informativa sulla Privacy", },
        { name:"Impostazioni dei cookie", },
        { name:"Stampa", },
        { name:"Scarica le app", },
        { name:"Usa una Gift Card", },
        { name:"Lavora con noi", },
      ]
    },
    {
      title: "Account",
      Detagli :  [
        { name:"Cambia profilo", },
        { name:"I miei video", },
        { name:"Crunchylist", },
        { name:"Cronologia", },
        { name:"Il mio account", },
        { name:"Esci", },
      ]
    },
  ]

  return(
     <>
        
      <div className=" xl:w-96  flex-col justify-center items-center flex xl:ml-[39%] ml-[1%]" >
        <img className="xl:scale-50 scale-[35%]" src="fantasmino roll.svg" alt="" />
        <span className="text-center xl:text-[20px] text-[17px]  p-5 xl:mt-[-80px mt-[-110px] ">Stai cercando altro da guardare? Dai un'occhiata a tutto il nostro catalogo</span>
        <button className="rounded-full bg bg-orange-700 mt-5 focus:outline-none active:border-orange-700 hover:border-orange-700 hover:scale-105 transition-all duration-200"><span className="text-black font-bold">VEDI TUTTO</span></button>
      </div>
              
      <div className=" grid xl:grid-cols-4 grid-cols-1 absolute gap-16 2xl:gap-0 xl:gap-64 left-0 w-[100%] xl:h-[650px] h-[1100px] p-20 mt-40 xl:pl-[150px] pl-[50px] pr-72 bg-[#284452] bg-gradient-to-b from-black max-[500px]:via-black/1000">
        {footer.map((section, index) => (
          <div key={index}>
            <span className="font-semibold xl:text-[19px] xl:ml-[-8px] absolute text-[15px] text-left  text-zinc-400">{section.title}</span>
            {section.Detagli.map((Detagli, idx) => (
              <li className="text-transparent" key={idx}>
                <span className="font-semibold xl:text-[19px] absolute xl:ml-[-0.5%] ml-[-2.5%]  pt-9 text-[15px] text-left text-white">{Detagli.name}</span>
              </li> ))}
          </div>
        ))}
      </div>  
            
    </>
  )
}
export default Footer