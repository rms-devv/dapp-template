import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";
import Link from "next/link";
import { CustomBtnApp } from "../connect-btn";

export const Hero = () => {
  return (
    <div className="min-h-screen py-10 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4">
      {/* Main Title Section */}
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          DApp Template Kit
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          A complete template to quickly start your Web3 projects with the best
          technologies
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <Link
            href="https://github.com/rms-devv/Dapp-template"
            target="_blank"
          >
            <Button variant="outline" className="gap-2">
              <Github className="w-5 h-5" />
              GitHub @rms-devv
            </Button>
          </Link>
        </div>
        {/* Demo RainbowKit Button */}
        <div className="flex justify-center mb-4">
          <CustomBtnApp className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-200 font-medium" />
        </div>
      </div>

      {/* Technologies Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mb-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">🚀 Technologies</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Next.js for rendering and routing</li>
              <li>• RainbowKit for Web3 connection</li>
              <li>• Tailwind CSS for styling</li>
              <li>• Shadcn/ui for components</li>
              <li>• Zustand for state management</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">⚙️ Configuration</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Customize your chain in src/config/index.tsx</li>
              <li>• Configure your smart contracts</li>
              <li>• Adapt providers to your needs</li>
              <li>• Modify Zustand stores</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">🛠 Included Hooks</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• useBalance for user balance</li>
              <li>• useApprove for ERC20 approvals</li>
              <li>• useUserStore for address management</li>
              <li>• More coming soon...</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Quick Start Section */}
      <Card className="bg-gray-800 border-gray-700 max-w-2xl w-full">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">🚦 Quick Start</h3>
          <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-300">
            <p># Clone the repository</p>
            <p>git clone https://github.com/rms-devv/dapp-template</p>
            <p className="mt-2"># Install dependencies</p>
            <p>npm install</p>
            <p className="mt-2"># Start development server</p>
            <p>npm run dev</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
