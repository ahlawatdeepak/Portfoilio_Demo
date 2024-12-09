import React from "react";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src:"https://img.freepik.com/premium-photo/business-data-analysis-analytics-customers-insights-with-charts-abstract-blue-background-vector-illustration-generative-ai_438099-11790.jpg",
      link:"https://www.magnet.manufacanalytics.com/",
      name:"Manufac Magnet",
      tech:"Typescript | React | AWS Amplify | BigQuery | Terraform | Electron | GraphQL",
      repo:"/"
    },
    {
      id: 2,
      src:"https://media.istockphoto.com/id/2007210476/vector/clock-icon-on-transparent-background-stock-illustration.jpg?s=612x612&w=0&k=20&c=tBiKX5sqiVXBQy3eujrZyiMrzJZonUCTPFlnbuK58Ds=",
      link: 'https://clockifyy.netlify.app/',
      repo: 'https://github.com/Durgashankar001/clockify_clone',
      name:"Clone of Clockify",
      tech:'React |  Node Js | Chakra UI | Redux | MongoDB | Express Js | Nodemon'
    },
    {
      id: 3,
      src:"https://github.com/siddikgitt/accidental-marble-9532/raw/main/screenshots/landingPage.png" ,
      link: 'https://myfitnesspal-delta.vercel.app/',
      repo: 'https://github.com/siddikgitt/fitnesspal-clone',
      name:"Clone of myFitnessPal",
      tech:'React | Redux | Node Js | Express Js | MongoDB | Chakra UI'
    }
  ];

 

  return (
    <div 
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" >
        <div className="pb-8" style={{ marginTop:"120px"}}>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0" style={{marginBottom:"70px"}}>
          {portfolios.map(({ id, src, link, repo ,name ,tech}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg " >
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105 h-2/4 w-11/12 m-auto"
              />
               <div
               className="w-full m-auto p-[3%] text-center"
               >
                 <h5 className="m-2">{name}</h5>
              </div>
              <div
               className="w-full m-auto p-[2%] h-[15%] text-center"
               >
                 <p className="m-2 h-16">{tech}</p>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
