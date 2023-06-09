import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";

import { useEffect } from "react";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";
import { IoPawOutline } from "react-icons/io5";
import NavItem from "../components/NavItem";

import Dicon from "../public/icons/d_icon.png";
import Desicon from "../public/icons/dicon.png";
import listing from "../public/icons/listing.png";
import balance from "../public/icons/balance.png";

import Raffle from "../public/Raffle.png";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("small");
  const [navSize1, changeNavSize1] = useState("small");

  useEffect(() => {
    // window.matchMedia('(min-width: 768px)').addListener(handler);
    var x = window.matchMedia("(max-width: 700px)");
    if (x.matches) {
      changeNavSize("large");
    }
  }, []);

  return (
    <Flex
      // pos="sticky"
      onMouseEnter={() => changeNavSize("large")}
      onMouseLeave={() => changeNavSize("small")}
      pos="absolute"
      left="5"
      // h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
      className="test1 fmdn"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
        className="test"
      >
        {/* <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                /> */}

        {/* {FiHome} */}
        {/* as={icon} */}
        <NavItem
          navSize={navSize}
          navSize1={navSize1}
          icon={Dicon}
          clname="Dashboard"
          title="Dashboard"
          c_path="/"
        />
        <NavItem
          navSize={navSize}
          navSize1={navSize1}
          icon={Desicon}
          clname="MarketPlace"
          // title="MarketPlace"
          title="MarketPlace"
          c_path="Marketplace"
        />
        <NavItem
          navSize={navSize}
          navSize1={navSize1}
          icon={listing}
          clname="SwapCoin"
          title="SwapCoin"
          c_path="SwapCoin"
        />
        {/* <NavItem
          navSize={navSize}
          navSize1={navSize1}
          icon={listing}
          title="Mutant_Listings"
          c_path="stake"
        /> */}
        <NavItem
          navSize={navSize}
          navSize1={navSize1}
          icon={balance}
          clname="UserBalance"
          title="UserBalance"
          c_path="Balance"
        />

        <NavItem
          navSize={navSize}
          navSize1={navSize1}
          icon={Raffle}
          clname="Raffle"
          title="Raffle"
          c_path="Raffle"
        />
        {/* <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" />
                <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" /> */}
        {/* <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" />
                <NavItem navSize={navSize} icon={FiSettings} title="Settings" /> */}
      </Flex>

      {/* <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex> */}
    </Flex>
  );
}
