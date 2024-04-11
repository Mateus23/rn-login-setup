import AuthNavigator from "./AuthNavigator";
import NoAuthNavigator from "./NotAuthNavigator";

const MainNavigator = () => {
    const isAuth = false;
    return (
            isAuth ?
            <AuthNavigator /> :
            <NoAuthNavigator />
    )
}

export default MainNavigator;