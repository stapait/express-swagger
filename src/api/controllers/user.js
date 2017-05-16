const getById = (req, res, next) => {
  const id = req.params.id;
  res.json({ message: `Got user id: ${id}` });
}

const postUser = (req, res, next) => {
  const id = req.body.id;
  const name = req.body.name;
  res.json({ message: `Inserted user id: ${id} name: ${name}` });
}

const deleteById = (req, res, next) => {
  const id = req.params.id;
  res.json({ message: `Deleted user id: ${id}` });
}

module.exports = { getById, postUser, deleteById };