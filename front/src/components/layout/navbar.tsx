import { HamburgerIcon } from "@chakra-ui/icons";
import {
	Box,
	Center,
	Circle,
	Flex,
	Link,
	Menu,
	MenuButton,
	MenuGroup,
	MenuItem,
	MenuList,
	Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface INavbar {
	path: string;
}

const Navbar = ({ path }: INavbar) => {
	const router = useRouter();

	return (
		<Box
			as="nav"
			w="100%"
			textAlign="center"
			bg="white"
			py={4}
			px={10}
			borderBottomWidth="1px"
			borderBottomStyle="solid"
			borderBottomColor="gray.200">
			<Flex
				w="100%"
				m="auto"
				justifyContent="space-between"
				alignItems="center">
				<Box w="200px" h="50px" bg="gray.100">
					<Text>LOGO</Text>
				</Box>
				<Flex gap={4} alignItems="center">
					<Menu>
						<MenuButton
							as={Circle}
							size={10}
							transition="0.2s"
							_hover={{
								border: "1px solid black",
							}}>
							<Center>
								<HamburgerIcon />
							</Center>
						</MenuButton>
						<MenuList>
							<MenuGroup title="Service">
								<MenuItem>Menu 1</MenuItem>
								<MenuItem>Menu 2</MenuItem>
							</MenuGroup>
						</MenuList>
					</Menu>
					<Link href="#">로그인/회원가입</Link>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Navbar;
