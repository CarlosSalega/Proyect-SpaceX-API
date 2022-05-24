import { HiCalendar } from 'react-icons/hi';
import { Box, Flex, Text, Spacer, Tag, Button, Icon } from '@chakra-ui/react';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

export function LaunchItem(launch) {
    return (
        <Box bg='gray.200' p={4} m={4} borderRadius='lg' >
            <Flex>
                <Text fontSize='2xl' >
                    <strong>{launch.mission_name}</strong>
                </Text>
                <Spacer />
                <Tag p={2} colorScheme={launch.launch_success ? 'green' : 'red'} >
                    {launch.launch_success ? 'Success' : 'Failure'}
                </Tag>
            </Flex>
            <Flex align='center' >
                <Icon as={HiCalendar} color='gray.500' />
                <Text fontSize='sm' ml='2' color='gray.500' >
                {dayjs(launch.launch_date_local).locale('en').format('MMMM D, YYYY')}
                </Text>
            </Flex>
            <Button mt={2} colorScheme='purple' >
                More Details
            </Button>
        </Box>
    );
}