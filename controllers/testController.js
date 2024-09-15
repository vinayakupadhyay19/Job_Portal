export const testConstroller = (req, res) => {
  const { name, email } = req.body;
  res
    .status(200)
    .json({ message: "Response of test is: " + name + " and " + email });
  return;
};
