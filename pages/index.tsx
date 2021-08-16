// import Head from 'next/head'
import React, { useState, FormEvent } from "react";
import { Flex, Image, Button, Text } from "@chakra-ui/core";
import Input from "../components/Input";
import axios from "axios";

export default function Home() {
  const [email, setEmail] = useState("");

  function handleSignUpToNewsletter(event: FormEvent) {
    event.preventDefault();

    axios.post("/api/subscribe", { email });
  }

  return (
    <Flex as="main" height="100vh" justifyContent="center" alignItems="center">
      <Flex
        as="form"
        onSubmit={handleSignUpToNewsletter}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%"
        maxW="400px"
      >
        <Image
          marginBottom={8}
          width="50%"
          borderRadius="70%"
          alignSelf="center"
          src="https://pbs.twimg.com/profile_images/1426194645193736197/q99cuZX4_400x400.jpg"
          alt="Rocketseat"
        />

        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.400"
          marginBottom={2}
        >
          Assine a minha newsletter e receba os melhores conteúdos sobre
          programação!
        </Text>

        <Input
          placeholder="Seu melhor e-mail"
          marginTop={2}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          type="submit"
          backgroundColor="#ff4500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: "orange.500" }}
        >
          INSCREVER
        </Button>
      </Flex>
    </Flex>
  );
}
