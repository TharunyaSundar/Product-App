import { Button, Container, Flex, HStack, Text, useColorMode, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box 
			bg={colorMode === "light" ? "whiteAlpha.900" : "gray.900"} 
			boxShadow="lg"
			py={3} 
			px={4} 
			borderRadius="lg"
			position="sticky"
			top="0"
			zIndex="10"
		>
			<Container maxW="1140px">
				<Flex
					h={16}
					alignItems="center"
					justifyContent="space-between"
					flexDir={{ base: "column", sm: "row" }}
				>
					<Text
						fontSize={{ base: "22px", sm: "28px" }}
						fontWeight="bold"
						textTransform="uppercase"
						textAlign="center"
						bgGradient="linear(to-r, #10b981, #3b82f6)"
						bgClip="text"
					>
						<Link to="/">Product Store 🛒</Link>
					</Text>

					<HStack spacing={3} alignItems="center">
						<Link to="/create">
							<Button>
								<PlusSquareIcon fontSize={20} />
							</Button>
						</Link>
						<Button onClick={toggleColorMode}>
							{colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
						</Button>
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
};

export default Navbar;
