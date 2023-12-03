import UserAvatar from "@/components/UserAvatar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

interface TopNavigationProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ open, setOpen }) => {
  return (
    <nav className="fixed left-0 right-0 top-0 flex h-16 items-center justify-between border-b border-b-white bg-black p-2">
      <div className="flex items-center  ">
        <Button
          onClick={() => setOpen((pre) => !pre)}
          className="rounded-full sm:hidden"
          variant="ghost"
          size="icon"
        >
          <Menu />
        </Button>
        <Link href={"/app"} className="mx-2 text-2xl">
          in<strong>1</strong>space<strong>.</strong>
        </Link>
      </div>
      <div>
        <UserAvatar />
      </div>
    </nav>
  );
};

export default TopNavigation;
