import { Box, Flex, Heading, Icon, Img, Text, Tooltip } from "@chakra-ui/react";
import { FiInfo } from 'react-icons/fi';


export default function Details() {
    return (
        <>
            <Flex align="end" backgroundImage="europa.jpg" backgroundRepeat="no-repeat" backgroundSize="cover" h="450px" backgroundPosition="center" boxShadow="inset 0 0 0 450px rgba(28,20,1,0.5)">
                <Heading color="white" ml="2rem" mb="4rem"> Europa </Heading>
            </Flex>
            <Flex justify="center" align="center" mt="2rem">
                <Flex>
                    <Text color="gray.500" maxWidth="400px" fontSize="xl"> A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste </Text>
                </Flex>
                <Flex justify="center" align="center" ml="5rem">
                    <Box mr="2rem" align="center" justify="center">
                        <Text color="orange.300" fontSize="4xl" fontWeight="bold"> 50 </Text>
                        <Text color="gray.900" fontSize="2xl" fontWeight="semibold"> países </Text>
                    </Box>
                    <Box mr="2rem" align="center" justify="center">
                        <Text color="orange.300" fontSize="4xl" fontWeight="bold"> 60 </Text>
                        <Text color="gray.900" fontSize="2xl" fontWeight="semibold"> línguas </Text>
                    </Box>
                    <Box align="center" justify="center">
                        <Text color="orange.300" fontSize="4xl" fontWeight="bold"> 27 </Text>
                        <Text color="gray.900" fontSize="2xl" fontWeight="semibold">
                            cidades +100
                            <Tooltip label="+ 100 ótimas opções" bg="gray.900" borderRadius="5px" >
                                <span> <Icon as={FiInfo} h='4' w='4' ml='1' color="gray.400" /> </span>
                            </Tooltip>
                        </Text>

                    </Box>

                </Flex>
            </Flex>

            <Flex justify="center" align="center" mt="5rem" direction="column" >
                <Box as="div">
                    <Text color="gray.500" fontSize="2xl" fontWeight="bold"> Continentes + 100 </Text>
                </Box>
                <Flex mt="2rem" direction="row" maxWidth="1240px">
                    <Box backgroundColor="white" mb="4rem" mr="4rem" maxWidth="256px"  >
                        <Img src="americasul.jpg" w="256px" />
                        <Flex ml="2rem">
                            <Box mt="2rem">
                                <Text color="gray.700" fontweight="bold"> Amazonas </Text>
                                <Text color="gray.400" mt="2rem"> América do Sul </Text>
                            </Box>
                            <Flex align="center" justify="center" ml="2rem">
                                <Img src="bandeira.jpg" w="30" h="30" borderRadius="30px" />
                            </Flex>
                        </Flex>
                    </Box>
                    <Box backgroundColor="white" mb="4rem"  mr="4rem" maxWidth="256px"   >
                        <Img src="asia.jpg" w="256px" />
                        <Flex ml="2rem">
                            <Box mt="2rem">
                                <Text color="gray.700" fontweight="bold"> Pequin </Text>
                                <Text color="gray.400" mt="2rem"> Ásia </Text>
                            </Box>
                            <Flex align="center" justify="center" ml="2rem">
                                <Img src="bandeira.jpg" w="30" h="30" borderRadius="30px" />
                            </Flex>
                        </Flex>
                    </Box>
                    <Box backgroundColor="white" mb="4rem"  mr="4rem" maxWidth="256px"   >
                        <Img src="americanorte.jpg" w="256px" />
                        <Flex ml="2rem">
                            <Box mt="2rem">
                                <Text color="gray.700" fontweight="bold"> Washington </Text>
                                <Text color="gray.400" mt="2rem"> América do Norte </Text>
                            </Box>
                            <Flex align="center" justify="center" ml="2rem">
                                <Img src="bandeira.jpg" w="30" h="30" borderRadius="30px" />
                            </Flex>
                        </Flex>
                    </Box>
                    <Box backgroundColor="white"  mb="4rem"  mr="4rem" maxWidth="256px" >
                        <Img src="africa.jpg" w="256px" />
                        <Flex ml="2rem">
                            <Box mt="2rem">
                                <Text color="gray.700" fontweight="bold"> Moçambique </Text>
                                <Text color="gray.400" mt="2rem"> África </Text>
                            </Box>
                            <Flex align="center" justify="center" ml="2rem">
                                <Img src="bandeira.jpg" w="30" h="30" borderRadius="30px" />
                            </Flex>
                        </Flex>
                    </Box>
                    <Box backgroundColor="white" mb="4rem" maxWidth="256px"  >
                        <Img src="oceania.jpg" w="256px" />
                        <Flex ml="2rem">
                            <Box mt="2rem">
                                <Text color="gray.700" fontweight="bold"> Sidney </Text>
                                <Text color="gray.400" mt="2rem"> Oceania </Text>
                            </Box>
                            <Flex align="center" justify="center" ml="2rem">
                                <Img src="bandeira.jpg" w="30" h="30" borderRadius="30px" />
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}