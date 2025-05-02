import React, { useState } from "react";

// Mock API function to simulate data fetching
const fetchEssays = () => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // Randomly succeed or fail to demonstrate error handling
      const shouldSucceed = Math.random() > 0.3;
      
      if (shouldSucceed) {
        resolve([
          {
            title:
              "Proactive Threat Detection and Continuous Authorization system Business Plan",
            summary:
              "Leverages AI for real-time cybersecurity, scalable growth, risk mitigation, and compliance management.",
            reviewer: "Yukina L.",
            published: "February 21, 2025",
          },
          {
            title: "Amazon's Investment Potential: A Comprehensive Stock Pitch",
            summary: "Explore Amazon's financials, strategy, and market performance.",
            reviewer: "Yukina L.",
            published: "March 19, 2025",
          },
          {
            title: "The Impact of Artificial Intelligence on Modern Healthcare",
            summary: "Analysis of how AI technologies are transforming patient care and medical research.",
            reviewer: "James H.",
            published: "April 5, 2025",
          },
        ]);
      } else {
        reject(new Error("Failed to fetch essays"));
      }
    }, 1500);
  });
};

export default function EssayListSection() {
  const [essays, setEssays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchEssays = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await fetchEssays();
      setEssays(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section-6">
      <div className="div-block-47">
        <h2 className="h3-3 h3-text">Latest Essay Examples</h2>
        <button 
          onClick={handleFetchEssays}
          className="px-4 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Fetch Essays"}
        </button>
      </div>
      
      {isLoading && (
        <div className="text-center py-8">
          <p className="mt-4 text-gray-600">Loading essays...</p>
        </div>
      )}
      
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4"
          role="alert"
        >
          <p className="font-bold">Error!</p>
          <p>{error}</p>
          <p className="mt-2">Please try again.</p>
        </div>
      )}
      
      {!isLoading && !error && essays.length > 0 && (
        <div>
          <div className="w-dyn-list">
            <div role="list" className="collection-list-6 w-dyn-items">
              {essays.map((essay, index) => (
                <div role="listitem" className="w-dyn-item" key={index}>
                  <a href="#" className="div-block-53 w-inline-block w-full">
                    <div className="div-block-54">
                      <h3 className="heading-20">{essay.title}</h3>
                      <div className="text-block-33">{essay.summary}</div>
                    </div>
                    <div className="div-block-52">
                      <div className="text-block-30">
                        Proofread, edited, and reviewed by {essay.reviewer}
                      </div>
                      <div className="div-block-51">
                        <div className="text-block-32">
                          Published: {essay.published}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {!isLoading && !error && essays.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">
            No essays available. Click the button to fetch essays.
          </p>
        </div>
      )}
    </section>
  );
}
