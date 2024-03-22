import React, { useContext } from "react";
import { Box, Flex, Heading, Text, Image, Button, Link, UnorderedList, ListItem, Divider, IconButton, useColorMode } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
import { ColorModeContext } from "../main";

const projects = [
  {
    title: "Cryptocurrency Price Tracker",
    description: "Created a program capable of tracking the prices of cryptocurrency updated in live time utilizing Python & PyQt6. The program UI was created using QT Designer.",
    images: ["https://example.com/crypto1.jpg", "https://example.com/crypto2.jpg", "https://example.com/crypto3.jpg"],
  },
  {
    title: "Drone Simulation Model",
    description: ["Directed an advanced drone delivery simulation using State and Observer patterns to enhance realism by 30%.", "Enhanced both front-end and back-end development processes, achieving a 25% reduction in bug occurrence and a 20% improvement in UI responsiveness.", "Refined Agile project delivery with Jira, leading to a 40% boost in team productivity and a 15% reduction in release time."],
    images: ["https://example.com/drone1.jpg", "https://example.com/drone2.jpg", "https://example.com/drone3.jpg"],
  },
  {
    title: "Handwritten Digit Detector",
    description: ["Created a machine-learning model capable of identifying handwritten digits utilizing the open-source TensorFlow library and the MNIST dataset.", "The machine-learning model achieved an accuracy of 93 percent on average."],
    images: ["https://example.com/digit1.jpg", "https://example.com/digit2.jpg", "https://example.com/digit3.jpg"],
  },
  {
    title: "Publish Subscribe System (PubSub)",
    description: ["PubSub is a publish-subscribe system that allows clients to join, leave, subscribe, unsubscribe, publish and ping.", "The system is comprised of two components: the server and the client.", "The server is implemented using the Remote Procedure Call (RPC) library rpyc and manages a list of clients and articles.", "The client uses the rpyc library to connect to the server and allows the user to make requests.", "Articles are received by clients using a UDP socket and a receive thread is started to listen for incoming articles."],
    images: ["https://example.com/pubsub1.jpg", "https://example.com/pubsub2.jpg", "https://example.com/pubsub3.jpg"],
  },
  {
    title: "Tetris Variant",
    description: ["Implemented an animated Python GUI program to play a variant of the classic video game Tetris using the turtle library.", "Utilized object-oriented programming concepts to create classes that encapsulate the game's data and behavior.", "Customized the game's play area size and color, making the game adaptable to different screen sizes."],
    images: ["https://example.com/tetris1.jpg", "https://example.com/tetris2.jpg", "https://example.com/tetris3.jpg"],
  },
];

const Index = () => {
  const { colorMode, toggleColorMode } = useContext(ColorModeContext);

  return (
    <Box bg={colorMode === "light" ? "white" : "gray.800"} color={colorMode === "light" ? "black" : "white"}>
      {/* Navbar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg={colorMode === "light" ? "gray.100" : "gray.700"}>
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Adam Shahin
          </Heading>
        </Flex>

        <Box display={{ base: "block", md: "none" }}>{/* TODO: Add responsive menu */}</Box>

        <Box display={{ base: "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center" flexGrow={1}>
          <IconButton onClick={toggleColorMode} ml="auto" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} aria-label="Toggle color mode" />
          <Link href="#about" px={2} py={1}>
            About
          </Link>
          <Link href="#qualifications" px={2} py={1}>
            Qualifications
          </Link>
          <Link href="#projects" px={2} py={1}>
            Projects
          </Link>
          <Link href="#contact" px={2} py={1}>
            Contact
          </Link>
        </Box>
      </Flex>

      {/* About Section */}
      <Box id="about" p={4}>
        <Heading as="h2" size="xl" mb={4}>
          Hi, I'm Adam!
        </Heading>
        <Image src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTE0MzU2Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Adam Shahin" borderRadius="full" boxSize="200px" objectFit="cover" float="right" ml={4} />
        <Text fontSize="xl" mb={4}>
          I'm a Computer Science graduate from the University of Minnesota, Twin Cities, and I call the vibrant Minneapolis area my home. My journey in tech is fueled by a passion for creating innovative solutions and a love for working in fast-paced environments where I can contribute to projects with meaningful outcomes.
        </Text>
        <Text fontSize="xl" mb={4}>
          Outside of my academic pursuits in computer science, my life is a tapestry of varied and dynamic interests. From the disciplined focus of Brazilian Jiu-Jitsu and Kickboxing to the precision and thrill of ice fishing and snowmobiling in Minnesota's great outdoors, these activities endow me with persistence, strategy, and adaptability. My enthusiasm for cooking reflects my approach to software development: creative, innovative, and bold. These hobbies do more than just enrich my personal life; they also shape my professional approach, inspiring me to stay at the forefront of technology and trends.
        </Text>
        <Text fontSize="xl">My goal is to weave these diverse experiences into the fabric of my work, developing user-friendly applications and collaborating on cutting-edge projects to make a significant impact in the tech world.</Text>
      </Box>

      <Divider my={8} />

      {/* Qualifications Section */}
      <Box id="qualifications" p={4}>
        <Heading as="h2" size="xl" mb={4}>
          Qualifications
        </Heading>
        <Heading as="h3" size="lg" mb={2}>
          Education
        </Heading>
        <Text fontSize="xl" mb={2}>
          University of Minnesota, Twin Cities
        </Text>
        <Text fontSize="lg" mb={4}>
          Sept. 2020 - Dec. 2023
        </Text>
        <Text fontSize="lg" mb={2}>
          Bachelor of Arts, Computer Science
        </Text>
        <Text fontSize="lg" mb={4}>
          Relevant Coursework:
        </Text>
        <UnorderedList mb={4}>
          <ListItem>Advanced Programming Principles</ListItem>
          <ListItem>Algorithms and Data Structures</ListItem>
          <ListItem>Discrete Structures of Computer Science</ListItem>
          <ListItem>Introduction to Artificial Intelligence</ListItem>
          <ListItem>Intro to Distributed Systems</ListItem>
          <ListItem>Software Engineering I</ListItem>
        </UnorderedList>
        <Text fontSize="lg" mb={4}>
          Activities: CodeMetas, Muslim Student Association, Arab Student Union
        </Text>

        <Heading as="h3" size="lg" mb={2}>
          Experience
        </Heading>
        <Text fontSize="xl" mb={2}>
          Software Developer Intern
        </Text>
        <Text fontSize="lg" mb={2}>
          Cloudscape, Saint Paul, MN
        </Text>
        <Text fontSize="lg" mb={4}>
          May. 2023 – Aug. 2023
        </Text>
        <UnorderedList mb={4}>
          <ListItem>Contributed to refining machine learning models for handwritten detection.</ListItem>
          <ListItem>Improved data processing speed by 25% through optimization techniques.</ListItem>
          <ListItem>Conducted QA, pinpointing and resolving 20+ software discrepancies, contributing to high-quality solution delivery.</ListItem>
          <ListItem>Actively participated in bi-weekly code reviews, optimizing code practices.</ListItem>
        </UnorderedList>

        <Text fontSize="xl" mb={2}>
          Project Manager
        </Text>
        <Text fontSize="lg" mb={2}>
          CodeMetas, Minneapolis, MN
        </Text>
        <Text fontSize="lg" mb={4}>
          Sep. 2022 – Present
        </Text>
        <UnorderedList mb={4}>
          <ListItem>Managed a dynamic 6-member team through Jira utilizing Agile development methodologies, optimizing workflow and task prioritization, which contributed to a 20% increase in project execution speed.</ListItem>
          <ListItem>Leveraged SQL for efficient database management, implementing optimizations and queries that improved data retrieval times by 25%, enhancing overall system performance and user satisfaction.</ListItem>
          <ListItem>Conducted weekly stand-ups and strategic sessions, enhancing team unity and communication efficiency, achieving a 15% improvement in milestone delivery.</ListItem>
        </UnorderedList>
      </Box>

      <Divider my={8} />

      {/* Projects Section */}
      <Box id="projects" p={4}>
        <Heading as="h2" size="xl" mb={4}>
          Projects
        </Heading>
        {projects.map((project, index) => (
          <Box key={index} mb={8}>
            <Heading as="h3" size="lg" mb={2}>
              {project.title}
            </Heading>
            {Array.isArray(project.description) ? (
              <UnorderedList mt={4}>
                {project.description.map((item, itemIndex) => (
                  <ListItem key={itemIndex}>{item}</ListItem>
                ))}
              </UnorderedList>
            ) : (
              <Text fontSize="lg" mt={4}>
                {project.description}
              </Text>
            )}
            {Array.isArray(project.description) ? (
              <UnorderedList mt={4}>
                {project.description.map((item, itemIndex) => (
                  <ListItem key={itemIndex}>{item}</ListItem>
                ))}
              </UnorderedList>
            ) : (
              <Text fontSize="lg" mt={4}>
                {project.description}
              </Text>
            )}
            <Flex mt={4} overflowX="auto">
              {project.images.map((image, imageIndex) => (
                <Image key={imageIndex} src={image} alt={`${project.title} ${imageIndex + 1}`} mr={4} boxSize="200px" objectFit="cover" />
              ))}
            </Flex>
          </Box>
        ))}
      </Box>

      <Divider my={8} />

      {/* Contact Section */}
      <Box id="contact" p={4}>
        <Heading as="h2" size="xl" mb={4}>
          Let's Connect!
        </Heading>
        <Text fontSize="xl" mb={4}>
          Feel free to reach out to discuss any opportunities or just to say hi!
        </Text>
        <Button as={Link} href="mailto:adam.dawada@gmail.com" leftIcon={<FaEnvelope />} colorScheme="blue" mb={4}>
          Send Email
        </Button>
        <Text fontSize="xl" mb={4}>
          Or find me on...
        </Text>
        <Flex>
          <IconButton as={Link} href="https://www.linkedin.com/in/adamshahin" aria-label="LinkedIn" icon={<FaLinkedin />} colorScheme="blue" mr={2} />
          <IconButton as={Link} href="https://github.com/shahi068" aria-label="GitHub" icon={<FaGithub />} colorScheme="gray" />
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
