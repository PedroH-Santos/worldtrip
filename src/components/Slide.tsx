import {  Flex, Heading, Link, LinkBox, Text } from "@chakra-ui/react";
type SlideProps  = { 
    title: string,
    subtitle: string,
    image: string,
}
export function Slide({title, subtitle,image} : SlideProps) {
    return (
            <Link >
                    <Flex direction="column" align="center" justify="center" h="450px" backgroundImage={image} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center" boxShadow="inset 0 0 0 450px rgba(28,20,1,0.5)">
                        <Heading fontSize="2xl" color="gray.50"> {title} </Heading>
                        <Text fontSize="xl" fontWeight="bold" color="gray.100" mt="4"> {subtitle} </Text>
                    </Flex>
            </Link>

    );
}