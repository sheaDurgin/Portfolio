export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* About Me Section */}
      <div className="bg-slate-950 rounded-lg p-8 m-4 space-y-1">
        <h2 className="text-white text-2xl font-bold mb-4">About Me</h2>
        <p className="text-white">
          Software Engineer in Portland Maine
        </p>
      </div>

      {/* Education Section */}
      <div className="bg-slate-950 rounded-lg p-8 m-4 space-y-1">
        <h2 className="text-white text-2xl font-bold mb-4">Education</h2>
        <p className="text-white">
          Bachelor of Science in Computer Science
        </p>
        <p className="text-white">
          University of Southern Maine &apos;24
        </p>
      </div>
    </div>
  );
}
