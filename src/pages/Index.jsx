import { Container, VStack, Text, Box } from "@chakra-ui/react";

const Index = () => {
  const staticText = "This is a static text field.";

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box p={4} mt={4} borderWidth={1} borderRadius="md" width="100%">
          <Text fontSize="lg">Static Text:</Text>
          <Text mt={2} fontSize="xl" fontWeight="bold">
            {staticText}
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
