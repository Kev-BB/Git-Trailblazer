import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Image,
  Input,
  
} from "@nextui-org/react";
export function UserSearch() {
  const [users, setUser] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    if (event.target.value === "") {
      setUser([]);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/search/users?q=${text}`)
      .then((response) => {
        if (response.status === 422) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data.items);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center items-center mt-12 w-screen flex-col gap-2.5 "> 
      <h1 className="title font-bold text-5xl max-[600px]:text-3xl mb-2" >Connect On Code.</h1>

        <Input
        size="sm"
          placeholder="Search Github User..."
          type="text"
          variant="bordered"
          onChange={handleChange}
    
          className="searchBar focus:outline-none focus:ring focus:ring-violet-300 max-[600px]:w-5/6"
        />
      </form>
      <div className="container flex flex-wrap justify-center items-center w-screen m-auto w-screen">
        {users.map((user) => {
          return (
            <Card className="py-4 card">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h3 className="font-bold text-large">{user.login}</h3>
                <Link
                  className="text-tiny uppercase font-bold"
                  href={user.html_url}
                  color="secondary"
                >
                  Check Out Their Profile
                </Link>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={user.avatar_url}
                  width={270}
                />
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
}