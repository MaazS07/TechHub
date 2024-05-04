import React from 'react';
import { Box, Flex, Heading, Text, Icon, Grid, GridItem } from '@chakra-ui/react';
import { AiFillCode, AiOutlineRocket, AiOutlineHeart, AiOutlineTool } from 'react-icons/ai';
import { RiDashboardLine, RiGitRepositoryLine, RiChat3Line, RiQuestionnaireLine, RiBookLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const HeroPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        bg="white"
        minHeight="100vh"
        py={20}
        color="green.500"
        textAlign="center"
      >
        <Heading  fontSize="8xl" color="green.800" 
          fontFamily="Italic" 
          fontWeight="bolder"
        mb={4}>
          TechHub
        </Heading>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Empowering your journey through technology
        </Text>
        <Flex justify="center" align="center" mb={8}>
          <Icon as={AiFillCode} boxSize={16} color="green.500" mx={4} />
          <Icon as={AiOutlineRocket} boxSize={16} color="green.500" mx={4} />
          <Icon as={AiOutlineHeart} boxSize={16} color="green.500" mx={4} />
          <Icon as={AiOutlineTool} boxSize={16} color="green.500" mx={4} />
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} justifyContent="center">
          <GridItem colSpan={1}>
            <Box p={6} boxShadow="lg" borderRadius="xl" bg="white">
              <Icon as={RiDashboardLine} boxSize={12} color="green.500" mb={4} />
              <Heading as="h3" fontSize="xl" mb={4}>GitDash</Heading>
              <Text fontSize="md">
                Manage your Git repositories with ease. GitDash provides comprehensive insights into your projects, helping you stay organized and productive. Track issues, monitor pull requests, and collaborate seamlessly.
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box p={6} boxShadow="lg" borderRadius="xl" bg="white">
              <Icon as={RiGitRepositoryLine} boxSize={12} color="green.500" mb={4} />
              <Heading as="h3" fontSize="xl" mb={4}>RepoT-Do's</Heading>
              <Text fontSize="md">
                Keep track of your repositories and tasks. RepoT-Do's simplifies project management by allowing you to organize your tasks within repositories. Stay on top of deadlines, assign tasks, and collaborate effortlessly.
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box p={6} boxShadow="lg" borderRadius="xl" bg="white">
              <Icon as={RiChat3Line} boxSize={12} color="green.500" mb={4} />
              <Heading as="h3" fontSize="xl" mb={4}>Chatbot</Heading>
              <Text fontSize="md">
                Engage with our intelligent chatbot for assistance. Our Chatbot is your personal assistant, available 24/7 to answer your questions, provide guidance, and offer support. Get instant responses and access to helpful resources.
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box p={6} boxShadow="lg" borderRadius="xl" bg="white">
              <Icon as={RiQuestionnaireLine} boxSize={12} color="green.500" mb={4} />
              <Heading as="h3" fontSize="xl" mb={4}>MentiQuiz</Heading>
              <Text fontSize="md">
                Participate in quizzes and enhance your knowledge. MentiQuiz offers a fun and interactive learning experience through quizzes on various topics. Test your knowledge, challenge your friends, and expand your horizons.
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box p={6} boxShadow="lg" borderRadius="xl" bg="white">
              <Icon as={RiBookLine} boxSize={12} color="green.500" mb={4} />
              <Heading as="h3" fontSize="xl" mb={4}>Techtalk</Heading>
              <Text fontSize="md">
                Join tech talks and learn from experts. Techtalk is your gateway to insightful discussions, expert opinions, and industry insights. Stay updated with the latest trends, network with professionals, and grow your skills.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default HeroPage;
