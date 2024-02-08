import { AppShell, Burger, Button, Flex, Group, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BiHomeCircle } from "react-icons/bi";
import { MdEventSeat } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

export function Navbar() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 100 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Title>Sudhee 2024</Title>
            <Group ml="xl" gap={0} visibleFrom="sm">
              <Link to="/">
                <Button
                  size="xl"
                  radius={"xl"}
                  mx={"md"}
                  leftSection={<BiHomeCircle />}
                >
                  Home
                </Button>
              </Link>
              <Link to="/events">
                <Button size="xl" radius={"xl"} leftSection={<MdEventSeat />}>
                  Events
                </Button>
              </Link>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Flex direction={"column"} align={"center"}>
          <Link to="/">
            <Button size="lg" radius={"xl"} my={"md"}>
              Home
            </Button>
          </Link>
          <Link to="/events">
            <Button size="lg" radius={"xl"}>
              Events
            </Button>
          </Link>
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
