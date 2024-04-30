export default function getStudentsByLocation(args) {
  const location = args.filter((i) => i.location === 'San Francisco');
  return location;
}
