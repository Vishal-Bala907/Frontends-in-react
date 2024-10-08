export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg font-semibold">
          <strong>Daily Progress Tracker</strong> - A simple and effective tool
          designed to help you track your daily tasks, monitor productivity, and
          stay organized.
        </p>
        <div className="mt-4 space-x-4">
          <a
            href="https://github.com/Vishal-Bala907/Cafe-webb-App"
            className="text-gray-200 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://www.instagram.com/dev_vishalbala?igsh=MWU5eW56bmN4NGVqZg="
            className="text-gray-200 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-bala-4311a817a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-gray-200 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          &copy; 2024 Daily Progress Tracker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
