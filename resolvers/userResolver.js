import { UserDB, GameDB } from "../db.js";

const userResolver = {
    Query: {
        usersquery() {
            return UserDB
        },
        singleuserqurey(_, args) {
            return UserDB.find((i) => i.id === args.id)
        }
    },
    userSchema: {
        inGames(parent) {
            return GameDB.filter((i) => i.userId === parent.id)
        }
    }

}
export default userResolver