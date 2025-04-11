import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Settings, 
  ShoppingCart, 
  TrendingUp, 
  Warehouse, 
  PieChart,
  Users,
  Home,
  Menu,
  X
} from 'lucide-react';
import { useIsMobile } from '../../hooks/UseMobile';

const Sidebar = () => {
  const location = useLocation();
  const isMobileView = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);
  
  const isActive = (path) => location.pathname === path;
  
  const navItems = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Demand Forecast', path: '/demand-forecast', icon: TrendingUp },
    { name: 'Inventory Monitoring', path: '/inventory-monitoring', icon: Warehouse },
    { name: 'Pricing Optimization', path: '/pricing-optimization', icon: ShoppingCart },
    { name: 'Agent Simulation', path: '/agent-simulation', icon: Users },
    { name: 'Analytics', path: '/analytics', icon: BarChart3 },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  const toggleSidebar = (e) => {
    // Stop propagation to prevent the click from reaching document
    e && e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Close sidebar when route changes on mobile
  React.useEffect(() => {
    if (isMobileView) {
      setIsOpen(false);
    }
  }, [location.pathname, isMobileView]);

  // Close sidebar when switching to desktop view
  React.useEffect(() => {
    if (!isMobileView) {
      setIsOpen(false);
    }
  }, [isMobileView]);

  // Close sidebar when clicking outside on mobile
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      // Only apply this for mobile view when sidebar is open
      if (isMobileView && isOpen) {
        const sidebarElement = document.querySelector('[data-sidebar="true"]');
        const toggleButton = document.querySelector('[data-sidebar-toggle="true"]');
        if (
          sidebarElement && !sidebarElement.contains(event.target) &&
          toggleButton && !toggleButton.contains(event.target)
        ) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isMobileView, isOpen]);

  // Handle link clicks: close sidebar on mobile
  const handleLinkClick = () => {
    if (isMobileView) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu toggle button */}
      <button 
        data-sidebar-toggle="true"
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-white shadow-md md:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div 
        data-sidebar="true"
        className={`w-64 h-screen bg-white shadow-md fixed left-0 top-0 z-40 transition-transform duration-300 ease-in-out ${
          isMobileView ? (isOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'
        }`}
      >
        <div className="flex items-center justify-center p-6 border-b">
          <PieChart className="text-retail-blue" size={24} />
          <h1 className="ml-2 text-xl font-semibold">Retail Intel</h1>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'bg-retail-blue text-white'
                      : 'text-gray-700 hover:bg-secondary'
                  }`}
                  onClick={handleLinkClick}
                >
                  <item.icon size={20} className={isActive(item.path) ? 'text-white' : 'text-retail-blue'} />
                  <span className="ml-3">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Backdrop overlay for mobile */}
      {isMobileView && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
