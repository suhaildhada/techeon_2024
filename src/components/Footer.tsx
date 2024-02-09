import { FaInstagram } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-[#020F1F]  text-white text-center p-5 flex flex-col gap-3">
      <p>Follow use on:</p>
      <div className="flex justify-center items-center gap-2">
        <a
          href="https://www.instagram.com/techeon_2024/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 justify-center bg-[#E1306C] p-2 rounded-lg"
        >
          <FaInstagram size={24} />
          <label>Instagram</label>
        </a>
      </div>
    </footer>
  );
}
