import { AiOutlineHome } from "react-icons/ai";
import { CgColorPicker, CgComponents } from "react-icons/cg";
import { FaIcons } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { Gi3DStairs, GiInspiration } from "react-icons/gi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { ImBlog } from "react-icons/im";
import { IoMdColorPalette } from "react-icons/io";

import { MdOutlinePhotoCamera } from "react-icons/md";
import { SiLibrariesdotio } from "react-icons/si";
import { TbTools, TbTypography } from "react-icons/tb";

const navButton = [
  {
    id: 1,
    name: "Home",
    link: "/",
    color: "#fff",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    name: "Icons",
    link: "/Icons",
    color: "#2B6DFF",
    icon: <FaIcons />,
  },
  {
    id: 3,
    name: "Illustrations",
    link: "/Illustrations",
    color: "#20C928",
    icon: <CgColorPicker />,
  },
  {
    id: 4,
    name: "Photos",
    link: "/Photos",
    color: "#D41CF1",
    icon: <MdOutlinePhotoCamera />,
  },
  {
    id: 5,
    name: "Videos",
    link: "/Videos",
    color: "#EF2350",
    icon: <FiVideo />,
  },
  {
    id: 6,
    name: "Colors",
    link: "/Colors",
    color: "#FF36A2",
    icon: <IoMdColorPalette />,
  },
  {
    id: 7,
    name: "Backgrounds",
    link: "/Backgrounds",
    color: "#5345F7",
    icon: <HiOutlineColorSwatch />,
  },
  {
    id: 8,
    name: "Typography",
    link: "/Typography",
    color: "#FFAA1B",
    icon: <TbTypography />,
  },
  {
    id: 9,
    name: "3D",
    link: "/3D",
    color: "#8935FF",
    icon: <Gi3DStairs />,
  },
  {
    id: 10,
    name: "Libraries",
    link: "/Libraries",
    color: "#FF006E",
    icon: <SiLibrariesdotio />,
  },
  {
    id: 11,
    name: "Blogs",
    link: "/Blogs",
    color: "#00A1FF",
    icon: <ImBlog />,
  },
  {
    id: 12,
    name: "Tools",
    link: "/Tools",
    color: "#F97316",
    icon: <TbTools />,
  },
  {
    id: 13,
    name: "Inspirations",
    link: "/Inspirations",
    color: "#6366F1",
    icon: <GiInspiration />,
  },
  {
    id: 14,
    name: "Components",
    link: "/Components",
    color: "#21C95F",
    icon: <CgComponents />,
  },
];
export default function MPage() {
  return (
    <div className="mt-[20px]">
      <div className=""></div>
    </div>
  );
}
