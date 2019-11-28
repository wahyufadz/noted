'use strict'
const User = use('App/Models/User')

class AuthController {
  async register({ request, auth, response }) {
    const { username, email, password } = request.all()
    if (
      await User.findBy('email', email) == null
      && await User.findBy('username', username) == null
    ) {
      let newUser = new User()
      newUser.username = username
      newUser.email = email
      newUser.password = password
      await newUser.save()
      let accessToken = await auth.generate(newUser)
      return response.json({ data: newUser, access_token: accessToken })
    } else {
      return response.json({ message: 'Email or Username was registered' })
    }
  }

  async login({ request, auth, response }) {
    const { email, password } = request.all()
    try {
      if (await auth.attempt(email, password)) {
        let user = await User.findBy('email', email)
        let accessToken = await auth.generate(user)
        return response.json({ "data": user, "access_token": accessToken })
      }
    }
    catch (e) {
      return response.json({ message: 'Email and Password not match' })
    }
  }

  async checkEmailUsername({ request, response }) {
    const { type, data } = request.all()
    return response.json({
      data: await User.findBy(type, data)
        ? `${type} ${data} already registered`
        : `${type} ${data} can be used`
    })
  }
}

module.exports = AuthController
