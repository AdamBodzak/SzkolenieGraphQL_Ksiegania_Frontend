import React from "react";
import AuthorsPage from "./pages/AuthorsPage";
import { Box, Divider, Flex, Heading, Link } from "@chakra-ui/react";
import { Routes, Route, Link as RouterrLink } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import BooksPage from "./pages/BooksPage";

export default function App() {
  return (
    <Flex direction="column" align="center" width="75%" mx="auto">
      <Flex  align="center" justify="space-between" w="100%">
        <Link to="/" as={RouterrLink}>
          <Heading as="h1">Personal Library</Heading>
        </Link>
        <Flex>
        <Link to="books/" as={RouterrLink}>
            <Box as="span">Books</Box>
          </Link>
          <Divider orientation="vertical" />
          <Link to="/" as={RouterrLink}>
            <Box as="span">Authors</Box>
          </Link>
          <Divider orientation="vertical" />
          <Link to="users/" as={RouterrLink}>
            <Box as="span">Users</Box>
          </Link>
        </Flex>
      </Flex>
      <Routes>
        <Route path="/" element={<AuthorsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/books" element={<BooksPage />} />
      </Routes>
    </Flex>
  );
}