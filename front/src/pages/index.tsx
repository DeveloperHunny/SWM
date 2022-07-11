import React, { useState } from "react";
import type { NextPage } from "next";
import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	Grid,
	GridItem,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Link,
	Stack,
	Text,
} from "@chakra-ui/react";
import {
	BellIcon,
	CheckIcon,
	CopyIcon,
	EditIcon,
	PhoneIcon,
	Search2Icon,
	SearchIcon,
} from "@chakra-ui/icons";

const Home: NextPage = () => {
	const [searchOpt, setSearchOpt] = useState<boolean>(true);

	const handleSearchOpt = () => {
		setSearchOpt(!searchOpt);
	};

	return (
		<>
			<Box
				w="100%"
				h="100vh"
				textAlign="center"
				bgImage="linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),url('/images/intro_bgImg.jpg')"
				bgRepeat="no-repeat"
				bgPosition="center"
				bgSize="cover">
				<Box w="35%" h="100%" margin="auto" color="white" py={48}>
					<Text fontSize="5xl">
						판소리에서 <br />
						<span style={{ color: "orange" }}> 요약된 판례</span>를 통해 원하는
						판례를 <br />
						빠르게 찾아보세요.
					</Text>
					<Flex
						w="100%"
						mt={12}
						justify="center"
						align="center"
						direction="column">
						<ButtonGroup variant="solid" spacing="4">
							<Button
								bg="transparent"
								borderRadius="2em"
								isActive={searchOpt}
								_active={{ bg: "rgba(255,255,255,0.36)" }}
								_hover={{}}
								onClick={handleSearchOpt}>
								키워드 검색{" "}
							</Button>
							<Button
								bg="transparent"
								borderRadius="2em"
								isActive={!searchOpt}
								_active={{ bg: "rgba(255,255,255,0.36)" }}
								_hover={{}}
								onClick={handleSearchOpt}>
								{" "}
								사례 검색{" "}
							</Button>
						</ButtonGroup>
						<InputGroup size="lg" mt={8} w="80%">
							<InputLeftElement
								pointerEvents="none"
								children={<SearchIcon color="black" />}
							/>
							<Input
								borderRadius="2em"
								bg="white"
								color="black"
								placeholder="판례를 검색하세요."
							/>
						</InputGroup>
					</Flex>
				</Box>
			</Box>
			<Box w="100%" h="100vh" textAlign="center">
				<Flex w="70%" h="100%" direction="column" align="center" margin="auto">
					<Text fontSize="5xl" mt={48}>
						{" "}
						판례 검색, 판소리 하나로 끝!
					</Text>
					<ButtonGroup mt={8} size="md">
						<Button borderRadius="2em" px={8}>
							{" "}
							판소리의 다양한 기능 살펴보기{" "}
						</Button>
						<Button borderRadius="2em" px={8} colorScheme={"orange"}>
							{" "}
							지금 가입하고 이용하기{" "}
						</Button>
					</ButtonGroup>
					<Grid
						mt={24}
						w="100%"
						templateColumns="repeat(3, 1fr)"
						gap={8}
						textAlign="left">
						<GridItem
							w="100%"
							border="1px solid gray"
							borderRadius={10}
							py={12}
							px={12}>
							<Flex w="100%" h="100%" direction="column">
								<CopyIcon color="gray.700" w={24} h={24} />

								<Text color="orange" mt={32} fontSize={48}>
									국내 최고
								</Text>
								<Text fontSize={48}>판례 제공</Text>
								<Text mt={4}>
									국내에서 가장 많은 판례를 제공합니다.
									<br />
									특히 가장 많은 최신의 하급심판례를 만나실 수 있습니다.
									전문판례의 몇 배에 해당하는 미리보기 판례도 이유를 대부분
									포함하고 있어 유용합니다.
								</Text>
							</Flex>
						</GridItem>
						<GridItem
							w="100%"
							border="1px solid gray"
							borderRadius={10}
							py={12}
							px={12}>
							<Flex w="100%" h="100%" direction="column">
								<Search2Icon color="gray.700" w={24} h={24} />

								<Text color="orange" mt={32} fontSize={48}>
									AI 기반
								</Text>
								<Text fontSize={48}>판례 검색</Text>
								<Text mt={4}>
									판례 검색 결과를 쟁점별로 묶어서 보여주는 쟁점별 판례 보기,
									판결문 중 핵심문장을 하이라이트 해주는 AI 요점보기, 검색한
									판례와 관련도 높은 판례를 보여주는 AI 유사판례 등 고도화된
									기능으로 업무에 효율을 더합니다.
								</Text>
							</Flex>
						</GridItem>
						<GridItem
							w="100%"
							border="1px solid gray"
							borderRadius={10}
							py={12}
							px={12}>
							<Flex w="100%" h="100%" direction="column">
								<BellIcon color="gray.700" w={24} h={24} />

								<Text color="orange" mt={32} fontSize={48}>
									관심 키워드
								</Text>
								<Text fontSize={48}>알림 제공</Text>
								<Text mt={4}>
									관심있는 키워드별 관련 유사 판례를 제공합니다.
									<br />
									특히 가장 많은 최신의 하급심판례를 만나실 수 있습니다.
									전문판례의 몇 배에 해당하는 미리보기 판례도 이유를 대부분
									포함하고 있어 유용합니다.
								</Text>
							</Flex>
						</GridItem>
					</Grid>
				</Flex>
			</Box>
			<Box w="100%" h="100vh" textAlign="center">
				<Box
					w="100%"
					h="50%"
					background="blackAlpha.200"
					border="1px solid black">
					<Text fontSize={48}>추후에 들어갈 내용 구상</Text>
				</Box>
				<Box w="100%" h="50%" border="1px solid black" textAlign="left">
					<Flex w="60%" h="100%" margin="auto" py={32}>
						<Text flex={1} fontSize={52}>
							{" "}
							판소리로 판례 찾기를 <br /> 더 효율적으로
						</Text>
						<Box flex={1}>
							<Text fontSize={16} mb={12}>
								변호사 등 인증회원에게는 입력한 서면의 사실관계 또는 쟁점과
								유사한 판례와 법령을 찾아주는
								<span style={{ fontWeight: "bolder" }}> 키워드로 검색</span>,
								원하는 판례를 하루내로 전달해주는
								<span style={{ fontWeight: "bolder" }}> 판례 요청</span>
								기능을 제공합니다. 지금 가입하시고, 업무 효율을 높여보세요.
							</Text>
							<Link
								href="#"
								bg="orange"
								borderRadius="2em"
								color="white"
								px={8}
								py={4}
								fontSize={16}>
								가입하고 무료로 이용하기
							</Link>
						</Box>
					</Flex>
				</Box>
			</Box>
		</>
	);
};

export default Home;
