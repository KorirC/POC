const user = sessionStorage.getItem("user");
const AuthHeaders = {
    "Content-Type": "application/json",
    Authorization: `Basic ${user}`,
};
console.log(AuthHeaders);
export default AuthHeaders;
