import User from "./user.model";

export const createUserToDB=async ()=> {
    const user = await new User({
        id: "778",
        role: "student",
        password: 'mypassword',
        name: {
            firstName: "M.",
            middleName: "Nizam",
            lastName: "Babu"
        },
        gender: "male",
        email: "abc@gmail.com",
        contactNo: "01265896658",
        emergencyContactNo:"01236548965",
        presentAddress:  "Dhaka",
        permanentAddress: "KSA"
    });
      await user.save();
      console.log(user);
    };