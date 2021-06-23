import Head from 'next/head';
import styles from 'styles/Home.module.css';
import { useAuth } from 'lib/auth';
import { Button, Heading, Text, Flex, Link } from '@chakra-ui/react';
import { Logo } from 'styles/icons';

export default function Home() {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      maxW="400px"
      margin="0 auto"
    >
      <Head>
        <title>Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo w={8} h={8} />
      <Text mb={4} mt={4}>
        <Text as="span" fontWeight="bold" display="inline">
          Fast Feedback
        </Text>
        {' is being built as part of '}
        <Link
          href="https://react2025.com"
          isExternal
          textDecoration="underline"
        >
          React 2025
         </Link>
        {`. It's the easiest way to add comments or reviews to your static site. It's still a work-in-progress, but you can try it out by logging in.`}
      </Text>
      {auth.user ? (
        <Button mt={2} size="sm" fontWeight="medium"  as="a" href="/dashboard">
          View Dashboard
        </Button>
      ) : (
        <Button mt={4}
            size="sm"
            fontWeight="medium"
            onClick={(e) => auth.signinWithGithub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
}
