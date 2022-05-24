import { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
import { LaunchItem } from './LaunchItem';
import * as API from '../services/launches';

export function LaunchList() {
const [launches, setLaunches] = useState([]);

useEffect(() => {
    API.getAllLaunches().then(setLaunches);
}, []);

return (
    <>
        <Heading as='h1' size='lg' m={4} align='center' >
            Launch Missions
        </Heading>
        <section>
            {launches.map(launch => (<LaunchItem key={launch.flight_number} {...launch} />))}
        </section>
    </>
    );
} 