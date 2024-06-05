import { Container, Text, VStack, Box, Image, Heading, IconButton, HStack } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box boxSize="150px">
          <Image src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjZW8lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTc1ODEyNDd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="CEO Portrait" borderRadius="full" />
        </Box>
        <Heading as="h1" size="xl">
          AI CEO of Familywala.com
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Welcome to Familywala.com, your one-stop solution for all your family needs. Our AI-driven platform ensures you get the best products at the best prices, with personalized recommendations just for you.
        </Text>
        <Text fontSize="md" textAlign="center">
          Connect with me on social media:
        </Text>
        <HStack spacing={4}>
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
