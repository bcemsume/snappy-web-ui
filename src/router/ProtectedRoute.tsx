import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { RouteProps } from "react-router";
import history from "../shared/History";
import { RootState } from "../redux/rootReducer";

interface Props extends RouteProps {
  authenticated: string | null;
}

class ProtectedRoute extends Route<Props> {
  componentDidMount() {
    if (!this.props.authenticated) {
      history.push("/login");
    }
  }
}

function mapStateToProps(state: RootState) {
  return {
    authenticated: localStorage.getItem("token"),
  };
}
export default connect(mapStateToProps)(ProtectedRoute);
