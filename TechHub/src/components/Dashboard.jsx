// Dashboard.js
import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Heading,
  Input,
  Button,
  Avatar,
  Text,
  VStack,
  HStack,
  Spinner,
  Flex,
  Link,
} from '@chakra-ui/react';
import { FaGithub, FaMapMarkerAlt, FaEnvelope, FaUsers, FaUserFriends, FaBook, FaStar, FaCodeBranch } from 'react-icons/fa';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const userResponse = await axios.get(`http://localhost:5000/github/${username}`);
      setUserData(userResponse.data);

      const repoResponse = await axios.get(`http://localhost:5000/github/${username}/repos`);
      setRepoData(repoResponse.data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <Box bg="white" color="black" minHeight="100vh">
      <Container maxW="container.md" py={8}>
      <Text fontSize="5xl" 
        color="green.800"
        mb={10}
        >GitDash</Text>
        <Box mb={6} textAlign="center" display="flex" alignItems="center" justifyContent="center">
  <Input
    placeholder="Enter GitHub username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    variant="filled"
    size="lg"
    flex="1"
    mr={4}
  />
  <Button
    leftIcon={<FaGithub />}
    onClick={handleFetchData}
    isLoading={loading}
    loadingText="Fetching Data"
    size="lg"
    bgGradient="linear(to-r, green.400, green.600)"
                _hover={{
                  bgGradient: "linear(to-r, green.500, green.700)",
                  boxShadow: "xl",
                  transform: "scale(1.05)",
                }}
    borderRadius="10%"
  >

  </Button>
</Box>
        {error && (
          <Box color="red" textAlign="center" fontSize="lg" mb={6}>
            {error}
          </Box>
        )}
      

{loading && (
  <Flex justify="center" align="center" h="100vh">
    <Spinner size="xl" color="green" />
  </Flex>
)}



{userData && (
  <Flex justify="center" gap={8} alignItems="center" flexDirection={{ base: 'column', md: 'row' }} mb={8} maxWidth="800px">
    <Avatar src={userData.avatar_url} name={userData.name} size="1" />
    <VStack align={{ base: 'center', md: 'flex-start' }} fontSize="lg" textAlign={{ base: 'center', md: 'left' }} ml={{ base: 0, md: 4 }}>
      <Text fontSize="3xl" fontWeight="bold">{userData.name}</Text>
      <Text fontSize="2xl">@{userData.login}</Text>
      <Text><FaMapMarkerAlt /> {userData.location || 'Not specified'}</Text>
      <Text><FaEnvelope /> {userData.email || 'Not available'}</Text>
      <Text><FaUsers /> Followers: {userData.followers} | Following: {userData.following}</Text>
      <Text><FaBook /> Public Repos: {userData.public_repos}</Text>
    </VStack>
  </Flex>
)}




        
        <VStack spacing={4}>
        {/* <Heading as="h2" size="xl" mb={4} textAlign="center">Repositories</Heading> */}
          {repoData.map(repo => (
            
            <Box
              key={repo.id}
              p={4}
              borderRadius="md"
              bg="rgba(255, 255, 255, 0.1)"
              textAlign="left"
              width="100%"
              boxShadow="md"
            >
              <Heading as="h1" size="2xl" mb={2}>{repo.name}</Heading>
              <Text fontSize="2xl">{repo.description || 'No description available'}</Text>
              <HStack spacing={4} mt={2} height="20vh">
                <Flex align="center">
                  <FaStar /> <Text ml={3} fontSize="xl">{repo.stargazers_count}</Text>
                </Flex>
                <Flex align="center">
                  <FaCodeBranch /> <Text fontSize="xl" ml={3}>{repo.forks}</Text>
                </Flex>
                <Button
                  as={Link}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  bgGradient="linear(to-r, green.400, green.600)"
                _hover={{
                  bgGradient: "linear(to-r, green.500, green.700)",
                  boxShadow: "xl",
                  transform: "scale(1.05)",
                }}
                >
                  View Repo
                </Button>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Dashboard;
