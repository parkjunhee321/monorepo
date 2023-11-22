import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  return <div onClick={() => navigate("/login")}>메인이지롱잉</div>;
}
