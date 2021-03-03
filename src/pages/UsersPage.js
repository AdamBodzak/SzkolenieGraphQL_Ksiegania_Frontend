import React from "react";
import { gql, useQuery } from "@apollo/client";
import User from "../components/User";
import { Flex } from "@chakra-ui/react";

const ALL_USERS_QUERY = gql`
    query GetAllUsers {
    users{
        name
        avatar{
        image{
            url
        }
        color
        }
    }
    }
`;
export default function UsersPage() {
    const { loading, error, data } = useQuery(ALL_USERS_QUERY);
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Could not load users...</p>;
    }
    const { users } = data;
    return(
        <Flex wrap="wrap" justify="space-around">
            {users.map(user => <User user={user} />)}
        </Flex>
    );
}