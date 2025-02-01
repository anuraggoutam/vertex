export default function NotFound() {
  return (
    <section className="bg-[#101010] text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-6xl font-bold">404</h2>
        <p className="text-xl mt-4">Sorry, we couldn't find this page.</p>
        <a
          href="/"
          className="inline-block mt-4 px-4 py-2 text-lg font-bold bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Back to home
        </a>
      </div>
    </section>
  );
}
