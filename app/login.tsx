import { router } from "expo-router";
import {
  Button,
  ButtonIcon,
  ButtonText,
} from "@/components/ui/button";

import { useSession } from "@/provider/ctx";
import { Center } from "@/components/ui/center";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { ArrowLeftIcon } from "@/components/ui/icon";

export default function SignIn() {
  const { signIn } = useSession();
  const register = () => {
    signIn();
    router.replace("/");
  };

  return (
    <Center>
      <Box className="max-w-96 rounded-lg border border-background-300 p-5">
        <VStack space="md" className="pb-8">
          <Heading size="2xl" className="leading-8">
            Sign In
          </Heading>
          <Text size="lg">Welcome back! Sign in to continue.</Text>
        </VStack>
        <VStack space="lg">
          <Button
            size="lg"
            variant="solid"
            action="positive"
            onPress={register}
          >
            <ButtonText className="text-xl font-extrabold">Sign In</ButtonText>
          </Button>
          <Box className="flex flex-row">
            <Button variant="link" size="sm">
              <ButtonIcon as={ArrowLeftIcon} size="md" />
              <ButtonText>Sing Up</ButtonText>
            </Button>
          </Box>
        </VStack>
      </Box>
    </Center>
  );
}
