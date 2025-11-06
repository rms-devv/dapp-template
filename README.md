# DApp Template Kit

[DOCS](https://deepwiki.com/rms-devv/dapp-template/7-configuration-and-setup) 

A complete template to quickly start your Web3 projects with the best technologies.

## 🚀 Technologies

- **Next.js** - React framework for production
- **RainbowKit** - The best way to connect a wallet
- **Tailwind CSS** - A utility-first CSS framework
- **Shadcn/ui** - Re-usable components built using Radix UI and Tailwind CSS
- **Zustand** - State management solution
- **Wagmi** - React Hooks for Ethereum
- **TypeScript** - Static type-checking

## ⚙️ Features

- Custom RainbowKit button with configurable styling
- Global loading state with route change indicator
- 404 page with automatic redirection
- Pre-configured Web3 providers
- Custom authentication provider
- Responsive layout

## 🔔 Custom Toast Notifications

The template includes a fully customizable toast notification system built with Shadcn/ui:

```typescript
// Example of success toast
showSuccessToast({
  title: "Success",
  description: "Operation completed successfully",
  className: "w-full border border-gray-700 bg-black text-white",
});

// Example of error toast
showErrorToast("Something went wrong!");
```

Features:
- Pre-built success and error toast functions
- Customizable styling through className prop
- Responsive design
- Custom duration
- Multiple toasts stacking
- Automatic cleanup

## 🛠 Included Hooks and Utilities

- `useBalance` - Hook for fetching user balance
- `useApprove` - Hook for ERC20 token approvals
- `useUserStore` - Zustand store for user address management
- Configured Next.js App Router
- TypeScript types for Web3 interactions

## 💻 Configuration

### Chain Configuration
Navigate to `src/config/index.tsx` to customize your blockchain configuration:
```typescript
// Example configuration
export const web3Config = getDefaultConfig({
  appName: "dapp-Template", // Application name (e.g., "MyDApp")
  projectId: "dapp-Template", // RainbowKit project ID
  chains: [baseSepolia as any],
  ssr: false,
  transports: {
    [baseSepolia.id]: http(), // replace baseSepolia base with the desired chain
  },
});

export const exampleContract = {
  address: "0x", // Contract address
  abi: erc20Abi as any, // ERC20 ABI
} as const;
```

### Smart Contract Integration
Add your smart contract configurations in the config directory:
```typescript
// Example contract configuration
export const contractConfig = {
  address: "YOUR_CONTRACT_ADDRESS",
  abi: YOUR_CONTRACT_ABI,
}
```

## 🚦 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/rms-devv/dapp-template
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
your-project/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CustomBtnApp.tsx
│   │   └── Auth/
│   │       └── AuthProvider.tsx
│   ├── config/
│   │   └── index.tsx
│   │   └── abi
│   │       └── ERC20.json
│   ├── hooks/
│   │   ├── useBalance.tsx
│   │   └── useApprove.tsx
│   ├── stores/
│   │   └── User
│   │       └── useAuthStore.tsx
│   ├── utils/
│   │   └── SC
│   │       └── getBalance.ts
│   │       └── approve.ts
│   │   └── toast
│   │       └── showToasts.tsx
│   └── pages/
│       ├── _app.tsx
│       ├── _document.tsx
│       ├── index.tsx
│       └── 404.tsx
│           └── index.tsx
└── public/
```

## 🔧 Customization

### RainbowKit Button
The `CustomBtnApp` component accepts className props for full style customization:
```typescript
<CustomBtnApp className="your-custom-classes-here" />
```

### Theme Configuration
You can modify the theme by adjusting the Tailwind configuration in `tailwind.config.js`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
