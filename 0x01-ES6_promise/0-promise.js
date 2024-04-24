export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { message: 'Data retrieved successfully!' };
      resolve(data);
    }, 1000);
  });
}
