import React from 'react';

import {HStack, Icon, Text, VStack} from "@chakra-ui/react";
import {CheckCircleIcon} from "@chakra-ui/icons";

import {AiOutlineExclamationCircle} from "react-icons/ai";

import Markdown from "@/components/Utilities/Markdown";

import {AnswerCorrectness} from "@/types/commands/AnswerCorrectness";

interface Props {
    correctness: AnswerCorrectness
}

const QuestionCorrectness: React.FC<Props> = ({ correctness }) => {

    return (
        <HStack
            spacing={{
                base: 2,
                md: 4
            }}
        >
            {
                correctness.correct != undefined && correctness.correct && (
                    <Icon
                        as={CheckCircleIcon}
                        color={'brand.500'}
                        boxSize={6}
                    />
                )
            }
            {
                correctness.correct != undefined && !correctness.correct && (
                    <Icon
                        as={AiOutlineExclamationCircle}
                        color={'red.500'}
                        boxSize={6}
                    />
                )
            }
            <VStack
                align={'start'}
                spacing={0}
            >
                {
                    correctness.correct != undefined && (
                        <Text
                            fontSize={{
                                base: 'xs',
                                md: 'md'
                            }}
                            color={correctness.correct ? 'green.500' : 'red.500'}
                            fontWeight={'semibold'}
                        >
                            {correctness.correct ? 'Correct!' : 'Incorrect!'}
                        </Text>
                    )
                }
                <Markdown>
                    {correctness.explanation}
                </Markdown>
            </VStack>
        </HStack>
    );
};

export default QuestionCorrectness;
