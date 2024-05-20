import { useTypedSelector } from "./redux";

const useAuth = () => {
  const { id, email } = useTypedSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    id,
  };
};

export default useAuth;
