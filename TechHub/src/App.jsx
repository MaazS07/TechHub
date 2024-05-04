import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Flex, Box, Text, Button, Icon } from '@chakra-ui/react';
import { RiDashboardLine, RiBookLine, RiQuestionnaireLine, RiChat3Line, RiGitRepositoryLine, RiHome3Fill } from 'react-icons/ri';

import Repositories from './components/Repositories';
import Chatbott from './components/Chatbott';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import BlogSection from './components/Blog';
import HeroPage from './components/HeroPage';

const SidebarItem = ({ to, icon, label, isOpen }) => {
  const textStyle = isOpen ? { marginLeft: '2px' } : { display: 'none' };
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Flex align="center" p={4} _hover={{ bg: 'green.500', color: 'white' }}>
        <Icon as={icon} boxSize={6} />
        <Text style={textStyle}>{label}</Text>
      </Flex>
    </Link>
  );
};

const Navbar = () => {
  return (
    <Flex bgGradient="linear(to-r, green.400, green.600)" p={4} boxShadow="md" alignItems="center" justify="center">
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <Flex alignItems="center">
          <Icon as={RiDashboardLine} boxSize={10} />
          <Text ml={4} fontWeight="bold" fontSize="3xl">TechHub</Text>
        </Flex>
      </Link>
    </Flex>
  );
};


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      <Flex direction="column" height="100vh">
        {/* Top Navbar */}
        <Navbar />

        {/* Sidebar */}
        <Box
          bgGradient="linear(to-r, green.400, green.600)"
          _hover={{
            bgGradient: "linear(to-r, green.500, green.700)",
            boxShadow: "xl",
            transform: "scale(1.05)",
          }}
          color="white"
          w={isOpen ? '250px' : '60px'}
          h="70vh"
          position="fixed"
          left="0.5vw"
          top="20vh"
          borderRadius="xl"
          boxShadow="lg"
          transition="width 0.3s"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Flex direction="column" align="center" h="100%">
            <Box mt={8}>
            <SidebarItem to="/" icon={RiHome3Fill} label="Home" isOpen={isOpen} />
              <SidebarItem to="/profile" icon={RiDashboardLine} label="GitDash" isOpen={isOpen} />
              <SidebarItem to="/repositories" icon={RiGitRepositoryLine} label="RepoT-Do's" isOpen={isOpen} />
              <SidebarItem to="/chatbot" icon={RiChat3Line} label="Chatbot" isOpen={isOpen} />
              <SidebarItem to="/quiz" icon={RiQuestionnaireLine} label="MentiQuiz" isOpen={isOpen} />
              <SidebarItem to="/blogs" icon={RiBookLine} label="Techtalk" isOpen={isOpen} />

            </Box>
          </Flex>
          <Box position="absolute" top={0} right={0} p={4} display={isOpen ? 'block' : 'none'}>
            <Button onClick={handleMouseLeave}>✕</Button>
          </Box>
        </Box>

        {/* Main Content */}
        <Box ml={isOpen ? '250px' : '60px'} p={8} flexGrow={1}>
          <Routes>
          <Route path="/" element={<HeroPage />} />
            <Route path="/repositories" element={<Repositories />} />
            <Route path="/chatbot" element={<Chatbott />} />
            <Route path="/profile" element={<Dashboard />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/blogs" element={<BlogSection />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
