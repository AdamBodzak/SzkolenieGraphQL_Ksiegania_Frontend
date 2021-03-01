import { Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

export default function Author({author}) {
    return (
        <Flex direction="column" align="center" m="3px" border="1px" borderColor="grey.200" borderRadius="md" overflow="hidden" bg="green.50">
            <Image boxSize="200px" objectFit="cover" src={author.photo.url} alt={author.name} />
            <Heading size="md" color="gray.700" my="3">{author.name}</Heading>
        </Flex>
    )
}