import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { RouteProps } from "react-router";
import history from "../shared/History";
import { RootState } from "../redux/rootReducer";
import { UserDetailState } from "../features/user/types";
import { getUser } from "../features/user/userSlice";

interface Props extends RouteProps {
  authenticated?: UserDetailState;
  getUser: () => void;
}

class ProtectedRoute extends Route<Props> {
  componentDidMount() {
    if (
      (this.props.authenticated?.data?.RestaurantID ?? 0) > 0 &&
      localStorage.getItem("token")
    )
      return;

    if (
      (this.props.authenticated?.data?.RestaurantID ?? 0) <= 0 &&
      !localStorage.getItem("token")
    ) {
      history.push("/login");
    } else if (!localStorage.getItem("token")) {
      debugger;
      this.props.getUser();
    }
  }
}

function mapStateToProps(state: RootState) {
  return {
    authenticated: state.user,
  };
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    getUser: dispatch(getUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
