import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";

const Nav = () => {
  return (
    <Navbar shouldHideOnScroll>
    <NavbarBrand>
      <p className="font-bold text-inherit">GTB</p>
    </NavbarBrand>

    <NavbarContent  className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href="#">
          Features
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="#" className="gtb" aria-current="page" color="secondary">
        GitTrailBlazer
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Integrations
        </Link>
      </NavbarItem>
    </NavbarContent>

    <NavbarContent as="div" justify="end">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            size="sm"
            src="githubProfile.png"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Checkout my profile</p>
            <Link className="font-semibold" href="https://github.com/Kev-BB" target="_blank">Kev-BB</Link>
          </DropdownItem>
          <DropdownItem key="website">Website</DropdownItem>
          <DropdownItem key="team_settings">Blog</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  </Navbar>
  )
}

export default Nav