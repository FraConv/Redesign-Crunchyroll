import { useState, useEffect} from 'react';

function Test (){

  const [selectedBall, setSelectedBall] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);

  const ballColors: number[] = [0, 1, 2, 3, 4, 5];

  const AnimeDetal= [{
      img:"frieren.svg",
      imgmobile:"frieren mobile.svg",
      Titolo:"titolo 6.svg",
      Trama:"Frieren è una maga che fa parte della squadra di eroi che ha sconfitto il re dei demoni. Essendo un'elfa, per lei i dieci anni passati con gli altri eroi rappresentano soltanto un piccolo frammento della sua lunga vita...",
      Bottone:"Guarda S1 Ep 1"
    },
    {
      img:"ShangriLaFrontier.svg",
      imgmobile:"ShangriLaFrontier mobile.svg",
      Titolo:"titolo 1.svg",
      Trama:" Lo studente del secondo anno delle superiori Rakurou Hizutome è interessato ad una sola cosa: trovare nuovi giochi di merda e completarli. Le sue abilità come videogiocatore non sono seconde a nessuno, e dalla sua...",
      Bottone:"Guarda S1 Ep 1"
    },
    {
      img:"tower-of-god-cover.svg",
      imgmobile:"tower-of-god-cover mobile.svg",
      Titolo:"titolo 5.svg",
      Trama:"Raggiungi la vetta e tutto ti apparterrà. Nella cima della Torre esiste tutto ciò che c'è nel mondo e tutto ciò può essere tuo. Puoi diventare un Dio. Questa è la storia dell'inizio e della fine di Rachel, la ragazza che ha scalato la Torre...",
      Bottone:"Guarda S1 Ep 1"
    },
    {
      img:"black clover.svg",
      imgmobile:"black clover mobile.svg",
      Titolo:"titolo 2.svg",
      Trama:"Asta e Yuno sono stati abbandonati da neonati nello stesso giorno presso la stessa chiesa, e son da allora divenuti inseparabili. Fin da bambini si son promessi che avrebbero lottato con tutte le loro forze per poter diventare...",
      Bottone:"Guarda S1 Ep 1"
    },
    {
      img:"spy x family cover.svg",
      imgmobile:"spy x family mobile.svg",
      Titolo:"titolo 3.svg",
      Trama:"Twilight, una delle migliori spie al mondo, ha trascorso la vita ad affrontare missioni sotto copertura per rendere il mondo un posto migliore. Un giorno però riceve un compito particolarmente difficile, per riuscire nella...",
      Bottone:"Guarda S1 Ep 1"
    },
    {
      img:"licoris recoil.svg",
      imgmobile:"licoris recoil mobile.svg",
      Titolo:"titolo 4.svg",
      Trama:"In una Tokyo di un futuro prossimo, col fine di prevenire crimini e atti terroristici, agisce in segreto un'organizzazione governativa militare chiamata DA (Direct Attack) i cui agenti sono giovani ragazze orfane dette Lycoris...",
      Bottone:"Guarda S1 Ep 1"
    },
  ];

  let touchStartX = 0;
  let touchEndX = 0;

  const handleNext = (): void => {
    setIsFading(true);
    setTimeout(() => {
      setSelectedBall((prevIndex) => (prevIndex + 1) % AnimeDetal.length);
      setIsFading(false);
    }, 300);
  };

  const handlePrevious = (): void => {
    setIsFading(true);
    setTimeout(() => {
      setSelectedBall((prevIndex) => (prevIndex - 1 + AnimeDetal.length) % AnimeDetal.length);
      setIsFading(false);
    }, 300);
  };

  const handleBallClick = (index: number): void => {
    setIsFading(true);
    setTimeout(() => {
      setSelectedBall(index);
      setIsFading(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, );

  const handleTouchStart = (e: React.TouchEvent): void => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent): void => {
    touchEndX = e.changedTouches[0].clientX;

    if (touchStartX - touchEndX > 50) {
      handleNext(); // Swipe verso sinistra
    } else if (touchEndX - touchStartX > 50) {
      handlePrevious(); // Swipe verso destra
    }
  };

  return (
    <>
      
      <div className="flex flex-col items-center sm:mt-[790px] gap-5 pt-20" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {/* Contenitore delle palline */}
        <div className="flex justify-center gap-5 z-40 absolute left-0 w-[100%] mt-[90%] 2xl:mt-[-4.5%] xl:mt-[-25%]">
          {ballColors.map((index) => (
            <div
              key={index}
              className={`2xl:w-7 2xl:h-7 xl:w-5 xl:h-5 w-3 h-3 rounded-full cursor-pointer mt-[1%] transition-all duration-300 ${
                selectedBall === index ? `bg-orange-600` : "bg-gray-300"
              } ${
                selectedBall === index ? `2xl:w-[106px]` : "2xl:w-7"
              } ${
                selectedBall === index ? `w-[45px]` : "w-3"
              } ${
                selectedBall === index ? `xl:w-[85px]` : "xl:w-5"
              }`}
              onClick={() => handleBallClick(index)}>
            </div>
          ))}
        </div>

        {/* Contenitore delle palline per navigare */}
        <div className="sm:flex sm:gap-5 sm:mt-5  sm:pt-20 sm:z-40 max-[500px]:hidden ">
          <div className="sm:w-12 sm:h-20 rounded-full bg-black opacity-75  cursor-pointer transition-transform duration-300 absolute top-[40%] left-[2%] hover:scale-110 flex items-center justify-center"
            onClick={handlePrevious}>
            &#9664;
          </div>

          <div className="sm:w-12 sm:h-20 rounded-full  bg-black opacity-75 cursor-pointer transition-transform duration-300 hover:scale-110 absolute top-[40%] right-[2%] flex items-center justify-center" 
            onClick={handleNext}>
            &#9654;
          </div>
        </div>

        {/* Mostra l'immagine corrispondente */}
        
        <img
          src={AnimeDetal[selectedBall]?.img}
          alt={`${ballColors[selectedBall]}`}
          className={`absolute top-0 w-[100%] transition-all duration-300 max-[500px]:hidden sm:mt-[0%] ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        />

        <img
          src={AnimeDetal[selectedBall]?.imgmobile}
          alt={`${ballColors[selectedBall]}`}
          className={`absolute top-0 w-[100%] transition-all duration-300 xl:hidden sm:mt-[0%] ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        />

        <div className={`absolute top-[18%] xl:w-[50%] 2xl:w-[40%] w-[100%] h-[45%] sm:h-[60%] sm:ml-[0px] mt-[-5%] sm:mt-[-2%] transition-all duration-300 z-30 text-white left-0 ${
          isFading ? "opacity-0" : "opacity-100"}`}>
          <img className=' text-[30px] mt-[45%] w-[78%] pl-[20%] sm:mt-[10%] xl:ml-[-37px] 2xl:ml-[-5px] max-[500px]:ml-[1%] max-[500px]:scale-[110%]' src={AnimeDetal[selectedBall]?.Titolo}/>
          <p className='pl-36  xl:pl-24 xl:text-[17px] 2xl:text-[22px] 2xl:pl-[20%] p-14 text-left sm:text-[22px] text-[0px]'>{AnimeDetal[selectedBall].Trama}</p></div>
          <div className={` flex flex-cols-2 gap-20 justify-center sm:z-40 sm:ml-[-70%] sm:p-16 sm:mt-[-30%] mt-[60%] xl:mt-[-44%] xl:ml-[-65%] transition-all duration-100 
          ${isFading ? "opacity-0" : "opacity-100"}`}>
          <div className='  absolute  max-[500px]:ml-[-25%] 2xl:mt-[22%] sm:ml-[-9%] mt-10  z-20'><button className='2xl:w-[180px] xl:w-[160px] 2xl:ml-[-5px] hover:border-orange-600  rounded-full border-[3px] 
          border-orange-600 bg-orange-600 text-black w-[130px] xl:ml-[20px] max-[500px]:h-[35px] z-20 '><span className='font-bold max-[500px]:text-[13px] max-[500px]:absolute max-[500px]:mt-[-9px] max-[500px]:left-[14%]'>{AnimeDetal[selectedBall].Bottone}</span></button></div>
          <div className=' mt-10 z-20 absolute sm:ml-[12%] 2xl:mt-[22%] ml-[55%] xl:ml-[10%]'><button className='xl:w-[90px] 2xl:ml-[-5px] xl:ml-[90px]  max-[500px]:ml-[-80%] h-12 w-[60px] max-[500px]:h-[35px] hover:border-orange-600 rounded-full bg-black 
          border-orange-600 border-[3px] text-orange-600  z-20'><img className=' mt-[-7.5px] xl:mt-[-25px] scale-[82%] xl:scale-[42%]' src="Salvati.svg" alt="" /></button></div>
        </div>
      </div>

    </>
  );
};
export default Test;
