import { ChartBarIcon } from "@phosphor-icons/react";
import "./Header.css";
import { useSetAtom } from "jotai";
import { modalOpenAtom } from "../../store/atoms";
function Header() {
  const setModalOpen = useSetAtom(modalOpenAtom);
  return (
    <div className="header-container">
      <h1 className="header">WORDLE</h1>
      <ChartBarIcon
        className="stat-icon"
        size={32}
        onClick={() => {
          setModalOpen(true);
        }}
      />
    </div>
  );
}
export default Header;
