import React from "react";
import { Button, Jumbotron } from "reactstrap";
import Login from "./Login";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <br />
          <h1 className="display-4">Welcome!</h1>
          <p className="lead">
            This a decentralized global platform for conducting examinations.
          </p>
          <hr className="my-2" />
          <p>Click here to know how the system works!</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </div>

        <div className="col-md-4">
          <br />
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;
