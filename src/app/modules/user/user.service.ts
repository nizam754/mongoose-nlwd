import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB=async (payload:IUser):Promise<IUser> => {
    
    //Creating a new user
    const user = await new User(payload); //User -> class user -> instance
      await user.save(); //build in instance methods
      console.log(user.fullName())
    //   user.fullName(); // custom instance methods
      return user;
    };

    export const getUsersFromDB= async ():Promise<IUser[]>=> {
        const users = await User.find();
        return users;
    }

    export const getUserByIdFromDB = async(payload:string): Promise<IUser | null>=> {
        const user = await User.findOne({id:payload}, {name: 1, contactNo: 1});
        return user;
    };

    export const getAdminUsersFromDB = async()=> {
        const admins = await User.getAdminUsers();
        console.log(admins);
        return admins;
    };
    

    //Class -> Attach -> Method -> Directly call using Class