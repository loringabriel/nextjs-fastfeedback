import Head from 'next/head';
import styles from 'styles/Home.module.css';
import { useAuth } from 'lib/auth';
import { Button, Heading, Text, Code, Flex } from '@chakra-ui/react';
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
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo w={8} h={8} />
      {auth.user ? (
        <Button mt={2} as="a" href="/dashboard">
          View Dashboard
        </Button>
      ) : (
        <Button mt={2} size="sm" onClick={(e) => auth.signinWithGithub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
}
