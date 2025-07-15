// app/page.tsx
import lawsData from "@/app/data/laws";

const transformed = Object.keys(lawsData[0])
  .filter(key => key !== "Bill")
  .map(billId => {
    const billData: Record<string, string> = { Bill: billId };
    lawsData.forEach(row => {
      billData[row.Bill] = row[billId];
    });
    return billData;
  });

export default function Home() {
  // Transform row-based JSON into an array of law objects
  const transformed = Object.keys(lawsData[0])
    .filter((key) => key !== "Bill")
    .map((billId) => {
      const billData: Record<string, string> = { Bill: billId };
      lawsData.forEach((row) => {
        billData[row.Bill] = row[billId];
      });
      return billData;
    });

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">California AI Laws</h1>
      {transformed.map((law) => (
        <div
          key={law.Bill}
          className="mb-6 p-4 border border-gray-300 rounded-lg shadow"
        >
          <h2 className="text-xl font-semibold mb-2">{law.Bill}</h2>
          <p className="mb-1">
            <strong>Status:</strong> {law.Status}
          </p>
          <p className="mb-1">
            <strong>Effective:</strong> {law.Effective}
          </p>
          <p className="mb-1">
            <strong>Summary:</strong> {law.Summary}
          </p>
          <p className="mb-1">
            <strong>Link:</strong>{" "}
            <a
              href={law.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {law.Link}
            </a>
          </p>
          {/* You can add more fields like "Can apply to", etc., below here */}
        </div>
      ))}
    </main>
  );
}
