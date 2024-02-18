import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@nextui-org/react";

const Nav = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">GTB</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
        <Button variant="light" color="foreground" className="text-base" onPress={onOpen}>
            About
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    About
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Git-Trailblazer is a web application built using Next.js,
                      GitHub API, and Next UI. Its primary purpose is to allow
                      users to search for GitHub profiles by their usernames and
                      retrieve relevant user information. Here are the key
                      features:
                    </p>
                    <ul>
                      <li>
                        <p className="font-bold">User Search:</p> Users can
                        input a GitHub username and find information
                        about that user.
                      </li>
                      <li>
                        <p className="font-bold">Profile Insights:</p>{" "}
                        Git-Trailblazer displays details about a
                        user’s GitHub profile.
                      </li>
                      <li>
                        <p className="font-bold">Responsive Design:</p> The
                        user interface is designed using Next UI components,
                        ensuring a seamless experience across different devices.
                      </li>
                    </ul>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" variant="light" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" className="gtb" aria-current="page" color="secondary">
            GitTrailBlazer
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Button variant="light" color="foreground">
        <Link target="_blank" href="https://docs.github.com/en/rest?apiVersion=2022-11-28" className="text-inherit text-base">
            Github API
          </Link>
          </Button>
       
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
              <Link
                className="font-semibold"
                href="https://github.com/Kev-BB"
                target="_blank"
              >
                Kev-BB
              </Link>
            </DropdownItem>
            <DropdownItem key="website">
              <Link
                className=" text-inherit"
                href="https://kevbb.vercel.app/"
                target="_blank"
              >
                Website
              </Link>
            </DropdownItem>
            <DropdownItem key="team_settings">
              <Link
                className=" text-inherit"
                href="https://medium.com/@Kev-BB"
                target="_blank"
              >
                Blog
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
