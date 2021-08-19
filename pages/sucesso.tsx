import React from "react";
import { Flex, Image, Text } from "@chakra-ui/core";

export default function Sucesso() {
  return (
    <Flex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Image
        marginBottom={8}
        width="15%"
        alignSelf="center"
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/91/orange-heart_1f9e1.png"
        alt="Thumbs Up"
      />
      <Text textAlign="center" fontSize="sm" color="gray.400" marginBottom={2}>
        Obrigado por se cadastrar na Newsletter!
      </Text>
    </Flex>
  );
}
