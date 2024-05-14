export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* About Me Section */}
      <div className="bg-slate-950 rounded-lg p-8 m-4 space-y-1">
        <h2 className="text-white text-3xl font-bold mb-4">About Me</h2>
        <p className="text-white text-lg">
          Software Engineer in Portland Maine
        </p>
      </div>

      {/* Education Section */}
      <div className="bg-slate-950 rounded-lg p-8 m-4 space-y-1">
        <h2 className="text-white text-3xl font-bold mb-4">Education</h2>
        <p className="text-white text-lg">
          Bachelor of Science in Computer Science
        </p>
        <p className="text-white text-lg">
          University of Southern Maine &apos;24
        </p>
      </div>
    </div>
  );
}
