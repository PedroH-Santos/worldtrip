import { Box, Flex, Heading, Img, Link, LinkBox, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Carrosel } from "../components/Carrosel";
import { Slide } from "../components/Slide";

export default function home() {
    return (
        <Flex w="100%" direction="column" >
            <Img src="Banner.png" alt="Banner" w="100%" mb="4" />
            <Box w="100%" >
                <Flex align="center" justify="center">
                    <Box mr="130px" align="center" justify="center">
                        <Img src="cocktail.png" alt="Cocktail" />
                        <Heading color="gray.600" fontWeight="bold" fontSize="24px" mt="4"> Vida Noturna </Heading>
                    </Box>
                    <Box mr="150px" align="center" justify="center">
                        <Img src="surf.png" alt="Surf" />
                        <Heading color="gray.600" fontWeight="bold" fontSize="24px" mt="4"> Praia </Heading>
                    </Box>
                    <Box mr="170px" align="center" justify="center">
                        <Img src="building.png" alt="Building" />
                        <Heading color="gray.600" fontWeight="bold" fontSize="24px" mt="4"> Moderno </Heading>
                    </Box>
                    <Box mr="150px" align="center" justify="center">
                        <Img src="museum.png" alt="Museum" />
                        <Heading color="gray.600" fontWeight="bold" fontSize="24px" mt="4"> Clássico </Heading>
                    </Box>
                    <Box align="center" justify="center">
                        <Img src="earth.png" alt="Earth" />
                        <Heading color="gray.600" fontWeight="bold" fontSize="24px" mt="4"> e mais... </Heading>
                    </Box>

                </Flex>
                <Flex align="center" justify="center" mt="80px">
                    <Box width="90px">
                        <Box border='1px' borderColor='gray.600' borderWidth="2px" > </Box>
                    </Box>
                </Flex>
                <Flex align="center" justify="center" mt="50px">
                    <Text color='gray.600' fontWeight="bold" fontSize="36px" align="center">
                        <p> Vamos nessa? </p>
                        <p> Então escolha seu continente </p></Text>
                </Flex>
                <Flex align="center" justify="center" mt="5rem">
                    <Carrosel/>
                </Flex>
            </Box>

        </Flex>
    );
} 