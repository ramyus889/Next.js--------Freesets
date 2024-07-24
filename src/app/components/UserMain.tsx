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

const marquee = [
  {
    id: 2,
    link: "/Icons",
    icon: <FaIcons size={30} />,
  },
  {
    id: 3,
    link: "/Illustrations",
    icon: <CgColorPicker size={30} />,
  },
  {
    id: 4,
    link: "/Photos",
    icon: <MdOutlinePhotoCamera size={30} />,
  },
  {
    id: 5,
    link: "/Videos",
    icon: <FiVideo size={30} />,
  },
  {
    id: 6,
    link: "/Colors",
    icon: <IoMdColorPalette size={30} />,
  },
  {
    id: 7,
    link: "/Backgrounds",
    icon: <HiOutlineColorSwatch size={30} />,
  },
  {
    id: 8,
    link: "/Typography",
    icon: <TbTypography size={30} />,
  },
  {
    id: 9,
    link: "/3D",
    icon: <Gi3DStairs size={30} />,
  },
  {
    id: 10,
    link: "/Libraries",
    icon: <SiLibrariesdotio size={30} />,
  },
  {
    id: 11,
    link: "/Blogs",
    icon: <ImBlog size={30} />,
  },
  {
    id: 12,
    link: "/Tools",
    icon: <TbTools size={30} />,
  },
  {
    id: 13,
    link: "/Inspirations",
    icon: <GiInspiration size={30} />,
  },
  {
    id: 14,
    link: "/Components",
    icon: <CgComponents size={30} />,
  },
];
export default function MPage() {
  return (
    <div className="">
      <div className="mt-[200px]  flex place-content-center">
        <div className="flex max-w-[900px] flex-col items-center gap-1">
          <div className="text-[100px]">Freesets</div>
          {/* <div className="w-full">
            <Marquee pauseOnHover>
              {marquee.map((item) => (
                <Button
                  as={Link}
                  href={item.link}
                  key={item.id}
                  className="bg-transparent  px-[20px] text-[20px]"
                >
                  {item.icon}
                </Button>
              ))}
            </Marquee>
          </div> */}
        </div>
      </div>
    </div>
  );
}
