// import Image from "next/image";
import { FaHome, FaUser } from "react-icons/fa";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { LuWallet, LuPieChart } from "react-icons/lu";
import { IoNewspaperOutline, IoCalendarOutline } from "react-icons/io5";
import { HiOutlineCog } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { MdOutlineChair } from "react-icons/md";
import { HiArrowsRightLeft } from "react-icons/hi2";

import { Button } from "./components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full h-full grid grid-cols-4 gap-8">
        <div className="col-span-1 flex flex-col rounded-3xl bg-primary overflow-hidden">
          <div className="flex flex-col items-center gap-4 p-12 bg-primary-background shadow text-white">
            <h2 className="uppercase">Alex Johnson</h2>
            <h4>alex.johnson@gmail.com</h4>
          </div>
          <div className="px-12 py-8 space-y-12">
            <ul className="space-y-8 text-white text-xl">
              <li className="uppercase flex items-center gap-4">
                <FaHome className="text-secondary" />
                <p>DASHBOARD</p>
              </li>
              <li className="uppercase flex items-center gap-4">
                <PiAirplaneTiltLight className="text-secondary" />
                <p>FLIGHT</p>
              </li>
              <li className="uppercase flex items-center gap-4">
                <LuWallet className="text-secondary" />
                <p>WALLET</p>
              </li>
              <li className="uppercase flex items-center gap-4">
                <IoNewspaperOutline className="text-secondary" />
                <p>REPORTS</p>
              </li>
              <li className="uppercase flex items-center gap-4">
                <LuPieChart className="text-secondary" />
                <p>STATISTICS</p>
              </li>
              <li className="uppercase flex items-center gap-4">
                <HiOutlineCog className="text-secondary" />
                <p>SETTINGS</p>
              </li>
            </ul>
            <div>
              <h4 className="text-secondary text-lg">ACTIVE USERS</h4>
              <div>avatar avatar avatar avatar</div>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-6 flex-1">
          <div className="bg-white rounded-3xl p-8 space-y-6">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex justify-between col-span-2 py-2 px-4 rounded-full bg-primary-foreground">
                <div className="flex gap-2 items-center">
                  <ImLocation className="text-primary text-xl" />
                  <span>NEW YORK (JFK)</span>
                </div>
                <div className="bg-primary flex items-center p-3 rounded-full">
                  <HiArrowsRightLeft className="text-white" />
                </div>
                <div className="flex gap-2 items-center">
                  <ImLocation className="text-primary text-xl" />
                  <span>MUMBAI (BOM)</span>
                </div>
              </div>
              <Button className="text-primary font-semibold bg-primary-foreground gap-2">
                <IoCalendarOutline />
                29 JULY 2019
              </Button>
              <Button className="text-primary font-semibold bg-primary-foreground gap-2">
                <FaUser />2 TRAVELLERS
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="grid grid-cols-3 gap-2 col-span-2 rounded-full bg-primary-foreground">
                <Button>One Way</Button>
                <Button variant="ghost" className="bg-transparent">
                  Road Trip
                </Button>
                <Button variant="ghost" className="bg-transparent">
                  Multi City
                </Button>
              </div>
              <Button className="text-primary font-semibold bg-primary-foreground gap-2">
                <MdOutlineChair />
                First Class
              </Button>
              <Button variant="secondary">Search</Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium">RESULT (25)</h1>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                FILTER
              </Button>
              <Button variant="ghost" size="sm">
                TICKET OF CLASS
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <ul className="col-span-2 flex flex-col rounded-2xl  bg-white divide-y divide-dashed">
              <li className="p-8 flex justify-between items-center">
                <h1>LOGO</h1>
                <div className="space-y-2">
                  <h1 className="text-2xl font-medium">JFK</h1>
                  <p className="text-sm">13:00</p>
                </div>
                <div className="text-center">
                  <p className="text-xs">EMIRATES</p>
                  <h1 className="text-secondary font-medium">11H 20M</h1>
                  <p>NON-STOP</p>
                </div>
                <div className="space-y-2 text-right">
                  <h1 className="text-2xl font-medium">BOM</h1>
                  <p className="text-sm">14:20</p>
                </div>
                <div className="text-right space-y-4">
                  <p className="text-sm font-semibold">$1,572</p>
                  <Button size="sm" variant="secondary">
                    Book now
                  </Button>
                </div>
              </li>
              <li className="p-8 flex justify-between items-center">
                <h1>LOGO</h1>
                <div className="space-y-2">
                  <h1 className="text-2xl font-medium">JFK</h1>
                  <p className="text-sm">13:00</p>
                </div>
                <div className="text-center">
                  <p className="text-sm">EMIRATES</p>
                  <h1 className="text-secondary font-medium">11H 20M</h1>
                  <p>NON-STOP</p>
                </div>
                <div className="space-y-2 text-right">
                  <h1 className="text-2xl font-medium">BOM</h1>
                  <p className="text-sm">14:20</p>
                </div>
                <div className="text-right space-y-4">
                  <p className="text-sm font-semibold">$1,572</p>
                  <Button size="sm" variant="secondary">
                    Book now
                  </Button>
                </div>
              </li>
              <li className="p-8 flex justify-between items-center">
                <h1>LOGO</h1>
                <div className="space-y-2">
                  <h1 className="text-2xl font-medium">JFK</h1>
                  <p className="text-sm">13:00</p>
                </div>
                <div className="text-center">
                  <p className="text-sm">EMIRATES</p>
                  <h1 className="text-secondary font-medium">11H 20M</h1>
                  <p>NON-STOP</p>
                </div>
                <div className="space-y-2 text-right">
                  <h1 className="text-2xl font-medium">BOM</h1>
                  <p className="text-sm">14:20</p>
                </div>
                <div className="text-right space-y-4">
                  <p className="text-sm font-semibold">$1,572</p>
                  <Button size="sm" variant="secondary">
                    Book now
                  </Button>
                </div>
              </li>
              <li className="p-8 flex justify-between items-center">
                <h1>LOGO</h1>
                <div className="space-y-2">
                  <h1 className="text-2xl font-medium">JFK</h1>
                  <p className="text-sm">13:00</p>
                </div>
                <div className="text-center">
                  <p className="text-sm">EMIRATES</p>
                  <h1 className="text-secondary font-medium">11H 20M</h1>
                  <p>NON-STOP</p>
                </div>
                <div className="space-y-2 text-right">
                  <h1 className="text-2xl font-medium">BOM</h1>
                  <p className="text-sm">14:20</p>
                </div>
                <div className="text-right space-y-4">
                  <p className="text-xs font-semibold">$1,572</p>
                  <Button size="sm" variant="secondary">
                    Book now
                  </Button>
                </div>
              </li>
            </ul>
            <div className="rounded-2xl bg-primary text-white p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p>FROM</p>
                  <h2>JFK</h2>
                </div>
                <p>NON-STOP</p>
                <div>
                  <p>FROM</p>
                  <h2>JFK</h2>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <Button variant={"secondary"} size="sm">
                    NON STOP
                  </Button>
                  <Button size="sm">ONE STOP</Button>
                  <Button size="sm">MORE STOP</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
