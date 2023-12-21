import Our_Goals_Cards from "./sub_components/Our_Goals_Cards";

const Carddonation = ({goals}) => {
  return (
    <div id="donatecard" className="container mx-auto justify-center min-h-fit pt-24">
      <section className="">
        <div className="flex flex-col space-y-3 justify-center items-center">
          <h2 className=" text-5xl font-bold ">{goals.goalsfirstTitle}<span className='text-violet-700'>{goals.goalsspanFirstTitle}</span></h2>
          <p className=" text-gray-800 text-xl leading-relaxed">{goals.goalssubTitle}</p>
        </div>
          <Our_Goals_Cards imagePath="/pictures/donaters-pic.webp" title={goals.goalCardtitle} description={goals.goalCardcontent} buttonDonate={goals.goalCardbutton} currentAmount="25402" goalAmount ="30000"/>
      </section>
    </div>
  );
}
export default Carddonation;