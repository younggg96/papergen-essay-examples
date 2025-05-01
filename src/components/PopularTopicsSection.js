import React from "react";

const topics = [
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
];

export default function PopularTopicsSection() {
  return (
    <section className="section-6">
      <div className="div-block-47">
        <h2 className="h3-3 h3-text">Most Popular Topics</h2>
      </div>
      <div className="div-block-57">
        <div class="w-dyn-list grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto px-4">
          {topics.map((topic, index) => (
            <div role="list" className="w-dyn-items" key={index}>
              <div role="listitem" className="w-dyn-item">
                <a href="#" className="div-block-56 w-inline-block">
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
    </section>
  );
}
