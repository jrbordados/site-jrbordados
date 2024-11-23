import React from "react";

import { Rating } from "@/components/Rating";
import { Box, Grid, GridItem } from "@chakra-ui/react";

export const HeroContent: React.FC = () => {
  return (
    <Grid
      css={{
        gap: "1rem",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "stretch",
        zIndex: 3,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
      }}
      templateColumns="repeat(2, 1fr)"
    >
      <GridItem border={"1px dashed #fff"} alignSelf={"center"}>
        <h2 className="text-white mb-lg-2 mb-2">Delicious Steaks</h2>
        <div className="flex flex-wrap justify-items-center my-2">
          <Box color={{ base: "white", _dark: "red" }}>
            <Rating value={4} gap={2}>
              4/5
            </Rating>
          </Box>
        </div>
        <p className="text-white text-lg">1,206+ Customer ReviewsFrom</p>
      </GridItem>
      <GridItem border={"1px dashed #fff"}>Slider</GridItem>
    </Grid>
  );
};
