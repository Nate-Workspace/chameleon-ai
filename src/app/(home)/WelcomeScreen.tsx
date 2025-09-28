import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import axios from "axios";
import React, { useState, useTransition } from "react";
import { notify } from "../_components/notification/notify";
import { createMessageAction } from "./actions/create-message-action";
import { createChatAction } from "./actions/create-chat.action";
import { useRouter } from "next/navigation";

const WelcomeScreen = () => {
  const [sending, startSending] = useTransition();
  const [activeTab, setActiveTab] = useState("All");
  const [input, setInput] = useState("");
  const tabs = ["All", "Text", "Image", "Video", "Music", "Analytics"];
  const router = useRouter();

  const features = [
    {
      icon: "🔖",
      title: "Saved Prompt Templates",
      description:
        "Users save and reuse prompt templates for faster responses.",
    },
    {
      icon: "🖼️",
      title: "Media Type Selection",
      description: "Users select media type for tailored interactions.",
    },
    {
      icon: "🌐",
      title: "Multilingual Support",
      description: "Choose language for better interaction.",
    },
  ];

  const sendMessage = () => {
    startSending(async () => {
      console.log("Message sending...");
      const res = await axios.post("/api/ai/gemini", {
         prompt: input,
      });
      console.log("response in chat area: ", res);

      if(res.status !== 200){
        notify("Error", "Something went wrong. Please try again.");
        console.error("API call failed");
        return;
      }
      const chat = await createChatAction({title: 'Chat name here'})

      if(!chat || !chat.id){
        notify("Error", "Something went wrong. Please try again.")
        console.log("Error trying to create a chat.")
      }

      const userMessage$ = createMessageAction({chatId: chat.id, sender: "user", content: input});
      const message$ =  createMessageAction({chatId: chat.id, sender: "ai", content: res.data});

      const [userMessage, message] = await Promise.all([userMessage$, message$])

      console.log("response in chat area: ", res.data);
      if(!message.id || !userMessage.id){
        notify("Error", "Something went wrong. Please try again.");
        console.error("DB message write failed");
        return;
      }
      console.log("Message stored in DB: ", message, userMessage);
      router.push(`/${chat.id}`)

    });
  };
  return (
    <Center h="100%" w="100%">
      <Paper p="md" bg="#1f1f1f" radius="sm">
        <Card
          radius="xl"
          shadow="lg"
          bg="#2a2a2a"
          maw={720}
          w="100%"
          p={{ base: "lg", sm: "xl" }}
        >
          <Stack align="center" gap="md">
            {/* Logo Circle */}
            <Center mb="sm">
              <Box
                w={40}
                h={40}
                bg="#1f1f1f"
                style={{
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text c="green" fz="xl">
                  ◎
                </Text>
              </Box>
            </Center>

            {/* Title */}
            <Title
              order={2}
              c="white"
              ta="center"
              fw={600}
              fz={{ base: "xl", sm: "2xl" }}
            >
              How can I help you today?
            </Title>
            <Text
              c="dimmed"
              fz={{ base: "xs", sm: "sm" }}
              ta="center"
              px={{ base: "xs", sm: 0 }}
              mb="lg"
            >
              This code will display a prompt asking the user for their name,
              and then it will display a greeting message with the name entered
              by the user.
            </Text>

            {/* Feature cards */}
            <Grid gutter="md" mb="lg">
              {features.map((feature, idx) => (
                <Grid.Col span={{ base: 12, sm: 4 }} key={idx}>
                  <Card
                    radius="md"
                    p="md"
                    h={165}
                    bg="#1f1f1f"
                    shadow="sm"
                    style={{ transition: "background 0.2s" }}
                    className="hover-card"
                  >
                    <Text c="green" mb="xs">
                      {feature.icon}
                    </Text>
                    <Text c="white" fw={500} fz="sm">
                      {feature.title}
                    </Text>
                    <Text c="dimmed" fz="xs">
                      {feature.description}
                    </Text>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>

            {/* Tabs */}
            <Group justify="center" gap="md" mb="md">
              {tabs.map((tab) => (
                <Button
                  key={tab}
                  variant="transparent"
                  size="xs"
                  color={activeTab === tab ? "green" : "gray"}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </Button>
              ))}
            </Group>

            {/* Input Box */}
            <Flex align="center" bg="#1f1f1f" px="sm" py={6} w="100%">
              <Text c="green" fz="lg" mr="sm">
                ◎
              </Text>
              <TextInput
                placeholder="Type your prompt here..."
                variant="unstyled"
                className="flex-1"
                value={input}
                onChange={(e)=> setInput(e.currentTarget.value)}
                styles={{
                  input: {
                    color: "white",
                    fontSize: "14px",
                  },
                }}
              />
              <Button
                radius="md"
                ml="sm"
                px="md"
                color="green"
                onClick={sendMessage}
                disabled={sending || input.trim().length === 0}
              >
                ➤
              </Button>
            </Flex>
          </Stack>
        </Card>
      </Paper>
    </Center>
  );
};

export default WelcomeScreen;
