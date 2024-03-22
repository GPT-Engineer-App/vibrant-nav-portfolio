import { Box, Heading, Text, UnorderedList, ListItem, Flex } from "@chakra-ui/react";

export default function Index() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
    },
    {
      title: "Project 2",
      description: ["Point 1 about Project 2", "Point 2 about Project 2"],
    },
  ];

  const ProjectCarousel = ({ projects }) => (
    <Flex overflowX="auto" p={4}>
      {projects.map((project, index) => (
        <Box key={index} borderWidth={1} borderRadius="lg" p={4} minW="300px" mr={4}>
          <Heading as="h3" size="lg" mb={2}>
            {project.title}
          </Heading>
          {Array.isArray(project.description) ? (
            <UnorderedList>
              {project.description.map((item, itemIndex) => (
                <ListItem key={itemIndex}>{item}</ListItem>
              ))}
            </UnorderedList>
          ) : (
            <Text fontSize="lg">{project.description}</Text>
          )}
        </Box>
      ))}
    </Flex>
  );

  return (
    <Box>
      <Heading as="h1" size="xl" mb={8}>
        My Portfolio
      </Heading>
      <Heading as="h2" size="lg" mb={4}>
        Projects
      </Heading>
      <ProjectCarousel projects={projects} />
    </Box>
  );
}
