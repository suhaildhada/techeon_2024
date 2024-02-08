import { Button, Group, Image, Stack, Text, Title } from "@mantine/core";
import POSTER from "../assets/techeon-poster.jpg";
import { useMobile } from "../hooks/useMobile";
import { Link } from "react-router-dom";
export function Home() {
  const lg = useMobile("xl");

  return lg ? (
    <Stack align="center">
      <HeroPoster />
      <HeroText />
    </Stack>
  ) : (
    <Group justify="space-evenly" p={"md"}>
      <HeroText />
      <HeroPoster />
    </Group>
  );
}

const HeroPoster = () => {
  const md = useMobile("md");
  return (
    <div>
      <Image
        src={POSTER}
        w={`${md ? "300" : "600"}`}
        h={"auto"}
        radius={"md"}
        className="poster"
      ></Image>
    </div>
  );
};

const HeroText = () => {
  const md = useMobile("md");
  const size = md ? "2rem" : "2.5rem";
  return (
    <div>
      <Text size={size} my={"xs"}>
        Chaitanya Bharathi Institute of Technology,
      </Text>
      <Text size={size} my="xs">
        The Department of MCA,
      </Text>
      <Text size={size} my={"xs"}>
        Presents,
      </Text>
      <Title size={"3rem"} my={"md"} c={"orange"} className="underline">
        The Techeon Event
      </Title>
      <Link to="/events">
        <Button mt={"md"} size={md ? "md" : "xl"}>
          See Events
        </Button>
      </Link>
    </div>
  );
};
