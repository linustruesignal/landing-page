export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-navy-900">True Signal Digital</h1>
        <p className="text-navy-600">AI Automation for San Antonio Businesses</p>
        <div className="flex gap-4 justify-center mt-8">
          <button className="bg-cta-500 hover:bg-cta-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Book a Demo
          </button>
          <button className="border-2 border-violet-500 text-violet-600 hover:bg-violet-50 px-6 py-3 rounded-lg font-semibold transition-colors">
            Learn More
          </button>
        </div>
        <div className="mt-8 flex gap-2 justify-center">
          <span className="bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm">
            ✓ Setup Complete
          </span>
          <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm">
            Phase 1A
          </span>
        </div>
      </div>
    </main>
  );
}
