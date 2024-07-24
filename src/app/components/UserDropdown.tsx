"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";

import { CgColorPicker } from "react-icons/cg";
import { FaIcons } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { GiHamburgerMenu, GiInspiration } from "react-icons/gi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { ImBlog } from "react-icons/im";
import { IoMdColorPalette } from "react-icons/io";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { SiLibrariesdotio } from "react-icons/si";
import { TbTypography } from "react-icons/tb";
export default function App() {
  const items = [
    {
      id: 2,
      name: "Icons",
      link: "/Icons",
      color: "#2B6DFF",
      paddinX: "70px",
      icon: <FaIcons size={24} />,
    },
    {
      id: 3,
      name: "Illustrations",
      link: "/Illustrations",
      color: "#20C928",
      paddinX: "70px",
      icon: <CgColorPicker size={24} />,
    },
    {
      id: 4,
      name: "Photos",
      link: "/Photos",
      color: "#D41CF1",
      paddinX: "70px",
      icon: <MdOutlinePhotoCamera size={24} />,
    },
    {
      id: 5,
      name: "Videos",
      link: "/Videos",
      color: "#EF2350",

      icon: <FiVideo size={24} />,
    },
    {
      id: 6,
      name: "Colors",
      link: "/Colors",
      color: "#FF36A2",

      icon: <IoMdColorPalette size={24} />,
    },
    {
      id: 7,
      name: "Backgrounds",
      link: "/Backgrounds",
      color: "#5345F7",

      icon: <HiOutlineColorSwatch size={24} />,
    },
    {
      id: 8,
      name: "Typography",
      link: "/Typography",
      color: "#FFAA1B",

      icon: <TbTypography size={24} />,
    },
    {
      id: 10,
      name: "Libraries",
      link: "/Libraries",
      color: "#FF006E",
      icon: <SiLibrariesdotio size={24} />,
    },
    {
      id: 11,
      name: "Blogs",
      link: "/Blogs",
      color: "#00A1FF",

      icon: <ImBlog size={24} />,
    },
    {
      id: 13,
      name: "Inspirations",
      link: "/Inspirations",
      color: "#6366F1",
      icon: <GiInspiration size={24} />,
    },
  ];

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="success" startContent={<GiHamburgerMenu />}>
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <DropdownItem key={item.id} textValue="Value">
            <div className="">
              <Button
                as={Link}
                href={item.link}
                startContent={item.icon}
                className="w-full "
                style={{
                  backgroundColor: item.color,
                }}
              >
                {" "}
                {item.name}
              </Button>
            </div>
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
