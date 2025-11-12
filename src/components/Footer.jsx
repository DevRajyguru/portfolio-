export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 border-t border-gray-800 mt-auto">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-teal-400 font-semibold">Dev Rajyguru</span>. All rights reserved.
      </p>
    </footer>
  );
}
