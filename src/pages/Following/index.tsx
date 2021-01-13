import React, { useMemo } from "react";
import { FlatList, View } from "react-native";

import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Title from "../../components/Title";
import CategoryList from "../../components/CategoryList";

import { Wrapper, Container, Main } from "./styles";

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const { data, indices } = useMemo(() => {
    const items: Item[] = [
      {
        key: "PAGE_HEADING",
        render: () => <Heading>Following</Heading>,
      },
      {
        key: "FOLLOWING_CATEGORIES",
        render: () => <Title>Followed Categories</Title>,
        isTitle: true,
      },
      {
        key: "C1",
        render: () => <CategoryList />,
      },
      {
        key: "LIVE_CHANNELS",
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },
      {
        key: "C2",
        render: () => <View />,
      },
      {
        key: "CONTINUE_WATCHING",
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },
      {
        key: "C3",
        render: () => <View />,
      },
      {
        key: "OFFLINE_CHANNELS",
        render: () => <View />,
        isTitle: true,
      },
      {
        key: "C4",
        render: () => <View />,
      },
    ];

    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Container>
          <Header />
          <Main>
            <FlatList<Item>
              data={data}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => item.render()}
              stickyHeaderIndices={indices}
              //Refresh effect
              onRefresh={() => {}}
              refreshing={false}
            />
          </Main>
        </Container>
      </Wrapper>
    </>
  );
};

export default Following;
