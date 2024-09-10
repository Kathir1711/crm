export default function handler(req, res) {
  const { timeWindow } = req.query;

  const data = {
    sales: Math.floor(Math.random() * 1000),
    customers: Math.floor(Math.random() * 200),
    subscriptions: Math.floor(Math.random() * 300),
    pieChartData: {
      labels: ['Product A', 'Product B', 'Product C'],
      values: [300, 500, 200],
    },
    barChartData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      values: [100, 200, 150, 220, 300, 250],
    },
  };

  res.status(200).json(data);
}
