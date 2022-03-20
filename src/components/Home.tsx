import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState, VFC } from "react";
import { createPost, getAllPosts } from "../api/post";
import { Post } from "../types/post";

export const Home: VFC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const [value, setValue] = useState({
    id: 0,
    title: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await createPost(value);
      console.log(res.data);
      handleGetAllPosts();
    } catch (e) {
      console.log(e);
    }
    setValue({
      id: 0,
      title: "",
    });
  };

  const handleGetAllPosts = async () => {
    try {
      const res = await getAllPosts();
      console.log(res.data);
      setPosts(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleGetAllPosts();
  }, []);
  return (
    <Box mt="24px" ml="24px">
      <Box mb="40px">
        <Heading mb="16px">新規アンケート作成</Heading>
        <form>
          <InputGroup w="500px">
            <Input
              placeholder="title"
              type="text"
              variant="outline"
              mr="16px"
              onChange={handleChange}
              value={value.title}
              name="title"
            />
            <Button
              bg="teal"
              color="white"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              作成
            </Button>
          </InputGroup>
        </form>
      </Box>
      {posts.map((post) => (
        <Box display="block" key={post.id}>
          <Box
            border="1px solid black"
            display="inline-block"
            width="500px"
            p="24px"
            borderRadius="md"
            mb="24px"
            cursor="pointer"
          >
            <Text>{post.title}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
