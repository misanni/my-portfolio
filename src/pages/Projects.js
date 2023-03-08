import React from 'react';
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import basketball from './images/basketball.png';
import cake from './images/cake.png';
import car from './images/car.png';
import des1 from './images/des1.png';

const Projects = () => {
   const ProjectList = [{
    id:1,
    name: "Pokemon App",
    imageUrl: basketball
   },
   {
    id:1,
    name: "Pokemon App",
    imageUrl: cake
   },
   {
    id:1,
    name: "Pokemon App",
    imageUrl: car
   },
   {
    id:1,
    name: "Pokemon App",
    imageUrl: des1
   }

];
return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {ProjectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.id}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
