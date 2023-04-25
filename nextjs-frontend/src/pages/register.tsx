import {Box, Button, FormControl, FormLabel, Input} from "@chakra-ui/react";

export default function Register() {

    return (
        <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                width="400px"
                p={8}
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg"
                textAlign="center"
            >
                <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Enter your email address" />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Enter your password" />
                </FormControl>

                <Button colorScheme="teal" variant="solid" mt={4}>
                    Register
                </Button>
            </Box>
        </Box>
    );
}