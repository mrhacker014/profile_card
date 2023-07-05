import './App.css';
import logo from "./assets/images/ssl.jpg";

function App() {
  // const src ="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" ;
  // const src ="https://sslportfolio.netlify.app/images/HOMEIMG.jpg"
  return (
    <>
      <div className='h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500'>
        <div className='bg-cyan-500 rounded-lg p-9 pr-3 sm:pr-20 pl-3 sm:pl-20 flex flex-col items-center'>
        <div>
          <img src ={logo} alt='avatar' className='h-20 w-20 sm:h-28 sm:w-28 rounded-full ring-4 ring-green-600 ring-offset-4 ring-offset-white hover:scale-110 duration-150 cursor-pointer'/> 
        </div>
        <div className='font-semibold text-2xl sm:text-3xl mt-4 tracking-wide'>Mr. Hacker</div>
        <div className='font-semibold text-gray-500 tracking-tight sm:tracking-wide'>Web Developer</div>
        <div className='mt-4 hover:bg-pink-900 bg-pink-500 p-2 px-2 rounded-lg text-white w-72 sm:w-80 flex flex-col items-center tracking-wider'><a rel="noreferrer" href="https://www.instagram.com/mr._hacker_014/" target={"_blank"}>Instagram</a></div>
        <div className='mt-2 hover:bg-pink-900 bg-pink-500 p-2 px-2 rounded-lg text-white w-72 sm:w-80 flex flex-col items-center tracking-widest'><a rel="noreferrer" href="https://www.facebook.com/shubhransusekhar.lenka/" target={"_blank"}>Facebook</a></div>
        <div className='mt-2 hover:bg-pink-900 bg-pink-500 p-2 px-2 rounded-lg text-white w-72 sm:w-80 flex flex-col items-center tracking-widest'><a rel="noreferrer" href="https://github.com/mrhacker014" target={"_blank"}>GitHub</a></div>
        <div className='mt-2 hover:bg-pink-900 bg-pink-500 p-2 px-2 rounded-lg text-white w-72 sm:w-80 flex flex-col items-center tracking-widest'><a rel="noreferrer" href="https://www.linkedin.com/in/shubhranshu-sekhar-lenka-b64841231/" target={"_blank"}>Linkedin</a></div>
        </div>
      </div>

    </>
  );
}

export default App;
