import { ModeToggle } from "./mode-toggle";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar = () => {
  // const searchParams = new URL(window.location.href).searchParams;
  // const venueId = searchParams.get("venueId");

  return (
    <nav className="fixed top-0 z-40 w-full shadow-md">
      <div className="container flex items-center justify-between px-3 py-4 ">
        <Menubar className="px-0 border-0 sm:hidden">
          <MenubarMenu>
            <MenubarTrigger>
              <Menu className="cursor-pointer " />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Schedule</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Delivery</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <div className="items-center flex-1 hidden ml-4 sm:flex">
          <Button variant="link" className="px-1">
            Schedule
          </Button>
          <Button variant="link" onClick={() => {}}>
            Delivery
          </Button>
        </div>

        <div className="flex">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
