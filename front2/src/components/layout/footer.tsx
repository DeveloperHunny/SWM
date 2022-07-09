import React from "react";
import { Box } from "@chakra-ui/react";

interface IFooter {}

const Footer = ({ ...props }: IFooter) => {
	return (
		<Box
			as="footer"
			w="100%"
			textAlign="center"
			py={16}
			bg="gray.50"
			borderTopWidth="1px"
			borderTopStyle="solid"
			borderTopColor="gray.200">
			Footer
		</Box>
	);
};

export default Footer;
