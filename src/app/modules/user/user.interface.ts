import { HydratedDocument, Model } from "mongoose";
    
// Creating an interface
    export interface IUser {
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        };
        dateOFBirth: string;
        gender: "male" | "female";
        email?:  string;
        contactNo:  string;
        emergencyContactNo:  string;
        presentAddress:  string;
        permanentAddress:  string;
    }


//instance methods
export interface IUserMethods {
    fullName(): string;
  }

  export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }