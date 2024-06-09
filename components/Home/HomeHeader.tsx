import React from 'react';
import { Text } from "@chakra-ui/react";
import useAuth from "@/hooks/useAuth";
import PageHeader from "@/components/Utilities/PageHeader";

const HomeHeader = () => {

    const { user } = useAuth();

    return (
        <PageHeader
            imageSrc={'/logo.png'}
            imageAlt={'Edu Chat Logo'}
            heading={
                <>
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
                    {
                        user && user.name && (
                            <Text
                                as='span'
                            >
                                , {user.name.split(' ')[0]}
                            </Text>
                        )
                    }

                </>
            }
            subheading={
                "Your AI-Powered Learning Copilot"
            }
        />
    );
};

export default HomeHeader;
