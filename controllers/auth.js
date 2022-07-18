const { response } = require('express');

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;

  if(name.length < 5) {
    return res.status(400).json({
        ok: false,
        msg: 'El nombre debe de ser de al menos 5 letras'
    })
  }

  res.status(201).json({
    ok: true,
    msg: 'register',
    name,
    email,
    password,
  });
};

const loginUser = (req, res= response) => {
    const { email, password } = req.body;
  res.json({
    ok: true,
    msg: 'login',
    email,
    password,
  });
  
};

const revalidateToken = (req, res= response) => {
  res.json({
    ok: true,
    msg: 'renew token',
  });
};

module.exports = {
  createUser,
  loginUser,
  revalidateToken,
};
