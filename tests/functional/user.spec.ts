import { test } from "@japa/runner";

test.group("User", () => {
  // Write your test here
  const mockUserData = {
    username: "Sample user",
    email: "user@sample.com",
    password: "12345678",
  };
  test("can create a new user", async ({ client }) => {
    const response = await client.post("/api/user").form(mockUserData);

    response.assertStatus(200);
    response.assertBodyContains({
      details: { username: "Sample user", email: "user@sample.com" },
      message: "User Successully created",
    });
  });

  test("can retrieve list of users", async ({ client }) => {
    const response = await client.get("/api/users");

    console.log(response.body());

    response.assertStatus(200);
  });
});
