import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Select,
  Button,
  Text,
  Link,
  List,
  ListItem,
  Flex,
  Spinner
} from "@chakra-ui/react";
import { FaGithub, FaCode, FaSearch } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState("Frontend");
  const navigate = useNavigate();

  const domains = [
    "Frontend",
    "Backend",
    "Mobile",
    "Machine Learning",
    "Data Science",
    "Cybersecurity",
    "IoT",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=stars:>1+topic:${selectedDomain}&sort=stars&order=desc&per_page=50`
        );

        setRepositories(response.data.items);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedDomain]);

  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  const handleRepoSelect = async (repo) => {
    const confirmed = window.confirm(
      "Are you sure you want to select this repository?"
    );

    if (confirmed) {
      try {
        const repo_link = repo.html_url;
        localStorage.setItem("repo_link", repo_link);

        // Navigate to the appropriate route after selecting the repository
        navigate(`/room/${userD.roomId}`);
      } catch (error) {
        console.error("Error selecting repository:", error);
      }
    }
  };

  return (
    
    <Box p={4} bg="white" color="green.500">
        <Text fontSize="5xl" 
        color="green.800"
        mb={10}
        >RepoT-Do's</Text>
      <Flex align="center" mb={4}>
        <Text fontWeight="bold" fontSize:xl mr={2}>Domain:</Text>
        <Select
          value={selectedDomain}
          onChange={handleDomainChange}
          variant="filled"
          ml={2}
        >
          {domains.map((domain) => (
            <option key={domain} value={domain}>
              {domain}
            </option>
          ))}
        </Select>
        <Button ml={2} onClick={() => setLoading(true)} colorScheme="green">
          <FaSearch />
          <Text ml={2}>Search</Text>
        </Button>
      </Flex>

      {loading && <Spinner color="green.500" size="lg" />}
      {error && <Text color="red.500">Error: {error}</Text>}
      {!loading && !error && (
        <List
          display="flex"
          flexDirection="row"
          justifyContent="center"
          flexWrap="wrap"
        >
          {repositories.map((repo, index) => (
            <ListItem
              key={repo.id}
              width="300px"
              m={4}
              p={4}
              bg="white"
              borderRadius="lg"
              boxShadow="lg"
              textAlign="center"
              border=" 2px solid lightgreen"
            >
              <Heading size="md" mb={4}  fontWeight="bold" color="green.800">
                {repo.name}
              </Heading>
              <Text mb={4}>
                Owner: {repo.owner.login} | Stars: {repo.stargazers_count}
              </Text>
              <Text mb={4}>
                {repo.description || "No description available"}
              </Text>
              <Button
                mt={4}
                colorScheme="green"
                borderRadius="full"
                fontWeight="bold"
                bgGradient="linear(to-r, green.400, green.600)"
                _hover={{
                  bgGradient: "linear(to-r, green.500, green.700)",
                  boxShadow: "xl",
                  transform: "scale(1.05)",
                }}
                onClick={() => handleRepoSelect(repo)}
              >
                <Link href={repo.html_url} color="white" isExternal>
                  <Flex align="center">
                    <FaGithub />
                    <Text ml={2}>View Repository</Text>
                  </Flex>
                </Link>
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Repositories;
