import React from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const MobileMenu = () => {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Day Tours',
    path: '/day-tours'
  }, {
    name: 'International Tours',
    path: '/international-tours'
  }, {
    name: 'Accommodation',
    path: '/accommodation'
  }, {
    name: 'Contact Us',
    path: '/contact'
  }];

  const handleMenuItemClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="ml-4">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full flex flex-col p-0">
        <SheetHeader className="px-6">
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
        <div className="flex-1 overflow-y-auto w-full">
          <div className="flex flex-col w-full">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className="w-full"
                onClick={handleMenuItemClick}
                style={{ minHeight: '56px' }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <SheetFooter className="border-t border-gray-100 px-6">
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
  );
};

export default MobileMenu;
