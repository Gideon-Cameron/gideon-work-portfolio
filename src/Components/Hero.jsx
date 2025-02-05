import profilePic from "../assets/profile.jpg"; // Placeholder image

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 bg-gray-100 dark:bg-gray-800">
      {/* Image Section */}
      <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600 shadow-lg">
        <img src={profilePic} alt="Profile picture" className="w-full h-full object-cover" />
      </div>

      {/* About Me Text */}
      <div className="md:ml-12 mt-6 md:mt-0 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Hello, I'm Gideon Cameron</h1>
        <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">
          I am a passionate frontend developer dedicated to building clean and functional web applications. 
          With experience in React, Tailwind CSS, and modern UI/UX principles, I strive to create seamless and engaging digital experiences.
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          I love solving problems, learning new technologies, and continuously improving my skills.
        </p>
        
      </div>
    </section>
  );
};

export default Hero;
