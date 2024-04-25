export default async function loadBalancer(chinaDownload, USDownaload) {
  const winner = Promise.race([chinaDownload, USDownaload]);
  return winner;
}
