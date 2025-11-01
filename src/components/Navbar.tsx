import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div className="w-full max-w-[700px] bg-background border border-border rounded-full px-6 h-14 flex items-center justify-between shadow-sm">
        <div className="text-2xl font-bold text-foreground">
          TOTO
        </div>
        
        <Button variant="default" size="sm" className="rounded-full">
          Buy Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
