import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading
} from "@chakra-ui/react";
// import axios from "axios";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { handlepost } from "../Redux/logindata/action";

export const Signup = () => {
  const initUser = { email: "", password: "", username: "" };
  const [user, setUser] = useState(initUser);
  const navigate = useNavigate();
  const localdata = JSON.parse(localStorage.getItem("login-data")) || [];
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localdata.push(user);
    localStorage.setItem("login-data", JSON.stringify(localdata));
    dispatch(handlepost(user)).then(() => navigate('/'));
  };

  return (
    <>
      <Box
        bg="white"
        position="relative"
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={370}
        width="100%"
        p={6}
        m="20px auto"
        overflow="auto"
      >
        <Heading w="100%" textAlign="center" fontWeight="700" fontSize="23px" mb="5%">
          Sign Up
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input type="text" name="username" value={user.username} onChange={handleChange} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" value={user.email} onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" value={user.password} onChange={handleChange} />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Sign Up
            </Button>
          </Stack>
        </form>
        <Button
          mt="4"
          colorScheme="teal"
          width="full"
          onClick={() => window.location.href = 'https://www.incometax.gov.in/iec/foportal/'}
        >
          Go to Income Tax Website
        </Button>
      </Box>
    </>
  );
};