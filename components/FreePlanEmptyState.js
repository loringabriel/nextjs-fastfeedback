import { Heading, Flex, Text, Button } from '@chakra-ui/react';

import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius="8px"
      p={16}
      justify="center"
      align="center"
      direction="column"
    >
      <Heading size="md">Get feedback on your site instantly.</Heading>
      <Text>Start today, then grow with us 🌱</Text>
      <Button mt={6}>Upgrade to Starter</Button>
    </Flex>
  </DashboardShell>
);

export default FreePlanEmptyState;
