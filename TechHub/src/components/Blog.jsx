import React, { useState } from 'react';
import {
  Container,
  Heading,
  Box,
  VStack,
  Text,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Grid,
} from '@chakra-ui/react';


const BlogSection = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };
  const blogs = [
    {
      id: 1,
      imageUrl: 'https://th.bing.com/th/id/OIP.e7aVz1epxMeyv0pwgzBVawAAAA?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      heading: 'Understanding Artificial Intelligence: A Beginner\'s Guide',
      subheading: 'Exploring the basics of AI and its applications',
      content:
        'Artificial Intelligence (AI) is revolutionizing the way we interact with technology. It refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. AI has diverse applications across various industries, including healthcare, finance, transportation, and entertainment. From virtual assistants like Siri and Alexa to advanced robotics and autonomous vehicles, AI is reshaping our world in profound ways. This blog post provides a beginner\'s guide to understanding AI, covering its fundamental concepts, key technologies, and real-world applications. Whether you\'re a tech enthusiast or a business professional, this guide will help you grasp the basics of AI and appreciate its transformative potential.',
    },
    {
      id: 2,
      imageUrl: 'https://th.bing.com/th/id/OIP.86EIGRffIsI75wZoHoZo9QHaGK?w=206&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      heading: 'Machine Learning Demystified: Concepts and Algorithms',
      subheading: 'Diving deep into the world of machine learning',
      content:
        'Machine Learning (ML) is a subset of AI that focuses on developing algorithms that allow computers to learn from and make predictions based on data. ML algorithms enable computers to identify patterns in large datasets and make data-driven decisions without explicit programming. This blog post delves into the concepts and algorithms behind machine learning, such as supervised learning, unsupervised learning, and reinforcement learning. It explores popular ML algorithms like linear regression, decision trees, and neural networks, providing insights into how they work and their practical applications. Whether you\'re a data scientist, software engineer, or aspiring ML practitioner, this guide will deepen your understanding of machine learning and empower you to leverage its capabilities in your projects.',
    },
    {
      id: 3,
      imageUrl: 'https://th.bing.com/th/id/OIP.b0lpq1RPYnzbJXMEKTquTwHaFG?rs=1&pid=ImgDetMain',
      heading: 'The Rise of Web Development: Trends and Technologies',
      subheading: 'Exploring the latest trends and technologies in web development',
      content:
        'Web development has evolved rapidly in recent years, driven by advancements in technology and changing user expectations. This blog post explores the latest trends and technologies shaping the field of web development. From responsive design and progressive web apps to serverless architecture and microservices, web developers have access to a wide range of tools and frameworks to build modern and engaging web experiences. Whether you\'re a seasoned developer or just getting started in web development, this guide will keep you informed about the latest trends and empower you to create cutting-edge web applications.',
    },
    {
      id: 4,
      imageUrl: 'https://th.bing.com/th/id/OIP.CoaFrNyqNfDccro_Z98jSgHaFL?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      heading: 'Demystifying IoT: The Internet of Things Explained',
      subheading: 'Understanding the fundamentals of the Internet of Things',
      content:
        'The Internet of Things (IoT) is a network of interconnected devices that communicate and share data with each other over the internet. IoT technology has transformed various industries, including healthcare, agriculture, manufacturing, and smart homes. This blog post provides a comprehensive overview of IoT, covering its basic concepts, components, and applications. From wearable devices and smart sensors to industrial automation and connected vehicles, IoT has the potential to revolutionize how we live, work, and interact with the world around us. Whether you\'re a technology enthusiast or a business professional, this guide will help you understand the fundamentals of IoT and its implications for the future.',
    },
    {
      id: 5,
      imageUrl: 'https://th.bing.com/th/id/OIP.RIfoROQ1tX0oLNkb-oxzZAHaD8?w=324&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      heading: 'The Future of Artificial Intelligence in Healthcare',
      subheading: 'Exploring AI-driven innovations in healthcare',
      content:
        'Artificial Intelligence (AI) is poised to revolutionize the healthcare industry, offering new opportunities for diagnosis, treatment, and patient care. This blog post examines the role of AI in healthcare and explores its potential to transform various aspects of the industry. From medical imaging and predictive analytics to virtual health assistants and personalized medicine, AI-driven innovations have the power to improve patient outcomes, streamline operations, and reduce healthcare costs. Whether you\'re a healthcare professional, researcher, or technology enthusiast, this guide will provide valuable insights into the future of AI in healthcare and its impact on patient care.',
    },
    {
      id: 6,
      imageUrl: 'https://th.bing.com/th/id/OIP.MfbjEFU_K_ddf8k9wiP3DQHaEK?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      heading: 'The Impact of Machine Learning on Financial Services',
      subheading: 'Harnessing the power of ML in the financial industry',
      content:
        'Machine Learning (ML) is revolutionizing the financial services industry, enabling institutions to analyze vast amounts of data and make data-driven decisions in real-time. This blog post explores the impact of ML on various aspects of financial services, including risk management, fraud detection, trading algorithms, and customer experience. From algorithmic trading and credit scoring to robo-advisors and chatbots, ML-driven innovations are reshaping how financial institutions operate and interact with customers. Whether you\'re a banker, investor, or fintech entrepreneur, this guide will help you understand the potential of ML in revolutionizing the financial services landscape.',
    },
    {
      id: 7,
      imageUrl: 'https://th.bing.com/th/id/OIP.mbkErcaR48EUOiC89zFzxgHaEo?w=212&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      heading: 'The Evolution of Web Development: From HTML to React',
      subheading: 'Tracing the history and evolution of web development',
      content:
        'Web development has come a long way since the early days of static HTML pages. This blog post traces the history and evolution of web development, from the introduction of HTML and CSS to the rise of JavaScript frameworks like React. It explores key milestones in web development history, such as the advent of dynamic web content, the rise of responsive design, and the emergence of single-page applications (SPAs). Whether you\'re a seasoned web developer or just starting your journey in programming, this guide will provide valuable insights into the evolution of web technologies and the trends shaping the future of web development.',
    },
    {
      id: 8,
      imageUrl: 'https://th.bing.com/th/id/OIP.1YL7B0AP_VV9YKHqHN_GzQHaF2?w=235&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      heading: 'The Role of IoT in Smart Cities: Building the Cities of Tomorrow',
      subheading: 'Exploring the impact of IoT on urban development',
      content:
        'The Internet of Things (IoT) is playing a crucial role in shaping the future of urban development, paving the way for smart cities that are connected, efficient, and sustainable. This blog post examines the role of IoT in smart cities and explores how IoT technology is being used to address various urban challenges, such as traffic congestion, energy consumption, and public safety. From smart transportation systems and intelligent infrastructure to environmental monitoring and urban planning, IoT-enabled solutions have the potential to make cities more livable and resilient. Whether you\'re a city planner, policy maker, or urban resident, this guide will provide valuable insights into the transformative power of IoT in building the cities of tomorrow.',
    },
  ];
  const techNews = [
    '>New AI breakthrough enables machines to learn without human input',
    '>Latest study reveals potential risks of AI-driven surveillance systems',
    '>IoT devices vulnerable to cyber attacks, warns cybersecurity experts',
  ];
  return (
    <Container maxW="container.lg" py={8}>
    <marquee behavior="scroll" direction="left" scrollamount="5" style={{ border: '1px solid #ccc', marginBottom: '20px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'  }}>
      {techNews.map((news, index) => (
        <span key={index} style={{ marginRight: '20px',fontWeight:"bold" }}>{news}</span>
      ))}
    </marquee>
    <Heading as="h1" mb={8}>
      TechTalks:
    </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        {blogs.map((blog) => (
          <Box
            key={blog.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
          >
            <Image
              src={blog.imageUrl}
              alt="Blog Image"
              objectFit="cover"
              borderTopRadius="lg"
              width="100%"
              height="40%"
            />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>
                {blog.heading}
              </Heading>
              <Text fontSize="sm" mb={4} color="gray.500">
                {blog.subheading}
              </Text>
              <Text fontSize="md" mb={4}>
                {blog.content.slice(0, 200)}...
              </Text>
              <Button
 
  onClick={() => handleCardClick(blog)}
 
  bgGradient="linear(to-r, green.400, green.600)"
                _hover={{
                  bgGradient: "linear(to-r, green.500, green.700)",
                  boxShadow: "xl",
                  transform: "scale(1.05)",
                }}
  boxShadow="md" // Add default box shadow
>
  Read More
</Button>

            </Box>
          </Box>
        ))}
      </Grid>

      <Modal isOpen={isModalOpen} 
      onClose={handleCloseModal}>
        <ModalOverlay
        />
        <ModalContent>
          <ModalHeader>{selectedBlog?.heading}</ModalHeader>
          <ModalCloseButton 
  color="green"
  _hover={{ color: 'white', bg: 'red' }}
/>

<ModalBody display="flex" justifyContent="center" alignItems="center" flexDirection="column">
  <Image src={selectedBlog?.imageUrl} alt="Blog Image" width="80%" borderRadius="lg" />
  <Text fontSize="lg" fontWeight="bold" mt={4}>
  {selectedBlog?.subheading}
</Text>
            <Text mt={2}>{selectedBlog?.content}</Text>
          </ModalBody>
    
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default BlogSection;
