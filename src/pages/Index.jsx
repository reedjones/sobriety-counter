import React, { useState } from "react";
import { Box, Button, VStack, Text, Heading, Container, useToast } from "@chakra-ui/react";
import { FaStopwatch, FaRedo, FaPlay } from "react-icons/fa";

console.log("hello fro, index")
const Index = () => {
  const [startTime, setStartTime] = useState(null);
  const [counter, setCounter] = useState(null);
  const toast = useToast();

  const startSobrietyCounter = () => {
    if (counter === null) {
      setStartTime(new Date());
      setCounter(0);
      toast({
        title: "Sobriety Counter Started",
        description: "Your journey to sobriety has begun.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Counter is already running",
        description: "You've already started your sobriety journey.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const resetSobrietyCounter = () => {
    setStartTime(null);
    setCounter(null);
    toast({
      title: "Sobriety Counter Reset",
      description: "The counter has been reset. You can start again whenever you're ready.",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
  };

  React.useEffect(() => {
    let intervalId;
    if (startTime) {
      intervalId = setInterval(() => {
        const now = new Date();
        setCounter(Math.floor((now - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [startTime]);

  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>Sobriety Counter</Heading>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack spacing={4}>
            <Text fontSize="lg">{startTime ? `Started at: ${startTime.toLocaleString()}` : "Not started yet"}</Text>
            <Text fontSize="2xl">{counter !== null ? formatTime(counter) : "00:00:00"}</Text>
            <Button leftIcon={<FaPlay />} colorScheme="green" onClick={startSobrietyCounter}>
              Start
            </Button>
            <Button leftIcon={<FaRedo />} colorScheme="yellow" onClick={resetSobrietyCounter}>
              Reset
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
