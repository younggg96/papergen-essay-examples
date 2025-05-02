import React, { useState } from "react";

// Mock API function to simulate data fetching
const fetchTopics = () => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      resolve([
        "Geography",
        "Sports",
        "Religion",
        "Life",
        "Nutrition",
        "Law",
        "Entertainment",
        "Crime",
        "Philosophy",
        "Politics",
        "Environment",
        "Sociology",
        "Science",
        "Health",
        "Psychology",
        "Literature",
        "Technology",
        "History",
        "Culture",
        "Education",
        "Business",
        "Economics",
        "Media",
        "Art",
        "Government",
      ]);
    }, 1500);
  });
};

export default function PopularTopicsSection() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    handleFetchTopics();
  }, []);

  const handleFetchTopics = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchTopics();
      setTopics(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section-6">
      <div className="div-block-47">
        <h2 className="h3-3 h3-text">Most Popular Topics</h2>
        <button
          onClick={handleFetchTopics}
          className="px-4 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Fetch Topics"}
        </button>
      </div>

      {isLoading && (
        <div className="text-center py-8">
          <p className="mt-4 text-gray-600">Loading topics...</p>
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

      {!isLoading && !error && topics.length > 0 && (
        <div className="div-block-57 w-full mx-auto">
          <div className="w-dyn-list grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto px-4">
            {topics.map((topic, index) => (
              <div role="list" className="w-dyn-items" key={index}>
                <div role="listitem" className="w-dyn-item">
                  <a href="#" className="div-block-56 w-inline-block w-full">
                    <div className="div-block-59">
                      <div className="faq-item-question">
                        <h1 className="sub-h4 faq-item-sh4">{topic}</h1>
                        <img
                          loading="lazy"
                          src="images/CaretRight.svg"
                          alt="icon"
                          className="learn-more-link-arrow"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!isLoading && !error && topics.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">
            No topics available. Click the button to fetch topics.
          </p>
        </div>
      )}
    </section>
  );
}
