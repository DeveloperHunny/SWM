import { Box } from "@chakra-ui/react";
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
			borderBottomWidth="1px"
			borderBottomStyle="solid"
			borderBottomColor="gray.200">
			Navbar
		</Box>
	);
};

export default Navbar;
