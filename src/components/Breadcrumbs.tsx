import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const location = useLocation();
  
  const defaultBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter(x => x);
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', path: '/' }
    ];

    pathnames.forEach((pathname, index) => {
      const path = '/' + pathnames.slice(0, index + 1).join('/');
      let name = pathname.charAt(0).toUpperCase() + pathname.slice(1);
      
      // Custom names for specific pages
      switch (pathname) {
        case 'about':
          name = 'Over Ons';
          break;
        case 'diensten':
          name = 'Diensten';
          break;
        case 'projecten':
          name = 'Projecten';
          break;
        case 'contact':
          name = 'Contact';
          break;
        case 'offerte':
          name = 'Offerte Aanvragen';
          break;
        default:
          name = pathname.charAt(0).toUpperCase() + pathname.slice(1);
      }
      
      breadcrumbs.push({ name, path });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items || defaultBreadcrumbs();

  // Generate structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://aqua-power.nl${item.path}`
    }))
  };

  // Don't show breadcrumbs on homepage
  if (location.pathname === '/') {
    return null;
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 py-3 text-sm">
            {breadcrumbItems.map((item, index) => (
              <li key={item.path} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-slate-400 mr-2" />
                )}
                
                {index === breadcrumbItems.length - 1 ? (
                  <span className="text-slate-900 font-medium flex items-center">
                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-slate-600 hover:text-slate-900 transition-colors flex items-center"
                  >
                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs; 