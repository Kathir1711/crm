

```markdown
# CRM Statistics Dashboard

A responsive CRM statistics dashboard built using Next.js, ReactJS, Tailwind CSS, and Chart.js. The dashboard displays various statistics using visual elements like pie charts, bar charts, and cards. It also includes a time selector to filter statistics by different time windows (e.g., 1 day, 1 week, 1 month, etc.). Dummy APIs are used to populate the page with data.

## Features
- **Responsive Design**: Layout adapts to different screen sizes using Tailwind CSS.
- **Statistics Display**: Show key stats like sales, new customers, and subscriptions in clean, modern cards.
- **Charts**: Visualize data using pie charts and bar charts.
- **Time Selector**: Filter data by time windows (1 day, 1 week, 1 month, etc.).
- **Dummy API**: Uses a simulated API for fetching random data based on the selected time window.

## Technologies Used
- **Next.js**: React framework for building server-side rendered web applications.
- **ReactJS**: Front-end JavaScript library for building UI components.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Chart.js**: A charting library for creating pie and bar charts.
- **Dummy API**: Custom API endpoints for fetching mock data.

## Installation and Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crm-statistics-dashboard.git
   ```
2. Navigate into the project directory:
   ```bash
   cd crm-statistics-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Application
1. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
2. Open your browser and visit:
   ```
   http://localhost:3000
   ```

### Building for Production
To build the application for production, run the following command:
```bash
npm run build
```
This will create an optimized build of your application in the `.next` folder.

To start the production server after building, run:
```bash
npm start
```

### Deployment
This project can be easily deployed on platforms like **Netlify** or **Vercel**. Since it's built with Next.js, no additional configuration is needed.

### Customization
You can customize the dummy API responses by modifying the `pages/api/dummy-data.js` file. You can also add more components, charts, and stats to the dashboard as needed.

## File Structure
```
├── components
│   ├── Charts.js        # Component for rendering pie and bar charts
│   ├── StatsCard.js     # Reusable component for displaying stats
│   └── TimeSelector.js  # Component for selecting time range
├── pages
│   ├── api
│   │   └── dummy-data.js # API route to return mock data
│   └── index.js         # Main dashboard page
├── public
├── styles
│   └── globals.css      # Global CSS styles (includes Tailwind setup)
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js   # Tailwind CSS configuration file
```

## Dependencies
- **react**: A JavaScript library for building user interfaces.
- **next**: React framework for server-side rendering and static site generation.
- **tailwindcss**: A utility-first CSS framework for rapid UI development.
- **chart.js**: A charting library to display pie and bar charts.
- **react-chartjs-2**: React wrapper for Chart.js to simplify integration.

