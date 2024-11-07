import { nameList } from "./Constants";

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}
export function generateRandomMessages() {
  const characters = [
    "Hello",
    "What are you doing?",
    "I'm fine. What about you?",
    "Good morning! How are you today?",
    "Good evening! How are you today?",
    "Good afternoon! How are you today?",
    "Hey, how is everything going on? Hope you are doing well.",
    "Hello, there! I was wondering if I was in the right place.",
    "Hi! How was your weekend?",
    "Don't you think the weather is great today?",
  ];

  const charactersLength = characters.length;

  // Select a random message from the characters array
  return characters[Math.floor(Math.random() * charactersLength)];
}
