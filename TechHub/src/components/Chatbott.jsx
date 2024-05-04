import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  Box,
  Input,
  Button,
  Text,
  Flex,
  Heading,
  Stack,
  Grid,
  GridItem,
  Icon,
  Avatar,
  Container,
  CircularProgress,
} from "@chakra-ui/react";
import { FaRobot, FaCode } from "react-icons/fa";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const Chatbott = () => {
  const [search, setSearch] = useState("");
  const [aiResponse, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChatRunning, setChatRunning] = useState(true);

  const genAI = new GoogleGenerativeAI('AIzaSyDJwOdBrFoCowS1KlB0OPkevOxHW4q7-Kw');
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleUserInput();
    }
  };

  async function aiRun() {
    setLoading(true);
    const prompt = ` ${search} `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setResponse(text);
    setLoading(false);
  }

  const handleUserInput = () => {
    const cleanedInput = search.replace(/[^a-zA-Z0-9\s]/g, "");
    if (cleanedInput.toLowerCase() === "exit") {
      setChatRunning(false);
      setResponse("Chat bot stopped. Enter 'exit' to restart.");
    } else {
      if (checkForCodeKeywords(cleanedInput)) {
        aiRun();
      } else {
        setResponse(
          "I am trained only to solve coding doubts."
        );
      }
    }
  };

  const checkForCodeKeywords = (inputText) => {
    const codeKeywords = [
      "code",
      "programming",
      "syntax",
      "algorithm",
      "function",
      "variable",
    ];
    return codeKeywords.some(
      (keyword) => inputText.toLowerCase().indexOf(keyword) !== -1
    );
  };

  return (
    <Container maxW="3xl" py={8}>
      <Box
        bg="white"
        borderRadius="lg"
        boxShadow="lg"
        p={6}
        overflow="hidden"
        transition="all 0.3s ease-in-out"
        _hover={{ transform: "translateY(-5px)" }}
      >
        <Flex alignItems="center" justifyContent="space-between" mb={6}>
          <Heading size="lg" color="green.600" mr={4}>
            <Icon as={FaRobot} mr={2} /> 
            <Text fontSize="5xl" 
        color="green.800"
        mb={10}
        >CodeBuddy</Text>
          </Heading>
          <Avatar bg="green.500" size="sm" icon={<Icon as={FaCode} color="white" />} />
        </Flex>

        <Text color="gray.600" mb={4}>
          Explore the power of Generative AI with Code Buddy
        </Text>

        <Stack spacing={4} mb={4}>
          <Input
            placeholder="Search"
            onChange={(e) => handleChangeSearch(e)}
            onKeyPress={(e) => handleKeyPress(e)}
            disabled={!isChatRunning}
            _placeholder={{ color: "gray.400" }}
          />
          <Button
            onClick={() => handleUserInput()}
            disabled={!isChatRunning}
            bgGradient="linear(to-r, green.400, green.600)"
            _hover={{
              bgGradient: "linear(to-r, green.500, green.700)",
              boxShadow: "xl",
              transform: "scale(1.05)",
            }}
          >
            Search
          </Button>
        </Stack>

        {loading && search !== "" ? (
          <Flex align="center" justify="center" mt={4}>
            <CircularProgress isIndeterminate color="green.500" size="32px" />
            <Text color="gray.600" ml={2}>
              Fetching...
            </Text>
          </Flex>
        ) : (
          <Box mt={6} overflow="auto" maxHeight="300px">
            <AceEditor
              mode="text"
              theme="monokai"
              boxShadow="2px 2px 2px grey"
              value={aiResponse}
              readOnly={true}
              fontSize={14}
              showPrintMargin={false}
              showGutter={false}
              highlightActiveLine={false}
              width="100%"
              height="50vh"
            />
          </Box>
        )}

        <Grid templateColumns="repeat(3, 1fr)" gap={4} mt={8} color="gray.600">
          <GridItem>
            <Icon as={FaCode} boxSize={6} mb={2} />
            <Text fontWeight="bold">Code Assistance</Text>
            <Text>Get help with coding queries</Text>
          </GridItem>
          {/* Add more GridItems for additional features */}
        </Grid>
      </Box>
    </Container>
  );
};

export default Chatbott;
