import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import User from "App/Models/User";

export default class UsersController {
  public async create({ request, response }: HttpContextContract) {
    try {
      const user = new User();
      user.username = request.input("username");
      user.email = request.input("email");
      user.password = request.input("password");

      let create_user = await user.save();

      let return_body = {
        success: true,
        details: create_user,
        message: "User Successully created",
      };

      response.send(return_body);
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  } //create

  public async fetch({ request, response }: HttpContextContract) {
    try {
      const users = await User.query();

      response.send(users);
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  } //fetch
}
