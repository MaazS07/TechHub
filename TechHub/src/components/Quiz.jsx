import React, { useState } from 'react';
import {
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Box // Import Box component
} from '@chakra-ui/react';

const Quiz = () => {
    const [submitted, setSubmitted] = useState(false); 
    const [answers, setAnswers] = useState([]);
    
    const questions = [
        {
          question: 'What is your favorite programming language?',
          options: ['JavaScript', 'Python', 'Java', 'Other'],
        },
        {
          question: 'What type of projects do you enjoy working on?',
          options: ['Web Development', 'Mobile Development', 'Data Science', 'Game Development'],
        },
        {
          question: 'How comfortable are you with front-end development?',
          options: ['Very comfortable', 'Somewhat comfortable', 'Not very comfortable', 'Not comfortable at all'],
        },
        {
          question: 'Which aspect of programming interests you the most?',
          options: ['User Interface (UI) Design', 'Backend Development', 'Data Analysis', 'Algorithms and Problem Solving'],
        },
        {
          question: 'How much experience do you have with version control systems like Git?',
          options: ['None', 'Basic', 'Intermediate', 'Advanced'],
        },
        {
          question: 'Are you interested in working with databases?',
          options: ['Yes, I enjoy database management', 'No, I prefer working with frontend technologies', 'I\'m open to learning about databases', 'I have no preference'],
        },
        {
          question: 'Do you enjoy solving complex mathematical problems?',
          options: ['Yes, I find it intellectually stimulating', 'No, I prefer working on practical applications', 'It depends on the context', 'I\'m not sure'],
        },
        {
          question: 'How do you feel about working in a team?',
          options: ['I enjoy collaborating with others', 'I prefer working alone', 'It depends on the team dynamics', 'I\'m not sure'],
        },
        {
          question: 'Which programming language do you feel most comfortable with?',
          options: ['JavaScript', 'Python', 'Java', 'C++'],
        },
        {
          question: 'How important is it for you to work on cutting-edge technologies?',
          options: ['Very important', 'Somewhat important', 'Not very important', 'Not important at all'],
        },
        {
          question: 'Are you interested in machine learning and artificial intelligence?',
          options: ['Yes, I\'m fascinated by AI', 'No, I prefer other areas of technology', 'I\'m open to exploring it further', 'I\'m not sure'],
        },
        {
          question: 'Do you prefer working on frontend or backend development?',
          options: ['Frontend', 'Backend', 'Full-stack', 'I\'m not sure'],
        },
        {
          question: 'How much time are you willing to invest in learning new technologies?',
          options: ['As much time as needed', 'A few hours per week', 'Only during work hours', 'I don\'t have much time'],
        },
        {
          question: 'Do you enjoy problem-solving and debugging?',
          options: ['Yes, it\'s challenging and rewarding', 'No, it can be frustrating', 'It depends on the problem', 'I\'m not sure'],
        },
        {
          question: 'Are you interested in working with large-scale systems and infrastructure?',
          options: ['Yes, I find it exciting', 'No, I prefer working on smaller projects', 'It depends on the project', 'I\'m not sure'],
        },
      ];
      const handleAnswer = (answer) => {
        // const newAnswers = [...answers];
        // newAnswers.push(answer);
        setAnswers([...answers, answer]);
      };
      let score = 0;
      const getRecommendedSkill = () => {
       
      
        // Loop through each answer and calculate the score
        answers.forEach((answer, index) => {
          // Question 1: Favorite programming language
          if (index === 0) {
            if (answer === 'JavaScript') score += 5;
            else if (answer === 'Python') score += 4;
            else if (answer === 'Java') score += 3;
            else if (answer === 'C++') score += 2;
            else score += 1; // Other
          }
      
          // Question 2: Type of projects
          if (index === 1) {
            if (answer === 'Web Development') score += 5;
            else if (answer === 'Mobile Development') score += 4;
            else if (answer === 'Data Science') score += 3;
            else if (answer === 'Game Development') score += 2;
            else score += 1; // Other
          }
      
          // Question 3: Preferred platforms
          if (index === 2) {
            if (answer === 'Web') score += 5;
            else if (answer === 'Mobile') score += 4;
            else if (answer === 'Desktop') score += 3;
            else if (answer === 'Cloud') score += 2;
            else score += 1; // Other
          }
      
          // Question 4: Interest in AI/ML
          if (index === 3) {
            if (answer === 'Yes') score += 5;
            else score += 0; // No
          }
      
          // Question 5: Preferred development environment
          if (index === 4) {
            if (answer === 'IDE') score += 5;
            else if (answer === 'Text Editor') score += 4;
            else score += 1; // Other
          }
      
          // Question 6: Preferred database type
          if (index === 5) {
            if (answer === 'SQL') score += 5;
            else if (answer === 'NoSQL') score += 4;
            else score += 1; // Other
          }
      
          // Question 7: Experience level
          if (index === 6) {
            if (answer === 'Beginner') score += 3;
            else if (answer === 'Intermediate') score += 5;
            else if (answer === 'Advanced') score += 4;
            else score += 1; // Other
          }
      
          // Question 8: Interest in cybersecurity
          if (index === 7) {
            if (answer === 'Yes') score += 4;
            else score += 0; // No
          }
      
          // Question 9: Familiarity with version control systems
          if (index === 8) {
            if (answer === 'Git') score += 5;
            else if (answer === 'SVN') score += 4;
            else score += 1; // Other
          }
      
          // Question 10: Interest in UI/UX design
          if (index === 9) {
            if (answer === 'Yes') score += 4;
            else score += 0; // No
          }
      
          // Question 11: Interest in blockchain technology
          if (index === 10) {
            if (answer === 'Yes') score += 4;
            else score += 0; // No
          }
      
          // Question 12: Familiarity with cloud computing platforms
          if (index === 11) {
            if (answer === 'Yes') score += 5;
            else score += 0; // No
          }
      
          // Question 13: Interest in IoT
          if (index === 12) {
            if (answer === 'Yes') score += 4;
            else score += 0; // No
          }
      
          // Question 14: Interest in DevOps practices
          if (index === 13) {
            if (answer === 'Yes') score += 5;
            else score += 0; // No
          }
      
          // Question 15: Interest in machine learning engineering
          if (index === 14) {
            if (answer === 'Yes') score += 5;
            else score += 0; // No
          }
        });
      
        // Determine the recommended tech skill based on the total score
        let recommendedSkill = '';

        if (score >= 50) recommendedSkill = 'Full-stack Developer';
        else if (score >= 40) recommendedSkill = 'Data Scientist';
        else if (score >= 30) recommendedSkill = 'Machine Learning Engineer';
        else if (score >= 20) recommendedSkill = 'Frontend Developer';
        else recommendedSkill = 'Technical Support Specialist';
      
        return recommendedSkill;
      
      };
      const renderQuestion = (questionIndex, question, options) => {
        return (
          <VStack
            key={questionIndex}
            align="flex-start"
            mb={8}
            p={6} // Padding
            borderRadius="lg" // Rounded corners
            boxShadow="xl" // Box shadow
            bgColor="white" // Background color
          >
            <Heading as="h3" size="md" mb={2}>
              {question}
            </Heading>
            <VStack align="center" spacing={4}>
              {options.map((option, optionIndex) => (
                <Button
                  key={optionIndex}
                  onClick={() => handleAnswer(option)}
                  colorScheme={answers[questionIndex] === option ? "green" : "gray"}
                  borderColor={answers[questionIndex] === option ? "green" : "gray"}
                  _hover={{ bg: "green.400", borderColor: "green.600" }}
                  w="100%"
                  textAlign="left"
                >
                  {option}
                </Button>
              ))}
            </VStack>
          </VStack>
        );
      };
    
      const handleSubmit = () => {
        setSubmitted(true);
      };
    
      return (
        <Container maxW="container.md" py={8}>
          <Heading as="h1" mb={4}>
          <Text fontSize="5xl" 
        color="green.800"
        mb={10}
        >MentiQuiz</Text>
          </Heading>
          {questions.map((question, index) =>
            renderQuestion(index, question.question, question.options)
          )}
          <Button
            onClick={handleSubmit}
            bgGradient="linear(to-r, green.400, green.600)"
                _hover={{
                  bgGradient: "linear(to-r, green.500, green.700)",
                  boxShadow: "xl",
                  transform: "scale(1.05)",
                }}
  boxShadow="md" 
            mt={4}
            w="100%"
          >
            Submit
          </Button>
          {submitted && (
            <Box mt={8}>
              <Heading as="h2" size="lg" mb={4}>
                Result
              </Heading>
              <Text fontSize="xl">
                Based on your answers, you should consider becoming a{' '}
                {getRecommendedSkill()}.
              </Text>
            </Box>
          )}
        </Container>
      );
    };
    
    export default Quiz;