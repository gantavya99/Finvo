import { Button } from "@/components/ui/button";
import React from "react";
import hero from "../../assets/hero.png";
import hero1 from "../../assets/image.png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
const logoArray = [logo1, logo2, logo3, logo4, logo5];
const Landing = () => {
  return (
    <div className="bg-slate-50">
     <div className="bg-white px-4 py-2 md:px-20">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-primary">Fin</span>
            <span className="text-gray-800">vo</span>
          </h1>
        </div>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6">
                    <li>
                      <a
                        className="hover:bg-gray-100 rounded-md p-2 block"
                        href="/docs"
                        title="Introduction"
                      >
                        Introduction
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:bg-gray-100 rounded-md p-2 block"
                        href="/docs/installation"
                        title="Installation"
                      >
                        Installation
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:bg-gray-100 rounded-md p-2 block"
                        href=""
                        title="Typography"
                      >
                        Typography
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6">
                    <li>
                      <a
                        className="hover:bg-gray-100 rounded-md p-2 block"
                        href="/features"
                        title="Features"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:bg-gray-100 rounded-md p-2 block"
                        href="/pricing"
                        title="Pricing"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:bg-gray-100 rounded-md p-2 block"
                        href="/faq"
                        title="FAQ"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:bg-gray-100 rounded-md p-2 pl-3 cursor-pointer text-sm">
                  Need Help?
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <Button className="bg-white text-black mx-2 hover:bg-gray-100">
            Login
          </Button>
          <Button className="hover:text-black border border-primary">
            Register
          </Button>
        </div>
      </div>
    </div>
      {/* Nav bar ends here */}
      {/* Hero section begins */}
      <div className="flex flex-wrap justify-between lg:mx-20 mx-5 mt-12">
        <div className="text-homeBlack font-bold text-5xl lg:text-8xl font-League-Spartans">
          <div>SPLIT</div>
          <div>MONEY,</div>
          <div className="text-homeGreen">NOT</div>
          <div className="mb-6 lg:mb-0">FRIENDSHIPS</div>
          <div className="text-sm text-gray-500 font-light">
            Finvo streamlines bill splitting among friends, ensuring seamless
            transactions for everyone involved.
          </div>
          <div className="text-sm text-gray-500 font-light mb-7 lg:mb-0">
            With its intuitive interface and smart features, managing expenses
            has never been easier.
          </div>
        </div>
        <div className="w-[400px]">
          <img className="rounded-xl" src={hero1} alt="Hero image"/>
         
        </div>
      </div>
      {/* Hero section ends here */}
      <div className="lg:mx-20 mx-5 pt-10">
        <div className="mt-10 text-gray-500">Our Sponsors</div>
        <div className="flex justify-between">
          {logoArray.map((val, key) => {
            return (
              <div key={key} className="w-[150px] px-2">
                <img src={val} alt={val} />
              </div>
            );
          })}
        </div>
      </div>
      {/* logo section ends here */}
      <div className="flex flex-wrap justify-between lg:mx-20 mx-5 mt-10">
        <div className="text-homeBlack font-bold text-3xl font-League-Spartans">
          <div>CONVENIENT, SAFE AND INTUITIVE</div>
        </div>
        <div className="text-sm text-gray-500 font-light font-Inter w-96 mt-10 lg:mt-0">
          <p>
            Unlock a new level of financial freedom with Finvo's app.
          </p>
          <p>
            Enjoy instant notifications for shared expenses, effortless bill
            splitting with friends,
          </p>
          <p>
            and insightful spending analytics—all accessible from your pocket.
          </p>
        </div>
      </div>
      {/* information section ends here */}
      <footer className="border-t border-gray-300 mt-10">
  <div className="mx-4 md:mx-20 mt-5 mb-5 flex flex-col md:flex-row justify-between">
    <div className="mb-4 md:mb-0">
      <h1 className="text-lg font-bold">
        <span className="text-primary">Fin</span>
        <span className="text-gray-800">vo</span>
      </h1>
      <p className="text-sm text-gray-500 mt-2 md:mt-5">
        Finvo is still a work in progress. <br/> Let us know if you face any issues while using the app.
      </p>
    </div>
    <div className="text-sm text-gray-500">
      Contact Us - anonymous@xyz.com
    </div>
  </div>
</footer>

     
    </div>
  );
};

export default Landing;
