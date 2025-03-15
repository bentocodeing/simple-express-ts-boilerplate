# Express TypeScript Boilerplate

A modern, well-structured boilerplate for building Express.js applications with TypeScript. This template includes essential development tools and configurations to help you get started quickly with building robust Node.js applications.

## Features

- 🚀 [Express.js](https://expressjs.com/) - Fast, unopinionated web framework for Node.js
- 📝 [TypeScript](https://www.typescriptlang.org/) - Type safety and modern JavaScript features
- 🔄 Hot Reloading with [tsx](https://github.com/esbuild-kit/tsx)
- 🎨 Code formatting with [Prettier](https://prettier.io/)
- 🧹 Linting with [ESLint](https://eslint.org/)
- 🌍 Environment variable management with [dotenv](https://github.com/motdotla/dotenv)
- ✨ Type validation with [Zod](https://github.com/colinhacks/zod)

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd david-boilerplate-express
```

2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration.

## Available Scripts

- `npm run dev` - Start the development server with hot reloading
- `npm run build` - Build the TypeScript code
- `npm start` - Run the built application
- `npm run prod` - Build and run the production version
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
├── src/              # Source code
├── dist/             # Compiled JavaScript code
├── .vscode/          # VS Code configuration
├── .env             # Environment variables
├── .env.example     # Example environment variables
├── .eslintrc.json   # ESLint configuration
├── .prettierrc      # Prettier configuration
├── .prettierignore  # Prettier ignore file
├── tsconfig.json    # TypeScript configuration
└── package.json     # Project dependencies and scripts
```

## Environment Variables

Copy `.env.example` to `.env` and adjust the values as needed. The following variables are available:

```env
# Server Configuration
NODE_ENV=development    # Application environment (development/production)
PORT=3000              # Port number for the server to listen on

# Additional variables can be added as needed:
# DATABASE_URL=postgresql://user:password@localhost:5432/dbname
# JWT_SECRET=your-secret-key
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
