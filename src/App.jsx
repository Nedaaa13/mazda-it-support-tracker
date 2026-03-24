export default function App() {
  const patchData = [
    { device: "Laptop-12", type: "Laptop", lastPatched: "Mar 10, 2026", status: "Updated", risk: "Low" },
    { device: "Laptop-18", type: "Laptop", lastPatched: "Feb 2, 2026", status: "Overdue", risk: "High" },
    { device: "Server-03", type: "Server", lastPatched: "Mar 15, 2026", status: "Due Soon", risk: "Medium" },
  ];

  const serverData = [
    { server: "VM-App-01", current: "Windows Server 2016", target: "Windows Server 2022", status: "In Progress", owner: "IT Ops" },
    { server: "VM-Test-02", current: "Ubuntu 20.04", target: "Ubuntu 22.04", status: "Pending", owner: "Student" },
    { server: "VM-DB-01", current: "Windows Server 2019", target: "Windows Server 2022", status: "Complete", owner: "Infra Team" },
  ];

  const learningTasks = {
    "To Learn": [
      "Review monthly patching checklist",
      "Understand server upgrade workflow",
      "Read intranet migration notes",
    ],
    "In Progress": [
      "Audit outdated laptops",
      "Validate migrated internal links",
    ],
    "Completed": [
      "Inventory test environment assets",
      "Draft knowledge base article",
    ],
  };

  const badgeStyle = (status) => {
    if (status === "Updated" || status === "Complete") return "bg-green-100 text-green-700";
    if (status === "Due Soon" || status === "In Progress") return "bg-yellow-100 text-yellow-700";
    if (status === "Overdue" || status === "Pending") return "bg-red-100 text-red-700";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Mazda IT Support Tracker</h1>
          <p className="text-gray-600 mt-2">
            Lightweight internal tracker for patching, server upgrades, and co-op task coordination.
          </p>
        </header>

        <div className="grid gap-6">
          <section className="bg-white rounded-2xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Patch Status</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-3">Device</th>
                  <th className="py-3">Type</th>
                  <th className="py-3">Last Patched</th>
                  <th className="py-3">Status</th>
                  <th className="py-3">Risk</th>
                </tr>
              </thead>
              <tbody>
                {patchData.map((item, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-3">{item.device}</td>
                    <td className="py-3">{item.type}</td>
                    <td className="py-3">{item.lastPatched}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded text-xs ${badgeStyle(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3">{item.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="bg-white rounded-2xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Server Upgrade Tracker</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-3">Server</th>
                  <th className="py-3">Current</th>
                  <th className="py-3">Target</th>
                  <th className="py-3">Status</th>
                  <th className="py-3">Owner</th>
                </tr>
              </thead>
              <tbody>
                {serverData.map((item, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-3">{item.server}</td>
                    <td className="py-3">{item.current}</td>
                    <td className="py-3">{item.target}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded text-xs ${badgeStyle(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3">{item.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="grid md:grid-cols-3 gap-6">
            {Object.entries(learningTasks).map(([col, tasks]) => (
              <div key={col} className="bg-white rounded-2xl shadow-sm border p-6">
                <h2 className="font-semibold mb-3">{col}</h2>
                <ul className="space-y-2 text-sm">
                  {tasks.map((task, i) => (
                    <li key={i} className="bg-gray-50 border rounded px-3 py-2">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="bg-white rounded-2xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Next Priorities</h2>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li>Patch overdue laptops</li>
              <li>Confirm VM-Test-02 upgrade</li>
              <li>Review test environment cleanup</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}