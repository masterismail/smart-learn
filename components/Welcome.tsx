import React from 'react';

import { Heading, Image, Text, VStack } from "@chakra-ui/react";

const Welcome = () => {
    return (
        <VStack
            gap={{
                base: 2,
            }}
        >
            <Image
                src={'/logo.png'}
                boxSize={'100px'}
                alt={'Edu Chat Logo'}
            />
            <Heading
                textAlign={'center'}
                size={{
                    base: 'md',
                    md: 'lg'
                }}
            >
                <Text
                    as='span'
                >
                    Welcome to Smart
                </Text>
                <Text
                    as='span'
                    color={'brand.500'}
                >
                    Learn
                </Text>
            </Heading>
            <Text
                textAlign={'center'}
                fontSize={{
                    base: 'sm',
                    md: '2xl'
                }}
                fontWeight={'semibold'}
                opacity={0.5}
            >
                Your Personal AI-Powered Tutor
            </Text>
        </VStack>
    );
};

export default Welcome;
