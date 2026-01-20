import React from 'react';

const NewsBlog = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Cliberduche Expands Equipment Fleet with Latest Technology',
      excerpt: 'Investment in modern machinery enhances our capability for large-scale civil engineering projects.',
      date: '2026-01-15',
      category: 'Company News',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Successful Completion of Major Infrastructure Project',
      excerpt: 'Delivered on-time and within budget for commercial development in Laguna.',
      date: '2026-01-10',
      category: 'Project Update',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Environmental Compliance Excellence Recognized',
      excerpt: 'Received commendation for sustainable land development practices.',
      date: '2026-01-05',
      category: 'Awards',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-20 bg-light">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-2">Latest News & Updates</h2>
          <p className="text-gray">Stay informed about our latest projects and industry developments</p>
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <time className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</time>
                </div>
                <h3 className="text-xl font-mont font-semibold text-dark mb-3 hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:text-primary-dark transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="bg-primary text-white px-8 py-3 rounded-lg shadow-md hover:bg-primary-dark transition-colors font-medium"
          >
            Subscribe for Updates
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsBlog;