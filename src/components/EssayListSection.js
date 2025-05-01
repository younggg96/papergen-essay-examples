import React from "react";

const essays = [
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
];

export default function EssayListSection() {
  return (
    <section className="section-6">
      <div className="div-block-47">
        <h2 className="h3-3 h3-text">Latest Essay Examples</h2>
      </div>
      <div>
        <div className="w-dyn-list">
          <div role="list" className="collection-list-6 w-dyn-items">
            {essays.map((essay, index) => (
              <div role="listitem" className="w-dyn-item" key={index}>
                <a href="#" className="div-block-53 w-inline-block">
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
    </section>
  );
}
