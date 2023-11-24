import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  return <div onClick={() => navigate("/home")}>로그인 페이지</div>;
}
