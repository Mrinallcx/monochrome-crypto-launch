import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-foreground">
          TOTO
        </div>
        
        <Button variant="default" size="default">
          Buy Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
