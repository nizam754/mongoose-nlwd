import User from "./user.model";

export const createUserToDB=async ()=> {
    const user = await new User({
        id: "802",
        role: "student",
        password: 'mypassword',
        name: {
            firstName: "Mr. Test",
            middleName: "babaji",
            lastName: "ka thullu"
        },
        gender: "male",
        email: "abc@gmail.com",
        contactNo: "01265896658",
        emergencyContactNo:"01236548965",
        presentAddress:  "Dhaka",
        permanentAddress: "KSA"
    });
      await user.save();
      return user;
    };