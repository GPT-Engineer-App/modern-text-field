import { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, HStack } from "@chakra-ui/react";
import { FaSave } from "react-icons/fa";

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [savedText, setSavedText] = useState("");

  const handleSave = () => {
    setSavedText(inputValue);
    setInputValue("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%">
          <Input placeholder="Enter some text..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} size="lg" variant="filled" focusBorderColor="teal.400" />
        </Box>
        <HStack spacing={4}>
          <Button leftIcon={<FaSave />} colorScheme="teal" onClick={handleSave}>
            Save
          </Button>
        </HStack>
        {savedText && (
          <Box p={4} mt={4} borderWidth={1} borderRadius="md" width="100%">
            <Text fontSize="lg">Saved Text:</Text>
            <Text mt={2} fontSize="xl" fontWeight="bold">
              {savedText}
            </Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
