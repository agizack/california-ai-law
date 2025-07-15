import laws from '../data/laws.json';

export default function Home() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI Compliance Tool</h1>
      <p className="mb-4">Explore current California AI laws relevant to your use case.</p>
      
      {laws.map((law, index) => (
        <div key={index} className="border rounded-lg p-4 mb-6 shadow">
          <h2 className="text-xl font-semibold mb-2">{law["Bill"]}</h2>
          <p><strong>Status:</strong> {law["Status"]}</p>
          <p><strong>Effective:</strong> {law["Effective"]}</p>
          <p><strong>Summary:</strong> {law["Summary"]}</p>
          <p><strong>Applies to:</strong> {law["Can apply to"]}</p>
          <p><strong>Industries:</strong> {law["Potentially affected Industries"]}</p>
          <p><strong>Steps:</strong> {law["Recommended steps"]}</p>
          <p><strong>Penalties:</strong> {law["Potential Penalties"]}</p>
          <p><strong>Risk:</strong> {law["Potential Risk"]}</p>
          <p><strong>Tags:</strong> {law["Tags"]}</p>
          <p><strong>Compliance audience:</strong> {law["Who should comply"]}</p>
          <p><strong>Source:</strong> {law["Source"]}</p>
          <p><strong>Citation:</strong> {law["Citation"]}</p>
          <p><strong>Enforced by:</strong> {law["Potentially enforced by"]}</p>
          <a href={law["Link"]} target="_blank" className="text-blue-600 underline mt-2 inline-block">Read full text</a>
        </div>
      ))}
    </main>
  );
}

