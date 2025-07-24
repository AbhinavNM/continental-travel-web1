import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MapPin, Phone, Mail, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


const Navigation = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Tours',
      isDropdown: true,
      items: [
        { name: 'Day Tours', path: '/day-tours' },
        { name: 'International Tours', path: '/international-tours' },
        { name: 'Nature Tours', path: '/tours/nature' },
        { name: 'Cultural Tours', path: '/tours/culture' },
        { name: 'Adventure Tours', path: '/tours/adventure' },
      ],
    },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Transportation & Accommodation', path: '/transportation' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleMenuItemClick = () => {
    setIsSheetOpen(false);
  };

  return <>
      {/* Top Bar with Contact Info - Hidden on mobile */}
      <div className="hidden md:block bg-black/90 backdrop-blur-md text-white py-2 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+94 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@continualtravels.lk</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white/95 backdrop-blur-md shadow-lg fixed top-0 md:top-8 left-0 right-0 z-40 transition-transform duration-300 ${isScrolledDown ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 md:space-x-3 group flex-shrink-0">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-coolBlue-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <span className="text-white font-bold text-sm md:text-xl">CT</span>
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-sm md:text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-coolBlue-600 leading-tight truncate">Continental Tours & Travels</h1>
                <p className="text-xs md:text-sm text-gray-600">(Pvt) Ltd</p>
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {navItems.map(item => (
                  item.isDropdown ? (
                    <DropdownMenu key={item.name}>
                      <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-coolBlue-600 font-medium transition-all duration-300 relative group transform hover:scale-105 px-4 py-2 rounded-md bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white/90 outline-none">
                        {item.name} <ChevronDown className="h-4 w-4 ml-1" />
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coolBlue-600 transition-all duration-300 group-hover:w-full"></span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {item.items.map(subItem => (
                          <DropdownMenuItem key={subItem.name} asChild>
                            <Link to={subItem.path}>{subItem.name}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link key={item.name} to={item.path} className="text-gray-700 hover:text-coolBlue-600 font-medium transition-all duration-300 relative group transform hover:scale-105 px-4 py-2 rounded-md bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white/90">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coolBlue-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )
                ))}
              </div>
            </div>

            {/* Book Now Button - Desktop */}
            <div className="hidden md:block">
              <Button className="bg-coolBlue-600/90 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold hover:bg-coolBlue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 shadow-md">
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="ml-4">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full flex flex-col">
                  <SheetHeader>
                    <SheetTitle>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-coolBlue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">CT</span>
                        </div>
                        <div>
                          <h1 className="text-lg font-bold text-gray-800">Continental Tours</h1>
                          <p className="text-sm text-gray-600">(Pvt) Ltd</p>
                        </div>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex-1 overflow-y-auto py-6">
                    <div className="flex flex-col space-y-2">
                      {navItems.map(item => (
                        item.isDropdown ? (
                          <Collapsible key={item.name} className="w-full">
                            <CollapsibleTrigger className="flex justify-between items-center text-gray-700 hover:text-coolBlue-600 font-semibold py-4 pl-8 pr-4 text-lg transition-all duration-300 w-full">
                              {item.name}
                              <ChevronDown className="h-5 w-5" />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <div className="flex flex-col pl-12">
                                {item.items.map(subItem => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    className="text-gray-600 hover:text-coolBlue-600 py-3 text-base"
                                    onClick={handleMenuItemClick}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        ) : (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="text-gray-700 hover:text-coolBlue-600 font-semibold py-4 pl-8 pr-4 text-lg transition-all duration-300 flex items-center w-full"
                            onClick={handleMenuItemClick}
                            style={{ minHeight: '56px' }}
                          >
                            {item.name}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                  <SheetFooter className="pt-4 border-t border-gray-100">
                    <div className="space-y-4 w-full">
                      <Button
                        className="w-full bg-coolBlue-600 text-white"
                        onClick={handleMenuItemClick}
                      >
                        Book Now
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={handleMenuItemClick}
                      >
                        Plan Your Trip
                      </Button>
                    </div>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>;
};

export default Navigation;
