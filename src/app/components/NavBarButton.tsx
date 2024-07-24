import { Button, Link } from "@nextui-org/react";
import { AiOutlineHome } from "react-icons/ai";
import { CgComponents } from "react-icons/cg";
import { Gi3DStairs } from "react-icons/gi";
import { TbTools } from "react-icons/tb";
import UserDropdown from "./UserDropdown";

const navButton = [
  {
    id: 1,
    link: "/",
    color: "#fff",
    text: "#000",
    paddinX: "16px",
    icon: <AiOutlineHome size={24} />,
  },
  {
    id: 12,
    name: "Tools",
    link: "/Tools",
    color: "#F97316",
    icon: <TbTools size={24} />,
  },
  {
    id: 9,
    name: "3D",
    link: "/3D",
    color: "#8935FF",
    icon: <Gi3DStairs size={24} />,
  },
  {
    id: 14,
    name: "Components",
    link: "/Components",
    color: "#21C95F",
    icon: <CgComponents size={24} />,
  },
];
export default function MPage() {
  return (
    <div className="mt-[20px] flex  place-content-center">
      <div className="flex  flex-wrap items-center justify-center gap-2">
        {navButton.map((item) => (
          <div key={item.id} className="">
            <Button
              as={Link}
              href={item.link}
              startContent={item.icon}
              style={{
                backgroundColor: item.color,
                color: item.text,
                paddingLeft: item.paddinX,
                paddingRight: item.paddinX,
              }}
            >
              {" "}
              {item.name}
            </Button>
          </div>
        ))}
        <UserDropdown />
      </div>
    </div>
  );
}
