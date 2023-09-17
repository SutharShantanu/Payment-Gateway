import React from "react";

import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    CardFooter,
    ButtonGroup,
    Button,
} from "@chakra-ui/react";

const PayCard = ({ amount, img, handlePayment }) => {
    return (
        <Card maxW="sm" m="auto">
            <CardBody>
                <Image
                    src={img}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>

                    <Text color="blue.600" fontSize="2xl">
                        ₹{amount}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => handlePayment(amount)}>
                    Buy now
                </Button>
            </CardFooter>
        </Card>
    );
};

export default PayCard;
