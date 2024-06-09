import React from 'react';

import {Box, HStack} from "@chakra-ui/react";

import Markdown from "@/components/Utilities/Markdown";
import QuestionButtons from "@/components/Chat/Message/QuestionButtons";

import {TextBasedQuestion as TextBasedQuestionType} from "@/types/commands/TextBasedQuestion";
import {Command} from "@/types/commands/Command";

interface Props {
    textBasedQuestion: TextBasedQuestionType,
    promptWithCommand: (command: Command<any>) => void,
    answered: boolean
}

const TextBasedQuestion: React.FC<Props> = ({ textBasedQuestion, promptWithCommand, answered }) => {
    return (
        <HStack
            w={'100%'}
        >
            <Box
                flex={1}
            >
                <Markdown>
                    {`***${textBasedQuestion.question}***`}
                </Markdown>
            </Box>
            <QuestionButtons
                promptWithCommand={promptWithCommand}
                answered={answered}
            />
        </HStack>
    );
};

export default TextBasedQuestion;
