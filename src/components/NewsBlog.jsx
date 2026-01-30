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
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="section-title text-center mb-12">
          <h2 className="text-primary mb-4">Latest News & Updates</h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">Stay informed about our latest projects and industry developments</p>
          <div className="section-title-underline"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {newsItems.map((item) => (
            <article key={item.id} className="premium-card overflow-hidden group">
              <div
                className="h-56 bg-cover bg-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mont font-bold text-secondary bg-secondary/15 px-3 py-1 rounded-full uppercase">
                    {item.category}
                  </span>
                  <time className="text-xs text-gray font-semibold">{new Date(item.date).toLocaleDateString()}</time>
                </div>
                <h3 className="text-lg md:text-xl font-mont font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray text-base leading-relaxed mb-6 line-clamp-3">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary font-bold hover:text-accent transition-all duration-300 group/link"
                >
                  Read More
                  <i className="fas fa-arrow-right ml-2 group-hover/link:translate-x-1 transition-transform duration-300"></i>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="btn-primary inline-block text-lg"
          >
            <i className="fas fa-bell mr-2"></i>
            Subscribe for Updates
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsBlog;