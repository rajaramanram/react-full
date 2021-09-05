import React, { Component } from "react";
import { useHistory, withRouter } from "react-router-dom";
import Contactcls from "./Contactcls";

import { Link } from "react-router-dom";

class Namecls extends Component {
  render() {
    let name = "ragu";
    //const history = useHistory();

    //myFunction() {
    //this.props.history.push("/some/Path");
    //}
    const { history } = this.props;
    function myFunction(history) {
      history.push({
        pathname: "/contact",
        sample: { name: "working  Function history.push" },
      });
    }

    return (
      <div>
        <h1>Hi this is rajesh</h1>
        {/* <Contactcls name={name} /> */}
        <button name="contact" onClick={()=>myFunction(history)}>
          Function Button
        </button>
        <button
          name="contact"
          onClick={() =>
            this.props.history.push({
              pathname: "/contact",
              sample: { name: "working++++++++history.push" },
            })
          }
        >
          second button
        </button>
        <br />
        {/*<button name="contact" onClick={()=>history.push("contact")}></button>*/}
        <Link
          to={{
            pathname: "/contact",
            sample: {
              name: "working",
            },
          }}
        >
          Contact
        </Link>
      </div>
    );
  }
}

export default withRouter(Namecls);
