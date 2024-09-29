import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import { useAllUsersById } from "../../hooks/use-all";
import { ButtonLink } from "../../button/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useParams } from "react-router-dom";
import FollowButton from "../../button/follow";

export function ProfileStatusPeople() {
    const { data } = useAllUsersById();
    const { userId } = useParams<{ userId: string }>();
    return (
        <>
            <ButtonLink to={"/"} textDecoration={'none'}>
                <Text
                    as={'h2'}
                    mt={'15px'}
                    px={'25px'}
                    display={'flex'}
                    color={'home.text'}
                    alignItems={'center'}
                    transition={"color 0.2s ease-in-out"}
                    _hover={{ color: 'nav.button.hoverText' }}>
                    <IoIosArrowRoundBack style={{ marginRight: '5px', fontSize: '30px' }} />✨ {data?.fullName} ✨</Text>
            </ButtonLink>
            <Box
                mt={'10px'}
                px={'25px'}
                alignItems={'center'}>
                <Image
                    width={'100%'}
                    height={'100px'}
                    display={'block'}
                    borderRadius='10px'
                    src='https://wallpapercave.com/wp/wp4566576.jpg' />

                <Box
                    mt={'-35px'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}>
                    <Image
                        alt=''
                        ms={'20px'}
                        boxSize='80px'
                        display={'block'}
                        borderRadius='500px'
                        border={'3px solid black'}
                        src='https://bit.ly/dan-abramov' />

                    <Text
                        mt={'50px'}
                        width={'25%'}
                        height={'28px'}
                        fontSize={'10px'}
                        fontWeight={'700'}
                        bg={'transparent'}>
                        <FollowButton userId={userId as any} />
                    </Text>
                </Box>

                <Box
                    mt={'10px'}
                    color={'home.title'}
                    bg={'transparent'}>
                    <Text
                        fontSize="16px"
                        fontWeight="bold"
                        bg={'transparent'}>✨ {data?.fullName} ✨</Text>

                    <Text
                        my={'1'}
                        fontSize="13px"
                        color={'home.link'}
                        bg={'transparent'}>@{data?.userName}</Text>

                    <Text
                        my="1"
                        fontSize="13px"
                        bg={'transparent'}>{data?.bio}</Text>

                    <HStack bg={'transparent'}>
                        <Text
                            fontSize="13px"
                            bg={'transparent'}>{data?.following}</Text>
                        <Text
                            as={'span'}
                            fontSize="13px"
                            color={'home.link'}
                            bg={'transparent'}> Following</Text>

                        <Text
                            fontSize="13px"
                            bg={'transparent'}>{data?.followers}</Text>
                        <Text
                            fontSize="13px"
                            as={'span'}
                            color={'home.link'}
                            bg={'transparent'}> Followers</Text>
                    </HStack>
                </Box>
            </Box>
        </>
    )
}