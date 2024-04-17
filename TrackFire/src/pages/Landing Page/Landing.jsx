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
      <div className="flex justify-between bg-white mt-0 px-20 py-2">
        <div className="self-center">
          <h1 className="text-3xl font-bold">
            <span className="text-primary">Fin</span>
            <span className="text-gray-800">vo</span>
          </h1>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy
                            and paste into your apps. Accessible. Customizable.
                            Open Source.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <a
                      className="hover:bg-gradient-to-b from-muted/50 to-muted rounded-md p-2"
                      href="/docs"
                      title="Introduction"
                    >
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </a>
                    <a
                      className="hover:bg-gradient-to-b from-muted/50 to-muted rounded-md p-2"
                      href="/docs/installation"
                      title="Installation"
                    >
                      How to install dependencies and structure your app.
                    </a>
                    <a
                      className="hover:bg-gradient-to-b from-muted/50 to-muted rounded-md p-2"
                      href=""
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </a>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy
                            and paste into your apps. Accessible. Customizable.
                            Open Source.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <a
                      className="hover:bg-gradient-to-b from-muted/50 to-muted rounded-md p-2"
                      href="/docs"
                      title="Introduction"
                    >
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </a>
                    <a
                      className="hover:bg-gradient-to-b from-muted/50 to-muted rounded-md p-2"
                      href="/docs/installation"
                      title="Installation"
                    >
                      How to install dependencies and structure your app.
                    </a>
                    <a
                      className="hover:bg-gradient-to-b from-muted/50 to-muted rounded-md p-2"
                      href=""
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </a>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:bg-gradient-to-b from-muted/50 to-muted rounded-md p-2 pl-3 cursor-pointer text-sm">
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
      {/* Nav bar ends here */}
      {/* Hero section begins */}
      <div className="flex justify-between mx-20 mt-12">
        <div className="text-homeBlack font-bold text-8xl font-League-Spartans">
          <div>SPLIT</div>
          <div>MONEY</div>
          <div>NOT,</div>
          <div>FRIENDSHIPS,</div>
          <div className="text-sm text-gray-500 font-light">
            Finvo streamlines bill splitting among friends, ensuring seamless
            transactions for everyone involved.
          </div>
          <div className="text-sm text-gray-500 font-light">
            With its intuitive interface and smart features, managing expenses
            has never been easier.
          </div>
        </div>
        <div className="w-[430px] ">
          <img className="rounded-xl relative" src={hero} alt="Hero image"/>
          <img className="absolute w-[300px] rounded-2xl top-[135px] right-[148px]" src={hero1}/>
        </div>
      </div>
      {/* Hero section ends here */}
      <div className="mx-20 pt-10">
        <div className="mt-10 text-gray-500">Our Sponsors</div>
        <div className="flex justify-between">
          {logoArray.map((val, key) => {
            return (
              <div key={key} className="w-[150px]">
                <img src={val} alt={val} />
              </div>
            );
          })}
        </div>
      </div>
      {/* logo section ends here */}
      <div className="flex justify-between mx-20 mt-10">
        <div className="text-homeBlack font-bold text-3xl font-League-Spartans">
          <div>CONVENIENT, SAFE AND INTUITIVE</div>
        </div>
        <div className="text-sm text-gray-500 font-light font-Inter w-96">
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
      <footer className="border-t border-gray-300  mt-10">
      <div className="mx-20 mt-5 mb-5 flex justify-between">
        <div>
        <h1 className="text-lg font-bold">
            <span className="text-primary">Fin</span>
            <span className="text-gray-800">vo</span>
          </h1>
          <p className="text-sm text-gray-500 mt-5">
            Finvo is still work in progress <br/> so let us know if you face any issues while using the app
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
