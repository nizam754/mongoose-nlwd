import { IUser, IUserMethods } from './user.interface';
// Creating schema using interface

import { Model, Schema, model } from "mongoose";
type UserModel = Model<IUser, {}, IUserMethods>;

    const userSchema = new Schema<IUser, UserModel, IUserMethods>({
        id: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        name: {
            firstName: {
                type: String,
                required: true
            },
            middleName: {
                type: String
            },
            lastName: {
                type: String,
                required: true
            }
        },
        dateOFBirth:{
            type: String,
    
        },
        gender:{
            type: String,
            enum: ["male", "female"]
        },
        email:{
            type: String
        },
        contactNo:{
            type: String,
            required: true
        },
        emergencyContactNo:{
            type: String,
            required: true
        },
        presentAddress:{
            type: String,
            required: true
        },
        permanentAddress:{
            type: String,
            required: true
        }
      });

      userSchema.method('fullName', function fullName() {
        return this.name.firstName + ' ' + this.name.lastName;
      });
    
      //Create a Model.
    
    const User = model<IUser, UserModel>("User", userSchema);

    export default User;

    // instance methods --> instance er methods
    // class -> instance + methods -> instance methods