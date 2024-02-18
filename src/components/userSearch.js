import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Image,

  
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
      <form onSubmit={handleSubmit}>
      <h1 className="title text-purple-600" >Github User Search.</h1>

        <input
          placeholder="Search user..."
          type="text"
          onChange={handleChange}
          className="searchBar"
        />
      </form>
      <div className="container flex flex-wrap justify-center items-center w-screen">
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

{
  /* <Card bg="dark" className="card" key={user.id}>
<Card.Body>
  <div className="content">
    <Card.Link className="link" href={user.html_url}>
      {user.login}
    </Card.Link>
    <Card.Text style={{ width: "80%" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec id tempus elit, vitae sollicitudin dui. Etiam ut magna
      sed nibh tincidunt bibendum et sed odio. Praesent vitae erat
      tellus.
    </Card.Text>
  </div>
  <Card.Img
    className="card-img"
    variant="left"
    src={user.avatar_url}
  />
</Card.Body>
</Card> */
}
