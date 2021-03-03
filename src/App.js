import React from "react";
import { Routes, Route, Link as RouterLink } from "react-router-dom";

import BooksPage from "./pages/BooksPage";
import AuthorsPage from "./pages/AuthorsPage";
import UsersPage from "./pages/UsersPage";
import { Flex, Box, Divider, Heading, Link } from "@chakra-ui/react";

export default function App() {
  return (
    <Flex direction="column" align="center" width="75%" mx="auto">
      <Flex align="center" justifyContent="space-between" w="100%" mx="5">
        <Link to="/" as={RouterLink}>
          <Heading as="h1">Personal Library</Heading>
        </Link>
        <Box d="flex">
          <Link to="/" as={RouterLink}>
            <h1>Books</h1>
          </Link>
          <Divider orientation="vertical" />
          <Link to="/authors" as={RouterLink}>
            <h1>Authors</h1>
          </Link>
          <Divider orientation="vertical" />
          <Link to="/users" as={RouterLink}>
            <h1>Users</h1>
          </Link>
        </Box>
      </Flex>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="authors/" element={<AuthorsPage />} />
        <Route path="users/" element={<UsersPage />} />
      </Routes>
    </Flex>
  );
}
