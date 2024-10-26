import React from "react";

import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

import { Content } from "../Content";
import { services, type ServiceType } from "./mock";

const ServiceItem: React.FC<ServiceType> = ({ title, image }) => {
  return (
    <div>
      <Box className="xl:size-[320px] lg:size-[350px] overflow-hidden">
        <Image src={image} alt={title} />
      </Box>
      <div>{title}</div>
    </div>
  );
};

export const SectionService: React.FC = () => {
  return (
    <section>
      <Content>
        <h2 className="text-center my-4">Special Menus</h2>
        <p></p>

        <SimpleGrid columns={{ lg: 2, xl: 3, md: 2, base: 1, sm: 1 }} gap={4}>
          {services.map((service) => {
            return (
              <GridItem key={service.id}>
                <ServiceItem {...service} />
              </GridItem>
            );
          })}
        </SimpleGrid>
      </Content>
    </section>
  );
};
