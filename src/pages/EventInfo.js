import React from "react";

const events = [
  {
    name: "Architectural Design",
    description: "Create a set of architectural drawings for a design project. Competitors must demonstrate design, construction, and technical aspects.",
    portfolioRequired: true,
    earlySubmission: true,
  },
  {
    name: "Animatronics",
    description: "Design and build an animatronic device that is able to perform specific tasks.",
    portfolioRequired: true,
    earlySubmission: false,
  },
  {
    name: "Code of Conduct",
    description: "Understand and apply the TSA Code of Conduct in various scenarios to demonstrate knowledge and ethical decision-making.",
    portfolioRequired: false,
    earlySubmission: false,
  },
  {
    name: "Digital Video Production",
    description: "Produce a short digital video on a designated theme, demonstrating skills in video creation, editing, and production.",
    portfolioRequired: true,
    earlySubmission: true,
  },
  {
    name: "Dragster Design",
    description: "Design and build a CO2-powered dragster, testing the aerodynamics and speed of the final product.",
    portfolioRequired: true,
    earlySubmission: false,
  },
  {
    name: "Engineering Design",
    description: "Design and test an engineering solution to a problem using technical knowledge and teamwork.",
    portfolioRequired: true,
    earlySubmission: true,
  },
  {
    name: "Essay on Technology",
    description: "Write an essay that discusses the impact of technology on society and its ethical implications.",
    portfolioRequired: false,
    earlySubmission: false,
  },
  {
    name: "Flight",
    description: "Design and build a model airplane to perform specific flight tasks, testing its flight duration and stability.",
    portfolioRequired: true,
    earlySubmission: false,
  },
  {
    name: "Forensic Science",
    description: "Use scientific methods to analyze evidence and solve a mock crime investigation scenario.",
    portfolioRequired: true,
    earlySubmission: false,
  },
  {
    name: "Fashion Design",
    description: "Create a garment or fashion accessory that demonstrates creativity and technical skills in design and construction.",
    portfolioRequired: true,
    earlySubmission: true,
  },
  {
    name: "Mobile App Development",
    description: "Design and develop a mobile app that addresses a specific problem or need, demonstrating coding and user-interface design skills.",
    portfolioRequired: true,
    earlySubmission: true,
  },
  {
    name: "Music Production",
    description: "Create an original piece of music, utilizing digital music production software and techniques.",
    portfolioRequired: true,
    earlySubmission: false,
  },
  {
    name: "Problem Solving",
    description: "Solve complex problems using engineering design processes, mathematical reasoning, and technical knowledge.",
    portfolioRequired: false,
    earlySubmission: false,
  },
  {
    name: "Software Development",
    description: "Develop software or a program based on given specifications, testing its functionality and code quality.",
    portfolioRequired: true,
    earlySubmission: true,
  },
  {
    name: "System Control Technology",
    description: "Design and build a system to control a specified mechanical process or function, showcasing programming and automation skills.",
    portfolioRequired: true,
    earlySubmission: false,
  },
  {
    name: "Technical Sketching and Application",
    description: "Create technical sketches and diagrams of objects or machines, applying engineering design standards and practices.",
    portfolioRequired: true,
    earlySubmission: false,
  },
  {
    name: "TSA Website Design",
    description: "Design and develop a website for a specific purpose, demonstrating knowledge of web design principles and coding skills.",
    portfolioRequired: true,
    earlySubmission: true,
  },
  {
    name: "VEX Robotics",
    description: "Design and program a robot to compete in a VEX Robotics competition, performing specific tasks and maneuvers.",
    portfolioRequired: true,
    earlySubmission: false,
  },
  {
    name: "Webmaster",
    description: "Design and develop a website based on a given theme, demonstrating knowledge of HTML, CSS, and JavaScript.",
    portfolioRequired: true,
    earlySubmission: true,
  },
  {
    name: "3D Visualization and Animation",
    description: "Design and create a 3D animation or model that demonstrates understanding of technical and artistic principles.",
    portfolioRequired: true,
    earlySubmission: true,
  },
  {
    name: "Biotechnology Design",
    description: "Design a solution to a problem related to biotechnology, including experiments and demonstrations of its applications.",
    portfolioRequired: true,
    earlySubmission: false,
  },
  {
    name: "CNC Milling",
    description: "Program and operate a CNC milling machine to manufacture a product based on given specifications.",
    portfolioRequired: true,
    earlySubmission: false,
  },
  {
    name: "Drone Technology",
    description: "Design, build, and program a drone to perform specific tasks, such as capturing images or navigating through an obstacle course.",
    portfolioRequired: true,
    earlySubmission: true,
  },
  {
    name: "Engineering Problem Solving",
    description: "Solve an engineering problem using critical thinking and technical expertise in a timed competition.",
    portfolioRequired: false,
    earlySubmission: false,
  },
  {
    name: "Graphic Design",
    description: "Create a graphic design piece that demonstrates creativity and proficiency in digital design tools.",
    portfolioRequired: true,
    earlySubmission: true,
  },
  {
    name: "Hydraulic Engineering",
    description: "Design and build a hydraulic-powered mechanism, applying principles of fluid dynamics and engineering.",
    portfolioRequired: true,
    earlySubmission: false,
  },
  {
    name: "Journalism",
    description: "Create a written article, video, or multimedia story that adheres to journalistic standards and covers a specific theme.",
    portfolioRequired: false,
    earlySubmission: false,
  },
  {
    name: "Life Science",
    description: "Demonstrate an understanding of biological processes and the application of scientific methods in life sciences.",
    portfolioRequired: true,
    earlySubmission: false,
  },
  {
    name: "Mechanical Engineering",
    description: "Design and build a mechanical device to solve a problem using engineering principles and materials.",
    portfolioRequired: true,
    earlySubmission: true,
  },
  {
    name: "Robotics Challenge",
    description: "Design, build, and program a robot to compete in a specific task or challenge.",
    portfolioRequired: true,
    earlySubmission: false,
  },
  {
    name: "Structural Design and Engineering",
    description: "Design and build a structure that meets specific strength and stability criteria, demonstrating knowledge of engineering principles.",
    portfolioRequired: true,
    earlySubmission: true,
  },
  {
    name: "Technology Bowl",
    description: "Participate in a quiz competition testing knowledge of technology concepts, history, and applications.",
    portfolioRequired: false,
    earlySubmission: false,
  },
  {
    name: "Video Game Design",
    description: "Design and develop a video game based on given specifications, demonstrating knowledge of game mechanics and coding skills.",
    portfolioRequired: true,
    earlySubmission: true,
  },
  {
    name: "Virtual Reality Design",
    description: "Create a virtual reality experience or simulation, demonstrating knowledge of VR development and design principles.",
    portfolioRequired: true,
    earlySubmission: true,
  },
];

const EventInfo = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">TSA Event Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-blue-100 p-4 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold">{event.name}</h3>
            <p className="text-gray-700 mt-2">{event.description}</p>
            <p className="mt-2">
              <strong>Portfolio Required: </strong>
              {event.portfolioRequired ? "Yes" : "No"}
            </p>
            <p className="mt-2">
              <strong>Early Submission: </strong>
              {event.earlySubmission ? "Yes" : "No"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventInfo;